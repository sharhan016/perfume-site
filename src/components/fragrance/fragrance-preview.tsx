'use client';
import {useId, useRef, useState} from 'react';
import Image from 'next/image';
import {motion, useReducedMotion} from 'motion/react';
import {PremiumCta} from '@/components/ui/editorial-link';
import {SelectionImage, SelectionReveal} from '@/components/animations/selection-transition';
import {motionSpec} from '@/components/animations/motion-spec';
import {DiscoveryNotes} from './discovery-notes';
import type {NotesLabels} from './notes-experience';
import type {Asset, Fragrance, Locale, NoteCategory} from '@/types/content';

export function FragrancePreview({fragrances, initialId, previewCount, locale, labels, selectLabel, exploreLabels, descriptions, environment}: {
 fragrances: Fragrance[]; initialId: string; previewCount: number; locale: Locale;
 labels: NotesLabels; selectLabel: string; exploreLabels: Record<string, string>;
 descriptions: Record<NoteCategory, string>; environment: Asset;
}) {
 const [selected, setSelected] = useState(initialId);
 const [keyboard, setKeyboard] = useState(false);
 const [transaction, setTransaction] = useState(0);
 const refs = useRef<(HTMLButtonElement | null)[]>([]);
 const id = useId();
 const reduced = useReducedMotion();
 const instant = Boolean(reduced || keyboard);
 const fragrance = fragrances.find(item => item.id === selected) || fragrances[0];
 if (!fragrance) return null;
 const product = fragrance.images.isolated || fragrance.images.primary;
 function select(index: number, fromKeyboard: boolean) {
  setKeyboard(fromKeyboard);
  setTransaction(value => value + 1);
  setSelected(fragrances[index].id);
 }
 function navigate(event: React.KeyboardEvent, index: number) {
  const delta = locale === 'ar' ? -1 : 1;
  let next = index;
  if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = fragrances.length - 1;
  else if (event.key === 'ArrowRight') next = (index + delta + fragrances.length) % fragrances.length;
  else if (event.key === 'ArrowLeft') next = (index - delta + fragrances.length) % fragrances.length;
  else return;
  event.preventDefault();
  select(next, true);
  refs.current[next]?.focus();
  refs.current[next]?.scrollIntoView({block: 'nearest', inline: 'nearest', behavior: 'auto'});
 }
 return <div className="fragrance-discovery">
  <div className="discovery-fragrance-tabs" role="tablist" aria-label={selectLabel}>
   {fragrances.map((item, index) => <button key={item.id} ref={node => {refs.current[index] = node;}}
    id={`${id}-${item.id}`} role="tab" aria-selected={fragrance.id === item.id} aria-controls={`${id}-scene`}
    tabIndex={fragrance.id === item.id ? 0 : -1} onClick={event => select(index, event.detail === 0)} onKeyDown={event => navigate(event, index)}>
    <span dir="ltr">{item.name}</span>{fragrance.id === item.id && <motion.span className="discovery-fragrance-line"
     layoutId={`${id}-fragrance`} transition={{duration: instant ? 0 : motionSpec.indicator, ease: motionSpec.easeMove}}/>}
   </button>)}
  </div>
  <div className="discovery-scene" id={`${id}-scene`} role="tabpanel" aria-labelledby={`${id}-${fragrance.id}`} tabIndex={0}>
   {environment.src && <Image className="discovery-environment" src={environment.src} alt="" width={environment.width} height={environment.height} sizes="90vw" loading="lazy"/>}
   <div className="discovery-atmospheres" aria-hidden="true">
    {fragrances.map(item => <div key={item.id} className={`discovery-atmosphere theme-${item.theme}`} style={{opacity: item.id === fragrance.id ? 1 : 0, transitionDuration: instant ? '0s' : undefined}}/>)}
   </div>
   <div className="discovery-product">
    <div className="discovery-product-art">
     <SelectionImage selection={fragrance.id} instant={instant} direction={locale === 'ar' ? -1 : 1}>
      {product.src && <Image src={product.src} alt={product.alt[locale]} width={product.width} height={product.height} sizes="(max-width:599px) 45vw, (max-width:899px) 38vw, 30vw" loading="lazy"/>}
     </SelectionImage>
    </div>
    <div className="discovery-product-copy"><SelectionReveal selection={fragrance.id} instant={instant}>
     <h3 dir="ltr">{fragrance.name}</h3><p>{fragrance.tagline[locale]}</p>
    </SelectionReveal></div>
   </div>
   <div className="discovery-composition">
    <DiscoveryNotes fragrance={fragrance} locale={locale} labels={labels} descriptions={descriptions} previewCount={previewCount} instant={instant} transaction={transaction}/>
    <PremiumCta href={`/fragrances#${fragrance.slug}`}>{exploreLabels[fragrance.id]}</PremiumCta>
   </div>
  </div>
 </div>;
}
