'use client';
import {useId, useRef, useState} from 'react';
import Image from 'next/image';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import type {Fragrance, Locale, NoteCategory} from '@/types/content';
const categories: NoteCategory[] = ['top','heart','base'];
export type NotesLabels = {title: string; top: string; heart: string; base: string; intro: string};
export function NotesExperience({fragrance, locale, labels, previewCount, showHeading=true}: {fragrance: Fragrance; locale: Locale; labels: NotesLabels; previewCount?: number; showHeading?: boolean}) {
 const [category,setCategory] = useState<NoteCategory>('top');
 const tabs = useRef<(HTMLButtonElement|null)[]>([]);
 const reduced = useReducedMotion();
 const id=useId();
 if (!fragrance.notes) return null;
 const image=fragrance.noteImages?.[category];
 function moveTab(event: React.KeyboardEvent, index: number) {
  let next=index;
  if(event.key==='Home') next=0;
  else if(event.key==='End') next=categories.length-1;
  else if(event.key==='ArrowRight') next=(index+(locale==='ar'?-1:1)+categories.length)%categories.length;
  else if(event.key==='ArrowLeft') next=(index+(locale==='ar'?1:-1)+categories.length)%categories.length;
  else return;
  event.preventDefault();setCategory(categories[next]);tabs.current[next]?.focus();
 }
 return <section className="notes-experience" aria-labelledby={showHeading?`${id}-title`:undefined} aria-label={showHeading?undefined:labels.title}>{showHeading&&<div className="notes-heading"><p className="eyebrow" dir="ltr">{fragrance.name}</p><h3 id={`${id}-title`}>{labels.title}</h3><p>{labels.intro}</p></div>}<div className="notes-tabs" role="tablist" aria-label={labels.title}>{categories.map((key,index)=><button key={key} ref={element=>{tabs.current[index]=element;}} id={`${id}-${key}-tab`} role="tab" aria-selected={category===key} aria-controls={`${id}-panel`} tabIndex={category===key?0:-1} onClick={()=>setCategory(key)} onKeyDown={event=>moveTab(event,index)}>{labels[key]}{category===key&&<motion.span className="note-tab-line" layoutId={`${id}-line`} transition={{duration:reduced?0:.25}}/>}</button>)}</div><div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-${category}-tab`} tabIndex={0}><AnimatePresence mode="wait" initial={false}><motion.div key={`${fragrance.id}-${category}`} className="notes-panel" initial={reduced?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={reduced?undefined:{opacity:0,y:-8}} transition={{duration:reduced?0:.3}}>{image?.src&&<Image src={image.src} alt={image.alt[locale]} width={image.width} height={image.height} sizes="(max-width:899px) 90vw, 45vw" loading="lazy"/>}<ul className="ingredient-list">{fragrance.notes[category].slice(0,previewCount).map(note=><li key={note.id}>{note.name[locale]}</li>)}</ul></motion.div></AnimatePresence></div></section>;
}
