import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {ArrowUpRight} from 'lucide-react';
export async function FoundationPage({section, children}: {section: 'collection' | 'story' | 'contact'; children?: React.ReactNode}) {
 const t = await getTranslations('Destinations');
 return <section className="destination container"><p className="eyebrow">{t('eyebrow')}</p><h1>{t(`${section}Title`)}</h1><p className="intro">{t(`${section}Description`)}</p>{children}<Link href="/" className="text-link">{t('back')}<ArrowUpRight className="directional" size={18} /></Link></section>;
}
