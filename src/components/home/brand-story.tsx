import {getTranslations} from 'next-intl/server';
import {FadeReveal} from '@/components/animations/fade-reveal';
import {EditorialImage} from '@/components/ui/editorial-image';
import {EditorialLink} from '@/components/ui/editorial-link';
import type {HomePageContent} from '@/content/pages/home';
import type {Locale} from '@/types/content';
export async function BrandStory({content, locale}: {content: HomePageContent['story']; locale: Locale}) {
 const t = await getTranslations('Home.story');
 return <section className="story-section section-space" aria-labelledby="story-title"><div className="story-layout container"><FadeReveal className="story-image"><EditorialImage asset={content.image} locale={locale} sizes="(max-width: 899px) 90vw, 52vw" /><p className="image-caption">{t('caption')}</p></FadeReveal><FadeReveal className="story-copy"><p className="eyebrow">{t('eyebrow')}</p><h2 id="story-title">{t('lineOne')}<br /><em>{t('lineTwo')}</em></h2><p className="body-copy">{t('description')}</p><EditorialLink href={content.ctaHref}>{t('cta')}</EditorialLink></FadeReveal></div></section>;
}
