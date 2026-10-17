'use client';
import {useId, useRef, useState} from 'react';
import Image from 'next/image';
import {motion, useReducedMotion} from 'motion/react';
import {SelectionReveal, SelectionImage} from '@/components/animations/selection-transition';
import {motionSpec} from '@/components/animations/motion-spec';
import type {Fragrance, Locale, NoteCategory} from '@/types/content';
const categories: NoteCategory[] = ['top','heart','base'];
export type NotesLabels = {title: string; top: string; heart: string; base: string; intro: string};
export function NotesExperience({fragrance, locale, labels, previewCount, showHeading=true}: {fragrance: Fragrance; locale: Locale; labels: NotesLabels; previewCount?: number; showHeading?: boolean}) {
 const [category,setCategory] = useState<NoteCategory>('top');
 const [keyboard,setKeyboard] = useState(false);
 const tabs = useRef<(HTMLButtonElement|null)[]>([]);
 const reduced = useReducedMotion();
 const id=useId();
 const instant=Boolean(reduced||keyboard);
 if (!fragrance.notes) return null;
 const image=fragrance.noteImages?.[category];
 function moveTab(event: React.KeyboardEvent, index: number) {
  let next=index;
  if(event.key==='Home') next=0;
  else if(event.key==='End') next=categories.length-1;
  else if(event.key==='ArrowRight') next=(index+(locale==='ar'?-1:1)+categories.length)%categories.length;
  else if(event.key==='ArrowLeft') next=(index+(locale==='ar'?1:-1)+categories.length)%categories.length;
  else return;
  event.preventDefault();setKeyboard(true);setCategory(categories[next]);tabs.current[next]?.focus();
 }
 return <section className="notes-experience" aria-labelledby={showHeading?`${id}-title`:undefined} aria-label={showHeading?undefined:labels.title}>{showHeading&&<div className="notes-heading"><p className="eyebrow" dir="ltr">{fragrance.name}</p><h3 id={`${id}-title`}>{labels.title}</h3><p>{labels.intro}</p></div>}<div className="notes-tabs" role="tablist" aria-label={labels.title}>{categories.map((key,index)=><button key={key} ref={element=>{tabs.current[index]=element;}} id={`${id}-${key}-tab`} role="tab" aria-selected={category===key} aria-controls={`${id}-panel`} tabIndex={category===key?0:-1} onClick={event=>{setKeyboard(event.detail===0);setCategory(key);}} onKeyDown={event=>moveTab(event,index)}>{labels[key]}{category===key&&<motion.span className="note-tab-line" layoutId={`${id}-line`} transition={{duration:instant?0:motionSpec.indicator,ease:motionSpec.easeMove}}/>}</button>)}</div><div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-${category}-tab`} tabIndex={0}><div className="notes-panel"><div className="notes-image-stack selection-image-stack"><SelectionImage selection={`${fragrance.id}-${category}`} instant={instant} direction={0}>{image?.src&&<Image src={image.src} alt={image.alt[locale]} width={image.width} height={image.height} sizes="(max-width:899px) 90vw, 45vw" loading="lazy"/>}</SelectionImage></div><SelectionReveal selection={`${fragrance.id}-${category}`} instant={instant}><ul className="ingredient-list">{fragrance.notes[category].slice(0,previewCount).map(note=><li key={note.id}>{note.name[locale]}</li>)}</ul></SelectionReveal></div></div></section>;
}
