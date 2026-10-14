'use client';
import {useRef} from 'react';
import {motion, useScroll, useTransform, useReducedMotion} from 'motion/react';
export function ParallaxImage({children, className = ''}: {children: React.ReactNode; className?: string}) {
 const target = useRef<HTMLDivElement>(null);
 const reduced = useReducedMotion();
 const {scrollYProgress} = useScroll({target, offset: ['start end','end start']});
 const y = useTransform(scrollYProgress,[0,1],[14,-14]);
 return <div ref={target} className={`parallax-frame ${className}`}><motion.div style={{y: reduced ? 0 : y}}>{children}</motion.div></div>;
}
