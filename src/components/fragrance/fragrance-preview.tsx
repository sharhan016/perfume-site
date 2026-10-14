'use client';
import {useId,useRef,useState} from 'react';
import Image from 'next/image';
import {AnimatePresence,motion,useReducedMotion} from 'motion/react';
import {PremiumCta} from '@/components/ui/editorial-link';
import {DiscoveryNotes} from './discovery-notes';
import type {NotesLabels} from './notes-experience';
import type {Asset,Fragrance,Locale,NoteCategory} from '@/types/content';
export function FragrancePreview({fragrances,initialId,previewCount,locale,labels,selectLabel,exploreLabels,descriptions,environment}:{fragrances:Fragrance[];initialId:string;previewCount:number;locale:Locale;labels:NotesLabels;selectLabel:string;exploreLabels:Record<string,string>;descriptions:Record<NoteCategory,string>;environment:Asset}) {
 const [selected,setSelected]=useState(initialId);
 const refs=useRef<(HTMLButtonElement|null)[]>([]);const id=useId();const reduced=useReducedMotion();
 const fragrance=fragrances.find(item=>item.id===selected)||fragrances[0];
 if(!fragrance)return null;
 const product=fragrance.images.isolated||fragrance.images.primary;
 function navigate(event:React.KeyboardEvent,index:number) {
  const delta=locale==='ar'?-1:1;let next=index;
  if(event.key==='Home')next=0;else if(event.key==='End')next=fragrances.length-1;
  else if(event.key==='ArrowRight')next=(index+delta+fragrances.length)%fragrances.length;
  else if(event.key==='ArrowLeft')next=(index-delta+fragrances.length)%fragrances.length;else return;
  event.preventDefault();setSelected(fragrances[next].id);refs.current[next]?.focus();refs.current[next]?.scrollIntoView({block:'nearest',inline:'nearest',behavior:reduced?'auto':'smooth'});
 }
 return <div className="fragrance-discovery"><div className="discovery-fragrance-tabs" role="tablist" aria-label={selectLabel}>{fragrances.map((item,index)=><button key={item.id} ref={node=>{refs.current[index]=node;}} id={`${id}-${item.id}`} role="tab" aria-selected={fragrance.id===item.id} aria-controls={`${id}-scene`} tabIndex={fragrance.id===item.id?0:-1} onClick={()=>setSelected(item.id)} onKeyDown={event=>navigate(event,index)}><span dir="ltr">{item.name}</span>{fragrance.id===item.id&&<motion.span className="discovery-fragrance-line" layoutId={`${id}-fragrance`} transition={{duration:reduced?0:.24}}/>}</button>)}</div><div className="discovery-scene" id={`${id}-scene`} role="tabpanel" aria-labelledby={`${id}-${fragrance.id}`} tabIndex={0}>{environment.src&&<Image className="discovery-environment" src={environment.src} alt="" width={environment.width} height={environment.height} sizes="90vw" loading="lazy"/>}<AnimatePresence initial={false}>{<motion.div key={fragrance.id} className={`discovery-atmosphere theme-${fragrance.theme}`} initial={reduced?false:{opacity:0}} animate={{opacity:1}} exit={reduced?undefined:{opacity:0}} transition={{duration:reduced?0:.35}} aria-hidden="true"/>}</AnimatePresence><div className="discovery-product"><div className="discovery-product-art"><AnimatePresence initial={false}><motion.div key={fragrance.id} initial={reduced?false:{opacity:0,x:locale==='ar'?-14:14,y:8,scale:.98}} animate={{opacity:1,x:0,y:0,scale:1}} exit={reduced?undefined:{opacity:0,x:locale==='ar'?14:-14}} transition={{duration:reduced?0:.26}}>{product.src&&<Image src={product.src} alt={product.alt[locale]} width={product.width} height={product.height} sizes="(max-width:599px) 45vw, (max-width:899px) 38vw, 30vw" loading="lazy"/>}</motion.div></AnimatePresence></div><div className="discovery-product-copy"><AnimatePresence mode="wait" initial={false}><motion.div key={fragrance.id} initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={reduced?undefined:{opacity:0,y:-5}} transition={{duration:reduced?0:.17}}><h3 dir="ltr">{fragrance.name}</h3><p>{fragrance.tagline[locale]}</p></motion.div></AnimatePresence></div></div><div className="discovery-composition"><DiscoveryNotes fragrance={fragrance} locale={locale} labels={labels} descriptions={descriptions} previewCount={previewCount}/><PremiumCta href={`/fragrances#${fragrance.slug}`}>{exploreLabels[fragrance.id]}</PremiumCta></div></div></div>;
}
