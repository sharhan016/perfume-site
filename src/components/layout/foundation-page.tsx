import {getTranslations} from 'next-intl/server';
import {EditorialLink} from '@/components/ui/editorial-link';
export async function FoundationPage({section, children}: {section: 'collection' | 'story' | 'contact'; children?: React.ReactNode}) {
 const t = await getTranslations('Destinations');
 return <section className="destination container"><p className="eyebrow">{t('eyebrow')}</p><h1>{t(`${section}Title`)}</h1><p className="intro">{t(`${section}Description`)}</p>{children}<EditorialLink href="/">{t('back')}</EditorialLink></section>;
}
