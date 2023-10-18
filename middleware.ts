import { NextRequest, NextResponse } from "next/server";
import middleware from "next-auth/middleware";

export default middleware;

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

// if we have /users/:id* parameter means zero or more parameters
// if we have /users/:id+ parameter means one or more parameters
// if we have /users/:id? parameter means zero or one parameters

export const config = {
  matcher: ["/users/:id*"],
};
