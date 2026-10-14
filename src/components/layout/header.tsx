'use client';
import {useRef, useState, useEffect} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {Menu, X, ArrowUpRight} from 'lucide-react';
import {motion, AnimatePresence, MotionConfig} from 'motion/react';
import {Link, usePathname} from '@/i18n/navigation';
const routes = [{href: '/', key: 'home'}, {href: '/fragrances', key: 'fragrances'}, {href: '/our-story', key: 'story'}, {href: '/contact', key: 'contact'}] as const;
export function Header() {
 const t = useTranslations('Nav');
 const locale = useLocale();
 const pathname = usePathname();
 const target = locale === 'en' ? 'ar' : 'en';
 const [suffix, setSuffix] = useState('');
 const [open, setOpen] = useState(false);
 const dialog = useRef<HTMLDialogElement>(null);
 const trigger = useRef<HTMLButtonElement>(null);
 useEffect(() => {setSuffix(window.location.search + window.location.hash);}, [pathname]);
 useEffect(() => {
  if (!open) return;
  const element = dialog.current;
  const previousOverflow = document.body.style.overflow;
  element?.showModal();
  document.body.style.overflow = 'hidden';
  const media = window.matchMedia('(min-width: 900px)');
  const closeDesktop = () => {if (media.matches) setOpen(false);};
  media.addEventListener('change', closeDesktop);
  return () => {element?.close(); document.body.style.overflow = previousOverflow; media.removeEventListener('change', closeDesktop); trigger.current?.focus();};
 }, [open]);
 useEffect(() => {setOpen(false);}, [pathname]);
 const language = <Link href={`${pathname}${suffix}`} locale={target} className="language-switch" aria-label={t('language')} lang={target} dir={target === 'ar' ? 'rtl' : 'ltr'} onClick={() => setOpen(false)}>{target === 'ar' ? 'العربية' : 'English'}<span aria-hidden="true">↗</span></Link>;
 return <MotionConfig reducedMotion="user"><header className="site-header container"><Link href="/" className="wordmark" aria-label="ORYNOVA" dir="ltr">ORYNOVA<span aria-hidden="true" className="logo-dot">.</span></Link><nav className="desktop-nav" aria-label={t('label')}>{routes.map(route => <Link key={route.key} href={route.href} aria-current={pathname === route.href ? 'page' : undefined}>{t(route.key)}</Link>)}</nav><div className="header-actions">{language}<button ref={trigger} className="menu-trigger" aria-label={t('open')} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}><Menu size={23} strokeWidth={1.4} /></button></div></header><AnimatePresence>{open && <dialog ref={dialog} id="mobile-navigation" className="mobile-dialog" aria-label={t('label')} onKeyDown={event => {
 if (event.key !== 'Tab') return;
 const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
 const first = controls[0]; const last = controls[controls.length - 1];
 if (event.shiftKey && document.activeElement === first) {event.preventDefault(); last?.focus();}
 else if (!event.shiftKey && document.activeElement === last) {event.preventDefault(); first?.focus();}
}} onCancel={event => {event.preventDefault(); setOpen(false);}} onClick={event => {if (event.target === event.currentTarget) setOpen(false);}}><motion.div className="mobile-panel" initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -8}} transition={{duration: 0.2}}><div className="mobile-heading"><span className="wordmark" dir="ltr">ORYNOVA</span><button autoFocus aria-label={t('close')} onClick={() => setOpen(false)}><X size={25} strokeWidth={1.4} /></button></div><nav aria-label={t('label')}>{routes.map(route => <Link key={route.key} href={route.href} aria-current={pathname === route.href ? 'page' : undefined} onClick={() => setOpen(false)}>{t(route.key)}<ArrowUpRight className="directional" size={22} /></Link>)}</nav><div className="mobile-language">{language}</div></motion.div></dialog>}</AnimatePresence></MotionConfig>;
}
