'use client';
import {useId, useState} from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {motionSpec} from '@/components/animations/motion-spec';
import type {Fragrance, Locale} from '@/types/content';
import {PremiumCta} from '@/components/ui/editorial-link';
import {FragranceAttributes} from './attributes';
import {NotesExperience, type NotesLabels} from './notes-experience';
export function CollectionEntry({fragrance,locale,children,labels,notesLabels}: {fragrance:Fragrance;locale:Locale;children:React.ReactNode;labels:{explore:string;close:string;description:string};notesLabels:NotesLabels}) {
 const [open,setOpen]=useState(false);const [keyboard,setKeyboard]=useState(false);const id=useId();const reduced=useReducedMotion();const instant=Boolean(reduced||keyboard);
 return <article id={fragrance.slug} className={`collection-entry theme-${fragrance.theme} ${open?'is-expanded':''}`}><div className="collection-entry-main"><div className="collection-bottle bottle-stage">{children}</div><div className="collection-copy"><p className="eyebrow">ORYNOVA</p><h2 dir="ltr">{fragrance.name}</h2><p className="collection-tagline">{fragrance.tagline[locale]}</p><PremiumCta aria-expanded={open} aria-controls={`${id}-details`} onClick={event=>{setKeyboard(event.detail===0);setOpen(!open);}}>{open?labels.close:labels.explore}</PremiumCta></div></div><div id={`${id}-details`} aria-hidden={!open} inert={!open}><AnimatePresence initial={false}>{open&&<motion.div className="fragrance-detail" initial={instant?false:{opacity:0,transform:'translateY(12px)'}} animate={{opacity:1,transform:'translateY(0px)'}} exit={{opacity:0,transition:{duration:instant?0:motionSpec.exit}}} transition={{duration:instant?0:motionSpec.enter,ease:motionSpec.easeOut}}><p className="collection-campaign">{(fragrance.campaignHeadline||fragrance.campaignMessage)?.[locale]}</p>{fragrance.supportingMessage&&<p className="eyebrow">{fragrance.supportingMessage[locale]}</p>}{fragrance.description&&<p className="body-copy">{fragrance.description[locale]}</p>}{fragrance.attributes?.length?<FragranceAttributes attributes={fragrance.attributes} locale={locale}/>:null}<NotesExperience fragrance={fragrance} locale={locale} labels={notesLabels} previewCount={2}/></motion.div>}</AnimatePresence></div></article>;
}
