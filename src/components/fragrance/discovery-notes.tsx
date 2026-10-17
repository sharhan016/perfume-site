'use client';
import {useId, useRef, useState} from 'react';
import Image from 'next/image';
import {motion, useReducedMotion} from 'motion/react';
import {SelectionImage, SelectionReveal} from '@/components/animations/selection-transition';
import {motionSpec} from '@/components/animations/motion-spec';
import type {NotesLabels} from './notes-experience';
import type {Fragrance, Locale, NoteCategory} from '@/types/content';
const categories: NoteCategory[] = ['top', 'heart', 'base'];
export function DiscoveryNotes({fragrance, locale, labels, descriptions, previewCount, instant = false, transaction = 0}: {
 fragrance: Fragrance; locale: Locale; labels: NotesLabels; descriptions: Record<NoteCategory, string>; previewCount: number; instant?: boolean; transaction?: number;
}) {
 const [selection, setSelection] = useState({category: 'top' as NoteCategory, keyboard: false, transaction});
 const {category} = selection;
 const refs = useRef<(HTMLButtonElement | null)[]>([]);
 const id = useId();
 const reduced = useReducedMotion();
 const still = Boolean(reduced || (selection.transaction === transaction ? selection.keyboard : instant));
 if (!fragrance.notes) return null;
 const asset = fragrance.noteImages?.[category];
 function select(index: number, keyboard: boolean) {setSelection({category: categories[index], keyboard, transaction});}
 function navigate(event: React.KeyboardEvent, index: number) {
  const delta = locale === 'ar' ? -1 : 1;
  let next = index;
  if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = categories.length - 1;
  else if (event.key === 'ArrowRight') next = (index + delta + categories.length) % categories.length;
  else if (event.key === 'ArrowLeft') next = (index - delta + categories.length) % categories.length;
  else return;
  event.preventDefault();select(next, true);refs.current[next]?.focus();
 }
 const key = `${fragrance.id}-${category}`;
 return <div className="discovery-notes">
  <div role="tablist" aria-label={labels.title} className="discovery-note-tabs">
   {categories.map((key, index) => <button key={key} ref={node => {refs.current[index] = node;}}
    id={`${id}-${key}`} role="tab" aria-selected={key === category} aria-controls={`${id}-notes`} tabIndex={key === category ? 0 : -1}
    onClick={event => select(index, event.detail === 0)} onKeyDown={event => navigate(event, index)}>
    {labels[key]}{key === category && <motion.span className="discovery-note-line" layoutId={`${id}-active`} transition={{duration: still ? 0 : motionSpec.indicator, ease: motionSpec.easeMove}}/>}
   </button>)}
  </div>
  <div id={`${id}-notes`} className="discovery-note-panel" role="tabpanel" aria-labelledby={`${id}-${category}`} tabIndex={0}>
   <SelectionReveal selection={key} instant={still}><h4 className="discovery-note-description">{descriptions[category]}</h4></SelectionReveal>
   <div className="discovery-ingredients">
    <div className="discovery-ingredient-art selection-image-stack">
     <SelectionImage selection={key} instant={still} direction={0}>
      {asset?.src && <Image src={asset.src} alt={asset.alt[locale]} width={asset.width} height={asset.height} sizes="(max-width:599px) 48vw, (max-width:899px) 35vw, 25vw" loading="lazy"/>}
     </SelectionImage>
    </div>
    <SelectionReveal selection={key} instant={still} staggerChildren="li"><ul className="discovery-ingredient-names">
     {fragrance.notes[category].slice(0, Math.max(1, Math.min(previewCount, 3))).map(note => <li key={note.id}>{note.name[locale]}</li>)}
    </ul></SelectionReveal>
   </div>
  </div>
 </div>;
}
