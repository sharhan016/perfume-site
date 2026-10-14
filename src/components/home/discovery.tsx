import {getTranslations} from 'next-intl/server';
import {FadeReveal} from '@/components/animations/fade-reveal';
import {EditorialImage} from '@/components/ui/editorial-image';
import {EditorialLink} from '@/components/ui/editorial-link';
import type {HomePageContent} from '@/content/pages/home';
import type {Locale} from '@/types/content';
export async function Discovery({content, locale}: {content: HomePageContent['discovery']; locale: Locale}) {
 const t = await getTranslations('Home.discovery');
 return <section className="discovery-section" aria-labelledby="discovery-title"><FadeReveal className="discovery-art"><EditorialImage asset={content.image} locale={locale} sizes="(max-width: 899px) 100vw, 54vw" /></FadeReveal><div className="discovery-copy container"><FadeReveal><p className="eyebrow">{t('eyebrow')}</p><h2 id="discovery-title">{t('lineOne')}<br /><em>{t('lineTwo')}</em></h2><p className="body-copy">{t('description')}</p><EditorialLink href={content.ctaHref} solid>{t('cta')}</EditorialLink></FadeReveal></div></section>;
}
export async function Closing({href}: {href: string}) {
 const t = await getTranslations('Home.closing');
 return <section className="closing-section container section-space" aria-labelledby="closing-title"><FadeReveal><p className="eyebrow">{t('eyebrow')}</p><h2 id="closing-title">{t('lineOne')}<br /><em>{t('lineTwo')}</em></h2><p className="section-subtitle">{t('description')}</p><EditorialLink href={href}>{t('cta')}</EditorialLink></FadeReveal></section>;
}
