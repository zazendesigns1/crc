import { NextResponse, type NextRequest } from "next/server";

/** Temporary password gate for the preview. Remove this file (or unset SITE_PASSWORD) at launch. */
export function middleware(req: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  if (!password) return NextResponse.next();
  const { pathname } = req.nextUrl;
  if (pathname === "/unlock" || pathname === "/api/unlock") return NextResponse.next();
  if (req.cookies.get("crg_preview")?.value === password) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = "/unlock";
  url.search = `?next=${encodeURIComponent(pathname + req.nextUrl.search)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:webp|png|jpg|svg|woff2)$).*)"],
};
