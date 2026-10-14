'use client';
import {motion, useReducedMotion} from 'motion/react';
import type {ReactNode} from 'react';
export function FadeReveal({children, className, delay = 0}: {children: ReactNode; className?: string; delay?: number}) {
 const reduced = useReducedMotion();
 // Server-rendered content stays visible, including when JavaScript is unavailable.
 return <motion.div className={className} initial={false} whileInView={reduced ? undefined : {opacity: [0.5, 1], y: [18, 0]}} viewport={{once: true, amount: 0.12}} transition={{duration: 0.65, delay, ease: [0.22, 1, 0.36, 1]}}>{children}</motion.div>;
}
export function HeroEntrance({children, delay = 0, className, inline = false}: {children: ReactNode; delay?: number; className?: string; inline?: boolean}) {
 const reduced = useReducedMotion();
 const Element = inline ? motion.span : motion.div;
 return <Element className={className} initial={false} animate={reduced ? undefined : {opacity: [0.4, 1], y: [16, 0]}} transition={{duration: 0.8, delay, ease: [0.22, 1, 0.36, 1]}}>{children}</Element>;
}
