'use client';
import {useEffect, type ReactNode} from 'react';
import {AnimatePresence, motion, useAnimate, useIsPresent, stagger} from 'motion/react';
import {motionSpec} from './motion-spec';

// Content commits immediately. Only its presentation is enhanced after hydration.
export function SelectionReveal({selection, instant, children, className, staggerChildren}: {
 selection: string; instant: boolean; children: ReactNode; className?: string; staggerChildren?: string;
}) {
 const [scope, animate] = useAnimate<HTMLDivElement>();
 useEffect(() => {
  if (!scope.current) return;
  const control = animate(scope.current, instant
   ? {opacity: 1, transform: 'translateY(0px)'}
   : {opacity: [0.35, 1], transform: ['translateY(8px)', 'translateY(0px)']},
   {duration: instant ? 0 : motionSpec.enter, ease: motionSpec.easeOut});
  const group = staggerChildren ? animate(staggerChildren, instant
   ? {opacity: 1, transform: 'translateY(0px)'}
   : {opacity: [0.4, 1], transform: ['translateY(7px)', 'translateY(0px)']},
   {duration: instant ? 0 : motionSpec.indicator, delay: instant ? 0 : stagger(motionSpec.stagger), ease: motionSpec.easeOut}) : null;
  return () => {control.stop(); group?.stop();};
 }, [selection, instant, animate, scope, staggerChildren]);
 return <div ref={scope} className={className}>{children}</div>;
}

function ImageLayer({children, direction}: {children: ReactNode; direction: number}) {
 const present = useIsPresent();
 return <motion.div aria-hidden={!present} inert={!present}
  initial={{opacity: 0, transform: `translateX(${direction * 12}px) scale(.98)`}}
  animate={{opacity: 1, transform: 'translateX(0px) scale(1)'}}
  exit={{opacity: 0, transition: {duration: motionSpec.exit}}}
  transition={{duration: motionSpec.enter, ease: motionSpec.easeOut}}>{children}</motion.div>;
}

// Images may overlap briefly; exiting imagery is excluded from the accessible tree.
export function SelectionImage({selection, instant, direction = 1, children}: {
 selection: string; instant: boolean; direction?: number; children: ReactNode;
}) {
 if (instant) return <div>{children}</div>;
 return <AnimatePresence initial={false}><ImageLayer key={selection} direction={direction}>{children}</ImageLayer></AnimatePresence>;
}
