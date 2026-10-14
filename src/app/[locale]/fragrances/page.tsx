import {getTranslations, setRequestLocale} from 'next-intl/server';
import {getFragrances} from '@/lib/content/fragrances';
import {getNotesLabels} from '@/lib/content/notes';
import {FadeReveal, HeroEntrance} from '@/components/animations/fade-reveal';
import {CollectionEntry} from '@/components/fragrance/collection-entry';
import {EditorialImage} from '@/components/ui/editorial-image';
import type {Locale} from '@/types/content';
export default async function Collection({params}:{params:Promise<{locale:Locale}>}) {
 const {locale}=await params;setRequestLocale(locale);
 const [fragrances,t,notesLabels]=await Promise.all([getFragrances(),getTranslations('Collection'),getNotesLabels()]);
 return <><section className="collection-intro container"><HeroEntrance><p className="eyebrow">{t('eyebrow')}</p></HeroEntrance><HeroEntrance delay={.1}><h1>{t('title')}</h1></HeroEntrance><HeroEntrance delay={.2}><p className="body-copy">{t('description')}</p></HeroEntrance></section><div className="collection-editorial container">{fragrances.map(fragrance=><FadeReveal key={fragrance.id}><CollectionEntry fragrance={fragrance} locale={locale} labels={{explore:t('explore',{name:fragrance.name}),close:t('close'),description:t('identity',{tagline:fragrance.tagline[locale]})}} notesLabels={notesLabels}><EditorialImage asset={fragrance.images.primary} locale={locale} sizes="(max-width:899px) 90vw, 48vw"/></CollectionEntry></FadeReveal>)}{!fragrances.length&&<p className="body-copy">{t('empty')}</p>}</div></>;
}
