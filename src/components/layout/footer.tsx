import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
export async function Footer() {
 const t = await getTranslations('Footer');
 const nav = await getTranslations('Nav');
 return <footer className="premium-footer container"><div className="footer-top"><div><Link href="/" className="wordmark" aria-label="ORYNOVA" dir="ltr">ORYNOVA</Link><p className="footer-signature">{t('signature')}</p></div><nav aria-label={t('navigation')}><Link href="/fragrances">{nav('fragrances')}</Link><Link href="/our-story">{nav('story')}</Link><Link href="/contact">{nav('contact')}</Link></nav></div><div className="footer-bottom"><span dir="ltr">© {new Date().getFullYear()} ORYNOVA</span><span>{t('location')}</span><span>{t('rights')}</span></div></footer>;
}
