import {setRequestLocale} from 'next-intl/server';
import {FoundationPage} from '@/components/layout/foundation-page';
export default async function Page({params}: {params: Promise<{locale: string}>}) {const {locale} = await params; setRequestLocale(locale); return <FoundationPage section="story" />;}
