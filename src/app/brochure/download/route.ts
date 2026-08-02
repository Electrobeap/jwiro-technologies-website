import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET() {
  const pdf = await readFile(
    path.join(process.cwd(), "public", "brochure", "jirow-technologies-profile.pdf")
  );

  return new Response(pdf, {
    headers: {
      "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
      "Content-Disposition": 'attachment; filename="Jirow-Corporate-Profile-2026.pdf"',
      "Content-Type": "application/pdf",
      "X-Content-Type-Options": "nosniff"
    }
  });
}
