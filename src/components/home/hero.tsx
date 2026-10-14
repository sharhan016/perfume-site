import {getTranslations} from 'next-intl/server';
import {ArrowDown} from 'lucide-react';
import {getFragranceBySlug} from '@/lib/content/fragrances';
import {EditorialImage} from '@/components/ui/editorial-image';
import {EditorialLink} from '@/components/ui/editorial-link';
import {CinematicHero,CinematicEntrance} from '@/components/animations/cinematic-hero';
import type {HomePageContent} from '@/content/pages/home';
import type {Locale} from '@/types/content';
export async function Hero({content,locale}:{content:HomePageContent['hero'];locale:Locale}) {
 const [t,fragrance]=await Promise.all([getTranslations('Home.hero'),getFragranceBySlug(content.fragranceId)]);
 if(!fragrance)return null;
 const product=fragrance.images.isolated||fragrance.images.primary;
 return <CinematicHero theme={fragrance.theme} integrated={!fragrance.images.isolated} environment={<EditorialImage asset={content.environment} locale={locale} sizes="100vw" priority/>} product={<EditorialImage asset={product} locale={locale} sizes="(max-width:599px) 75vw, (max-width:899px) 48vw, 42vw" priority/>} copy={<><CinematicEntrance delay={.2}><p className="eyebrow">{t('eyebrow')}</p></CinematicEntrance><h1 id="hero-title">{(['lineOne','lineTwo','lineThree'] as const).map((key,index)=><span className="cinema-line-mask" key={key}><CinematicEntrance kind="line" inline delay={.25+index*.1}>{index===2?<em>{t(key)}</em>:t(key)}{' '}</CinematicEntrance></span>)}</h1></>} details={<CinematicEntrance delay={.55}><div className="cinema-product-caption"><span dir="ltr">{fragrance.name}</span><span>{fragrance.tagline[locale]}</span></div><div className="cinema-support"><p className="cinema-description">{t('description')}</p><EditorialLink href={content.ctaHref}>{t('cta')}</EditorialLink></div></CinematicEntrance>} bottom={<><span>{t('signature')}</span><a href="#fragrances" className="scroll-cue">{t('scroll')}<ArrowDown size={15} aria-hidden="true"/></a></>}/>;
}
