/* import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/i18n.config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  let locale = '';

  try {
    locale = matchLocale(languages, locales, i18n.defaultLocale);
  } catch (error) {
    console.error('Error matching locale:', error);
    locale = i18n.defaultLocale;
  }

  return locale;
}


export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Check if the pathname starts with /public
    const isPublicPath = pathname.startsWith('/review-photos');
    const isPublicPath2=pathname.startsWith("/favicon.ico")
    const isPublicPath3=pathname.startsWith("/sitemap.xml")
    const isPublicPath4=pathname.startsWith("/robots.txt")
    const isPublicPath5=pathname.startsWith("/.")

    // If it is not /public, redirect with the corrected locale
    if (!isPublicPath&&!isPublicPath2&&!isPublicPath3&&!isPublicPath4&&!isPublicPath5) {
      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
          request.url
        )
      );
    }
  }else{

  const newPathname = pathname.toLowerCase();
  if (newPathname !== pathname) {
    return NextResponse.redirect(
      new URL(
        `${newPathname}${request.nextUrl.search || ''}`,
        request.url
      )
    );
 }
}
 return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
 */
import { NextRequest, NextResponse } from 'next/server'
 
const PUBLIC_FILE = /\.(.*)$/
 
export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }
 
  if (req.nextUrl.locale === 'default') {
    const locale = req.cookies.get('NEXT_LOCALE')?.value || 'ru'
 
    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    )
  }
}