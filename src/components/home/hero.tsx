import {getTranslations} from 'next-intl/server';
import {ArrowDown} from 'lucide-react';
import {CampaignImage} from '@/components/ui/editorial-image';
import {EditorialLink} from '@/components/ui/editorial-link';
import {HeroEntrance} from '@/components/animations/fade-reveal';
import type {HomePageContent} from '@/content/pages/home';
import type {Locale} from '@/types/content';
export async function Hero({content, locale}: {content: HomePageContent['hero']; locale: Locale}) {
 const t = await getTranslations('Home.hero');
 return <section className="hero" aria-labelledby="hero-title"><div className="hero-visual"><HeroEntrance className="hero-image-reveal" delay={0.1}><CampaignImage desktop={content.desktop} mobile={content.mobile} locale={locale} alt={t('imageAlt')} /></HeroEntrance></div><div className="hero-content container"><HeroEntrance><p className="eyebrow">{t('eyebrow')}</p></HeroEntrance><h1 id="hero-title"><HeroEntrance inline delay={0.08}>{t('lineOne')}</HeroEntrance>{' '}<HeroEntrance inline delay={0.16}>{t('lineTwo')}</HeroEntrance>{' '}<HeroEntrance inline delay={0.24}><em>{t('lineThree')}</em></HeroEntrance></h1><HeroEntrance delay={0.32}><p className="hero-description">{t('description')}</p><EditorialLink href={content.ctaHref} outlined>{t('cta')}</EditorialLink></HeroEntrance></div><div className="hero-bottom container"><span>{t('signature')}</span><a href="#fragrances" className="scroll-cue">{t('scroll')}<ArrowDown size={15} aria-hidden="true" /></a></div></section>;
}
