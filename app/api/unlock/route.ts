import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const pass = String(form.get("password") ?? "");
  const next = String(form.get("next") ?? "/");
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/";
  const base = new URL(req.url);
  if (pass !== process.env.SITE_PASSWORD) {
    return NextResponse.redirect(new URL(`/unlock?error=1&next=${encodeURIComponent(safeNext)}`, base), 303);
  }
  const res = NextResponse.redirect(new URL(safeNext, base), 303);
  res.cookies.set("crg_preview", pass, { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 30 });
  return res;
}
