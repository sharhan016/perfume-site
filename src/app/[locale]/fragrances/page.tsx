import {getTranslations, setRequestLocale} from 'next-intl/server';
import {FoundationPage} from '@/components/layout/foundation-page';
import {getFragrances} from '@/lib/content/fragrances';
import type {Locale} from '@/types/content';
export default async function Collection({params}: {params: Promise<{locale: Locale}>}) {
 const {locale} = await params; setRequestLocale(locale);
 const fragrances = await getFragrances();
 const t = await getTranslations('Destinations');
 return <FoundationPage section="collection"><div className="seed-list" aria-label={t('seedLabel')}>{fragrances.length ? fragrances.map(item => <div key={item.id} id={item.slug} className={`seed-item theme-${item.theme}`}><b dir="ltr">{item.name}</b><span>{item.tagline[locale]}</span></div>) : <p>{t('empty')}</p>}</div></FoundationPage>;
}
