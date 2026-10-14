import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {setRequestLocale, getTranslations} from 'next-intl/server';
import {Inter, Playfair_Display, Noto_Naskh_Arabic, IBM_Plex_Sans_Arabic} from 'next/font/google';
import {routing} from '@/i18n/routing';
import {Header} from '@/components/layout/header';
import {Footer} from '@/components/layout/footer';
import '@/styles/globals.css';
const inter = Inter({subsets: ['latin'], variable: '--font-inter', display: 'swap'});
const playfair = Playfair_Display({subsets: ['latin'], variable: '--font-playfair', display: 'swap'});
const naskh = Noto_Naskh_Arabic({subsets: ['arabic'], variable: '--font-naskh', display: 'swap'});
const plex = IBM_Plex_Sans_Arabic({subsets: ['arabic'], weight: ['400', '500'], variable: '--font-plex', display: 'swap'});
export function generateStaticParams() {return routing.locales.map(locale => ({locale}));}
export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
 const {locale} = await params;
 if (!hasLocale(routing.locales, locale)) notFound();
 const t = await getTranslations({locale, namespace: 'Metadata'});
 return {title: {default: t('title'), template: '%s | ORYNOVA'}, description: t('description'), robots: {index: false, follow: false}};
}
export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: Promise<{locale: string}>}) {
 const {locale} = await params;
 if (!hasLocale(routing.locales, locale)) notFound();
 setRequestLocale(locale);
 const t = await getTranslations('Nav');
 return <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${inter.variable} ${playfair.variable} ${naskh.variable} ${plex.variable}`}><body><NextIntlClientProvider><a className="skip-link" href="#main">{t('skip')}</a><Header /><main id="main" tabIndex={-1}>{children}</main><Footer /></NextIntlClientProvider></body></html>;
}
