import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(
  __dirname,
  "..",
  "public",
  "brochure",
  "jirow-technologies-profile.pdf"
);

const escapePdf = (value) =>
  value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");

const lines = [
  ["Jirow Technologies Limited", 54, 714, 28, "bold", "gold"],
  [
    "Reliable Estate Power. Smarter Infrastructure.",
    54,
    676,
    17,
    "bold",
    "cream"
  ],
  [
    "Embedded power infrastructure, hybrid energy systems, smart monitoring and managed operations for estates, commercial communities and industrial clusters.",
    54,
    642,
    11,
    "regular",
    "steel"
  ],
  ["Core Capabilities", 54, 574, 15, "bold", "gold"],
  ["- Embedded estate power architecture", 70, 542, 12, "regular", "cream"],
  ["- Smart metering and energy monitoring", 70, 516, 12, "regular", "cream"],
  ["- Hybrid generation, solar and battery integration", 70, 490, 12, "regular", "cream"],
  ["- Runtime-based maintenance and managed operations", 70, 464, 12, "regular", "cream"],
  ["Operating Model", 54, 392, 15, "bold", "gold"],
  [
    "Assess demand, engineer the infrastructure layer, deploy the system, monitor performance and optimize operations over time.",
    70,
    360,
    12,
    "regular",
    "cream"
  ],
  ["Contact: info@jirowtechnologies.com", 54, 116, 13, "bold", "gold"],
  ["Innovate. Integrate. Elevate.", 54, 86, 11, "regular", "steel"]
];

const colors = {
  gold: "0.824 0.675 0.341 rg",
  cream: "0.984 0.969 0.925 rg",
  steel: "0.737 0.784 0.784 rg"
};

const content = [
  "q",
  "0.008 0.043 0.059 rg",
  "0 0 612 792 re f",
  "0.027 0.137 0.122 rg",
  "34 310 544 418 re f",
  "0.824 0.675 0.341 rg",
  "54 612 504 2 re f",
  "54 148 504 1 re f",
  "BT",
  ...lines.flatMap(([text, x, y, size, weight, color]) => [
    colors[color],
    `/${weight === "bold" ? "F2" : "F1"} ${size} Tf`,
    `1 0 0 1 ${x} ${y} Tm`,
    `(${escapePdf(text)}) Tj`
  ]),
  "ET",
  "Q"
].join("\n");

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  `<< /Length ${Buffer.byteLength(content, "utf8")} >>\nstream\n${content}\nendstream`
];

let pdf = "%PDF-1.4\n";
const offsets = [0];

objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
offsets.slice(1).forEach((offset) => {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
});
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
pdf += `startxref\n${xrefOffset}\n%%EOF\n`;

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, pdf, "utf8");

console.log(`Generated ${outputPath}`);
