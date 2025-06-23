import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);
    const url = new URL(request.url)

    if (url.pathname === '/verify-email') {
        if (sessionCookie) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
        const email = url.searchParams.get('email')
        const token = url.searchParams.get('token')

        if (!email && !token) {
            return NextResponse.redirect(new URL("/", request.url));
        }

        return NextResponse.next();
    }

    if (!sessionCookie) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard", "/verify-email"],
};