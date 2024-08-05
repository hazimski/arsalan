import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const excludedPaths = ["/favicon.ico", "/_next/", "/static/"];
  const isExcluded = excludedPaths.some((path) => pathname.startsWith(path));
  // Check if the request is for the root page
  if (pathname === "/") {
    return NextResponse.next(); // Continue to the root page
  }

  // Redirect all other pages to the subdomain
  const subdomain = "app.chatpad.co";
  const redirectUrl = new URL(
    `https://${subdomain}${pathname}${search}`,
    req.url
  );
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
