"""
Replace the obsolete street address on page 17 of the corporate profile PDF
with the current district-level location.

The profile is a Chromium print: text is drawn one glyph per `Tj` with explicit
per-glyph `Td` advances, using subsetted Identity-H CID fonts. Rather than
rewriting those advances, this replaces the two address lines with a single
`Tj` carrying the whole replacement string — the viewer then advances each
glyph by its own width from the font's /W array.

The replacement is drawn with /F42, the only Carlito-Regular subset already
present in page 17's resources whose glyph set covers every character of the
new string (/F46, which drew the old address, has no "V"; /F26 has no "L").
Same typeface, same size, same fill colour, same baseline.

Run:  python3 scripts/patch-profile-address.py
"""
import re
import shutil
import sys
from pathlib import Path

import pypdf
from pypdf.generic import DecodedStreamObject

PDF = Path("public/brochure/jirow-technologies-profile.pdf")
PAGE_INDEX = 16                      # page 17, "Differentiation & Contact"
OLD_LINES = ("3rd Floor, The Octagon, 32A Commercial Avenue", "Sabo, Yaba, Lagos, Nigeria")
NEW_LINE = "Victoria Island, Lagos, Nigeria"
DRAW_FONT = "/F42"
FONT_SIZE = "11.1999998"


def unicode_to_gid(font_obj):
    """Reverse the font's ToUnicode CMap: character -> glyph id."""
    tu = font_obj.get("/ToUnicode")
    if tu is None:
        return {}
    cmap = tu.get_object().get_data().decode("latin-1")
    out = {}
    for block in re.finditer(r"beginbfchar(.*?)endbfchar", cmap, re.S):
        for gid, uni in re.findall(r"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>", block.group(1)):
            if len(uni) > 4:          # ligature -> several chars, not usable in reverse
                continue
            out.setdefault(chr(int(uni, 16)), int(gid, 16))
    for block in re.finditer(r"beginbfrange(.*?)endbfrange", cmap, re.S):
        for lo, hi, start in re.findall(
            r"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>", block.group(1)
        ):
            lo, hi, start = int(lo, 16), int(hi, 16), int(start, 16)
            for gid in range(lo, hi + 1):
                out.setdefault(chr(start + gid - lo), gid)
    return out


def main():
    reader = pypdf.PdfReader(str(PDF))
    page = reader.pages[PAGE_INDEX]
    data = page.get_contents().get_data()

    text = page.extract_text() or ""
    for line in OLD_LINES:
        if line not in text:
            sys.exit(f"abort: expected line not found on page {PAGE_INDEX + 1}: {line!r}")

    font = page["/Resources"]["/Font"][DRAW_FONT].get_object()
    u2g = unicode_to_gid(font)
    missing = sorted({c for c in NEW_LINE if c not in u2g})
    if missing:
        sys.exit(f"abort: {DRAW_FONT} subset is missing glyphs {missing}")
    glyphs = "".join(f"{u2g[c]:04X}" for c in NEW_LINE)

    # The two address lines are two adjacent BT/ET text objects. Find the byte
    # range from the first glyph of line one to the "Tj" closing line two, and
    # collapse it into a single show-text operation.
    start_marker = b"BT\n/F46 " + FONT_SIZE.encode() + b" Tf\n1 0 0 -1 89.90625 18776 Tm\n"
    end_marker = b" Tj\nET\n.7882 .6275 .3608 RG"
    si = data.find(start_marker)
    ei = data.find(end_marker, si)
    if si < 0 or ei < 0:
        sys.exit("abort: could not locate the address text objects — the PDF layout has changed")

    body_start = si + len(start_marker)
    replacement = f"{DRAW_FONT} {FONT_SIZE} Tf <{glyphs}> Tj".encode()
    patched = data[:body_start] + replacement + data[ei + len(b" Tj"):]

    writer = pypdf.PdfWriter(clone_from=reader)
    stream = DecodedStreamObject()
    stream.set_data(patched)
    writer.pages[PAGE_INDEX].replace_contents(stream)

    backup = PDF.with_suffix(".pdf.bak")
    shutil.copy2(PDF, backup)
    with open(PDF, "wb") as fh:
        writer.write(fh)

    check = (pypdf.PdfReader(str(PDF)).pages[PAGE_INDEX].extract_text() or "")
    for line in OLD_LINES:
        if line in check:
            sys.exit(f"abort: old address still present after patch: {line!r}")
    if NEW_LINE not in check:
        sys.exit("abort: new location not found after patch")
    backup.unlink()
    print(f"patched page {PAGE_INDEX + 1}: {NEW_LINE}")


if __name__ == "__main__":
    main()
