import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {CollectionGallery} from './collection-gallery';
import {FadeReveal} from '@/components/animations/fade-reveal';
import {EditorialImage} from '@/components/ui/editorial-image';
import {EditorialLink} from '@/components/ui/editorial-link';
import type {Fragrance, Locale} from '@/types/content';
export async function FeaturedFragrances({fragrances, locale, href}: {fragrances: Fragrance[]; locale: Locale; href: string}) {
 const t = await getTranslations('Home.featured');
 return <section id="fragrances" className="featured-section container section-space" aria-labelledby="featured-title"><FadeReveal><div className="section-header"><div><p className="eyebrow">{t('eyebrow')}</p><h2 id="featured-title">{t('title')}</h2><p className="section-subtitle">{t('subtitle')}</p></div><EditorialLink href={href}>{t('all')}</EditorialLink></div></FadeReveal><CollectionGallery count={fragrances.length} locale={locale} labels={{previous:t('previous'),next:t('next'),browse:t('browse')}}>{fragrances.map(item => <FadeReveal key={item.id} className="gallery-item" treatment="image"><article className={`fragrance-showcase theme-${item.theme}`}><Link href={`${href}#${item.slug}`} className="fragrance-image bottle-stage" aria-label={t('explore', {name:item.name})}><EditorialImage asset={item.images.isolated || item.images.primary} locale={locale} className={item.images.isolated ? 'is-isolated' : undefined} sizes="(max-width: 767px) 84vw, (max-width: 1023px) 44vw, 28vw" /></Link><div className="fragrance-caption"><div><h3 dir="ltr">{item.name}</h3><p>{item.tagline[locale]}</p></div><EditorialLink arrow="horizontal" href={`${href}#${item.slug}`}>{t('explore', {name: item.name})}</EditorialLink></div></article></FadeReveal>)}</CollectionGallery>{!fragrances.length && <p className="section-subtitle">{t('empty')}</p>}</section>;
}
