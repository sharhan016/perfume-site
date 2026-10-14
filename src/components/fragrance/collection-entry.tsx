'use client';
import {useId, useState} from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import type {Fragrance, Locale} from '@/types/content';
import {PremiumCta} from '@/components/ui/editorial-link';
import {FragranceAttributes} from './attributes';
import {NotesExperience, type NotesLabels} from './notes-experience';
export function CollectionEntry({fragrance,locale,children,labels,notesLabels}: {fragrance:Fragrance;locale:Locale;children:React.ReactNode;labels:{explore:string;close:string;description:string};notesLabels:NotesLabels}) {
 const [open,setOpen]=useState(false);const id=useId();const reduced=useReducedMotion();
 return <article id={fragrance.slug} className={`collection-entry theme-${fragrance.theme} ${open?'is-expanded':''}`}><div className="collection-entry-main"><div className="collection-bottle bottle-stage">{children}</div><div className="collection-copy"><p className="eyebrow">ORYNOVA</p><h2 dir="ltr">{fragrance.name}</h2><p className="collection-tagline">{fragrance.tagline[locale]}</p><PremiumCta aria-expanded={open} aria-controls={`${id}-details`} onClick={()=>setOpen(!open)}>{open?labels.close:labels.explore}</PremiumCta></div></div><div id={`${id}-details`} aria-hidden={!open} inert={!open}><AnimatePresence initial={false}>{open&&<motion.div className="fragrance-detail" initial={reduced?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={reduced?undefined:{opacity:0,y:-8}} transition={{duration:reduced?0:.4}}><p className="collection-campaign">{(fragrance.campaignHeadline||fragrance.campaignMessage)?.[locale]}</p>{fragrance.supportingMessage&&<p className="eyebrow">{fragrance.supportingMessage[locale]}</p>}{fragrance.description&&<p className="body-copy">{fragrance.description[locale]}</p>}{fragrance.attributes?.length?<FragranceAttributes attributes={fragrance.attributes} locale={locale}/>:null}<NotesExperience fragrance={fragrance} locale={locale} labels={notesLabels} previewCount={2}/></motion.div>}</AnimatePresence></div></article>;
}
