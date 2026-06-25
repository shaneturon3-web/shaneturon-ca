import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req: any) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }: any) => {
        const path = req?.nextUrl?.pathname ?? '';
        if (path?.startsWith('/admin')) {
          return !!token;
        }
        return true;
      },
    },
  }
);

export const config = {
  matcher: ['/admin/:path*'],
};
