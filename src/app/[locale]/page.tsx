import {setRequestLocale} from 'next-intl/server';
import {getFeaturedFragrances, getFragranceBySlug} from '@/lib/content/fragrances';
import {getHomePageContent} from '@/lib/content/home';
import {Hero} from '@/components/home/hero';
import {FeaturedFragrances} from '@/components/home/featured-fragrances';
import {BrandStory} from '@/components/home/brand-story';
import {FragranceNotes} from '@/components/home/fragrance-notes';
import {BrandValues} from '@/components/home/brand-values';
import {Discovery, Closing} from '@/components/home/discovery';
import type {Locale} from '@/types/content';
export default async function Home({params}: {params: Promise<{locale: Locale}>}) {
 const {locale} = await params; setRequestLocale(locale);
 const [content, fragrances] = await Promise.all([getHomePageContent(), getFeaturedFragrances()]);
 const signatureFragrance = await getFragranceBySlug(content.values.fragranceId);
 return <><Hero content={content.hero} locale={locale} /><FeaturedFragrances fragrances={fragrances} locale={locale} href={content.featured.ctaHref} /><BrandStory content={content.story} locale={locale} /><BrandValues fragrance={signatureFragrance} locale={locale} /><FragranceNotes fragrance={signatureFragrance} locale={locale} /><Discovery content={content.discovery} locale={locale} /><Closing href={content.closing.ctaHref} /></>;
}
