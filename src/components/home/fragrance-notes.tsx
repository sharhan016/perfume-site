import {getTranslations} from 'next-intl/server';
import {getNotesLabels} from '@/lib/content/notes';
import {FragrancePreview} from '@/components/fragrance/fragrance-preview';
import {FadeReveal} from '@/components/animations/fade-reveal';
import type {HomePageContent} from '@/content/pages/home';
import type {Fragrance,Locale} from '@/types/content';
export async function FragranceNotes({fragrances,content,locale}:{fragrances:Fragrance[];content:HomePageContent['notes'];locale:Locale}) {
 const available=fragrances.filter(fragrance=>fragrance.notes);
 if(!available.length) return null;
 const t=await getTranslations('Notes');const labels=await getNotesLabels();
 return <section className="home-notes container section-space" aria-labelledby="composition-title"><FadeReveal><p className="eyebrow">{t('eyebrow')}</p><h2 id="composition-title">{t('heading')}</h2><p className="section-subtitle">{t('intro')}</p></FadeReveal><FragrancePreview fragrances={available} initialId={content.fragranceId} previewCount={content.previewCount} locale={locale} labels={labels} environment={content.environment} descriptions={{top:t('impressions.top'),heart:t('impressions.heart'),base:t('impressions.base')}} selectLabel={t('select')} exploreLabels={Object.fromEntries(available.map(product=>[product.id,t('explore',{name:product.name})]))}/></section>;
}
