import {getTranslations} from 'next-intl/server';
import {FadeReveal} from '@/components/animations/fade-reveal';
import {ParallaxImage} from '@/components/animations/parallax-image';
import {EditorialImage} from '@/components/ui/editorial-image';
import {EditorialLink} from '@/components/ui/editorial-link';
import {FragranceAttributes} from '@/components/fragrance/attributes';
import type {Fragrance, Locale} from '@/types/content';
export async function BrandValues({fragrance,locale}: {fragrance:Fragrance|undefined;locale:Locale}) {
 const t=await getTranslations('Home.values');
 if(!fragrance?.attributes?.length) return null;
 return <section className={`brand-signature container section-space theme-${fragrance.theme}`} aria-labelledby="values-title"><FadeReveal className="brand-signature-art"><ParallaxImage><EditorialImage asset={fragrance.images.primary} locale={locale} sizes="(max-width:899px) 90vw, 48vw"/></ParallaxImage></FadeReveal><div className="brand-signature-copy"><FadeReveal><p className="eyebrow">{t('eyebrow',{name:fragrance.name})}</p><h2 id="values-title">{t('title')}</h2><p className="signature-name" dir="ltr">{fragrance.name}</p><p className="section-subtitle">{fragrance.tagline[locale]}</p></FadeReveal><FadeReveal delay={.12}><FragranceAttributes attributes={fragrance.attributes} locale={locale} reveal/><EditorialLink href={`/fragrances#${fragrance.slug}`}>{t('explore',{name:fragrance.name})}</EditorialLink></FadeReveal></div></section>;
}
