'use client';
import {useRef, useState, useEffect, useSyncExternalStore} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {Menu, X, ArrowUpRight, Languages} from 'lucide-react';
import {motion, MotionConfig, useReducedMotion} from 'motion/react';
import {motionSpec} from '@/components/animations/motion-spec';
import {Link, usePathname, useRouter} from '@/i18n/navigation';
const routes = [{href: '/', key: 'home'}, {href: '/fragrances', key: 'fragrances'}, {href: '/our-story', key: 'story'}, {href: '/contact', key: 'contact'}] as const;
function subscribeLocation(callback: () => void) {
 window.addEventListener('popstate', callback); window.addEventListener('hashchange', callback);
 return () => {window.removeEventListener('popstate', callback); window.removeEventListener('hashchange', callback);};
}
const locationSuffix = () => window.location.search + window.location.hash;
export function Header() {
 const t = useTranslations('Nav');
 const reduced = useReducedMotion();
 const locale = useLocale();
 const pathname = usePathname();
 const router = useRouter();
 const target = locale === 'en' ? 'ar' : 'en';
 const suffix = useSyncExternalStore(subscribeLocation, locationSuffix, () => '');
 const [open, setOpen] = useState(false);
 const [closing, setClosing] = useState(false);
 const [keyboard, setKeyboard] = useState(false);
 const instant = Boolean(reduced || keyboard);
 function closeMenu(immediate = false) {
  if (immediate || instant) {setClosing(false); setOpen(false);}
  else setClosing(true);
 }
 const dialog = useRef<HTMLDialogElement>(null);
 const trigger = useRef<HTMLButtonElement>(null);
 useEffect(() => {
  if (!open) return;
  const element = dialog.current;
  const triggerElement = trigger.current;
  const previousOverflow = document.body.style.overflow;
  element?.showModal();
  document.body.style.overflow = 'hidden';
  const media = window.matchMedia('(min-width: 900px)');
  const closeDesktop = () => {if (media.matches) {setClosing(false); setOpen(false);}};
  media.addEventListener('change', closeDesktop);
  return () => {element?.close(); document.body.style.overflow = previousOverflow; media.removeEventListener('change', closeDesktop); triggerElement?.focus();};
 }, [open]);
 useEffect(() => {const closeOnBack = () => setOpen(false); window.addEventListener('popstate', closeOnBack); return () => window.removeEventListener('popstate', closeOnBack);}, []);
 const language = <Link href={`${pathname}${suffix}`} locale={target} className="language-switch" aria-label={t('language')} lang={target} dir={target === 'ar' ? 'rtl' : 'ltr'} onClick={event => {
 if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
 event.preventDefault();
 setOpen(false);
 router.push(`${pathname}${window.location.search}${window.location.hash}`, {locale: target});
}}><Languages size={16} strokeWidth={1.3} aria-hidden="true" /><span className="language-label">{target === 'ar' ? 'العربية' : 'English'}</span></Link>;
 return <MotionConfig reducedMotion="user"><header className="site-header container"><Link href="/" className="wordmark" aria-label="ORYNOVA" dir="ltr">ORYNOVA<span aria-hidden="true" className="logo-dot">.</span></Link><nav className="desktop-nav" aria-label={t('label')}>{routes.map(route => <Link key={route.key} href={route.href} aria-current={pathname === route.href ? 'page' : undefined}>{t(route.key)}</Link>)}</nav><div className="header-actions">{language}<button ref={trigger} className="menu-trigger" aria-label={t('open')} aria-expanded={open} aria-controls="mobile-navigation" onClick={event => {setKeyboard(event.detail === 0); setClosing(false); setOpen(true);}}><Menu size={23} strokeWidth={1.4} /></button></div></header>{open && <dialog ref={dialog} id="mobile-navigation" className="mobile-dialog" aria-label={t('label')} onKeyDown={event => {
 if (event.key !== 'Tab') return;
 const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
 const first = controls[0]; const last = controls[controls.length - 1];
 if (event.shiftKey && document.activeElement === first) {event.preventDefault(); last?.focus();}
 else if (!event.shiftKey && document.activeElement === last) {event.preventDefault(); first?.focus();}
}} onCancel={event => {event.preventDefault(); closeMenu(true);}} onClick={event => {if (event.target === event.currentTarget) closeMenu();}}><motion.div className="mobile-panel" initial={instant ? false : {opacity: 0, transform: 'translateY(-10px)'}} animate={closing ? {opacity: 0, transform: instant ? 'none' : 'translateY(-8px)'} : {opacity: 1, transform: 'translateY(0px)'}} transition={{duration: instant ? 0 : closing ? motionSpec.exit : motionSpec.enter, ease: motionSpec.easeDrawer}} onAnimationComplete={() => {if (closing) {setClosing(false); setOpen(false);}}}><div className="mobile-heading"><span className="wordmark" dir="ltr">ORYNOVA</span><button autoFocus aria-label={t('close')} onClick={event => closeMenu(event.detail === 0)}><X size={25} strokeWidth={1.4} /></button></div><motion.nav initial={false} animate={closing ? "closed" : "open"} variants={{open:{transition:{staggerChildren:instant?0:.05}}}} aria-label={t('label')}>{routes.map(route => <Link key={route.key} href={route.href} aria-current={pathname === route.href ? 'page' : undefined} onClick={() => setOpen(false)}><motion.span initial={instant?false:{opacity:0,transform:'translateY(8px)'}} variants={{open:{opacity:1,transform:'translateY(0px)'},closed:{opacity:0}}} transition={{duration:instant?0:motionSpec.enter,ease:motionSpec.easeOut}}>{t(route.key)}</motion.span><ArrowUpRight className="directional" size={22} /></Link>)}</motion.nav><div className="mobile-language">{language}</div></motion.div></dialog>}</MotionConfig>;
}
