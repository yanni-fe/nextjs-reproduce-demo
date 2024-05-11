import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {

  console.log('middleware.ts', request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith('/demo/_next/static')) {
    return NextResponse.rewrite(new URL(request.nextUrl.pathname.replace('/demo', ''), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/data|favicon.ico|images|static).*)', '/:path'],
};
