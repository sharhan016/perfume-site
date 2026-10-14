import {getTranslations} from 'next-intl/server';
import {FadeReveal} from '@/components/animations/fade-reveal';
import {EditorialImage} from '@/components/ui/editorial-image';
import {EditorialLink} from '@/components/ui/editorial-link';
import type {Fragrance, Locale} from '@/types/content';
export async function FeaturedFragrances({fragrances, locale, href}: {fragrances: Fragrance[]; locale: Locale; href: string}) {
 const t = await getTranslations('Home.featured');
 return <section id="fragrances" className="featured-section container section-space" aria-labelledby="featured-title"><FadeReveal><div className="section-header"><div><p className="eyebrow">{t('eyebrow')}</p><h2 id="featured-title">{t('title')}</h2><p className="section-subtitle">{t('subtitle')}</p></div><EditorialLink href={href}>{t('all')}</EditorialLink></div></FadeReveal><div className="fragrance-grid">{fragrances.map(item => <FadeReveal key={item.id}><article className={`fragrance-showcase theme-${item.theme}`}><div className="fragrance-image"><EditorialImage asset={item.images.primary} locale={locale} sizes="(max-width: 599px) 90vw, (max-width: 899px) 44vw, 28vw" /></div><div className="fragrance-caption"><div><h3 dir="ltr">{item.name}</h3><p>{item.tagline[locale]}</p></div><EditorialLink href={`${href}#${item.slug}`}>{t('explore', {name: item.name})}</EditorialLink></div></article></FadeReveal>)}</div>{!fragrances.length && <p className="section-subtitle">{t('empty')}</p>}</section>;
}
