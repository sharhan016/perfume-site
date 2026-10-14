import {getTranslations} from 'next-intl/server';
import {Sparkles, Gem, Flower2, Compass} from 'lucide-react';
import {FadeReveal} from '@/components/animations/fade-reveal';
import type {HomePageContent} from '@/content/pages/home';
const icons = {spark: Sparkles, gem: Gem, flower: Flower2, compass: Compass};
export async function BrandValues({values}: {values: HomePageContent['values']}) {
 const t = await getTranslations('Home.values');
 return <section className="values-section container section-space" aria-labelledby="values-title"><FadeReveal><div className="values-heading"><p className="eyebrow">{t('eyebrow')}</p><h2 id="values-title">{t('title')}</h2><p className="section-subtitle">{t('subtitle')}</p></div><div className="values-grid">{values.map(value => {const Icon = icons[value.icon];return <div className="value-item" key={value.id}><Icon aria-hidden="true" size={29} strokeWidth={1} /><h3>{t(`${value.id}.title`)}</h3><p>{t(`${value.id}.description`)}</p></div>;})}</div></FadeReveal></section>;
}
