'use client';
import {useId,useRef,useState} from 'react';
import Image from 'next/image';
import {AnimatePresence,motion,useReducedMotion} from 'motion/react';
import type {NotesLabels} from './notes-experience';
import type {Fragrance,Locale,NoteCategory} from '@/types/content';
const categories:NoteCategory[]=['top','heart','base'];
export function DiscoveryNotes({fragrance,locale,labels,descriptions,previewCount}:{fragrance:Fragrance;locale:Locale;labels:NotesLabels;descriptions:Record<NoteCategory,string>;previewCount:number}) {
 const [category,setCategory]=useState<NoteCategory>('top');
 const refs=useRef<(HTMLButtonElement|null)[]>([]);const id=useId();const reduced=useReducedMotion();
 if(!fragrance.notes)return null;
 const asset=fragrance.noteImages?.[category];
 function navigate(event:React.KeyboardEvent,index:number) {
  const delta=locale==='ar'?-1:1;let next=index;
  if(event.key==='Home')next=0;else if(event.key==='End')next=categories.length-1;
  else if(event.key==='ArrowRight')next=(index+delta+categories.length)%categories.length;
  else if(event.key==='ArrowLeft')next=(index-delta+categories.length)%categories.length;else return;
  event.preventDefault();setCategory(categories[next]);refs.current[next]?.focus();
 }
 return <div className="discovery-notes"><div role="tablist" aria-label={labels.title} className="discovery-note-tabs">{categories.map((key,index)=><button key={key} ref={node=>{refs.current[index]=node;}} id={`${id}-${key}`} role="tab" aria-selected={key===category} aria-controls={`${id}-notes`} tabIndex={key===category?0:-1} onClick={()=>setCategory(key)} onKeyDown={event=>navigate(event,index)}>{labels[key]}{key===category&&<motion.span className="discovery-note-line" layoutId={`${id}-active`} transition={{duration:reduced?0:.2}}/>}</button>)}</div><div id={`${id}-notes`} className="discovery-note-panel" role="tabpanel" aria-labelledby={`${id}-${category}`} tabIndex={0}><AnimatePresence mode="wait" initial={false}><motion.div key={`${fragrance.id}-${category}`} initial={reduced?false:{opacity:0}} animate={{opacity:1}} exit={reduced?undefined:{opacity:0}} transition={{duration:reduced?0:.16}}><h4 className="discovery-note-description">{descriptions[category]}</h4><div className="discovery-ingredients"><div className="discovery-ingredient-art">{asset?.src&&<Image src={asset.src} alt={asset.alt[locale]} width={asset.width} height={asset.height} sizes="(max-width:599px) 48vw, (max-width:899px) 35vw, 25vw" loading="lazy"/>}</div><motion.ul className="discovery-ingredient-names" initial="hidden" animate="visible" variants={{hidden:{},visible:{transition:{staggerChildren:reduced?0:.055}}}}>{fragrance.notes[category].slice(0,Math.max(1,Math.min(previewCount,3))).map(note=><motion.li key={note.id} variants={{hidden:reduced?{opacity:1}:{opacity:0,y:7},visible:{opacity:1,y:0}}} transition={{duration:reduced?0:.22}}>{note.name[locale]}</motion.li>)}</motion.ul></div></motion.div></AnimatePresence></div></div>;
}
