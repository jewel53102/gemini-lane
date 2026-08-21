import { NextRequest, NextResponse } from "next/server";

const PORTAL_USERNAME = "optimind";

function isAuthorized(request: NextRequest): boolean {
  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) return false;

  const decoded = atob(auth.slice(6));
  const separatorIndex = decoded.indexOf(":");
  if (separatorIndex === -1) return false;

  const user = decoded.slice(0, separatorIndex);
  const pass = decoded.slice(separatorIndex + 1);
  const expectedPass = process.env.OPTIMIND_PORTAL_PASSWORD;

  return user === PORTAL_USERNAME && !!expectedPass && pass === expectedPass;
}

export function middleware(request: NextRequest) {
  if (isAuthorized(request)) {
    return NextResponse.next();
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="OptiMind Portal", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/portal-86c7a4a1ee2f/:path*"],
};
