'use client';

import {useAnimate, useInView, useReducedMotion} from 'motion/react';
import {useEffect, type ReactNode} from 'react';
import {motionSpec} from './motion-spec';

type RevealProps = {
 children: ReactNode;
 className?: string;
 delay?: number;
 treatment?: 'rise' | 'image' | 'fade';
};

export function FadeReveal({children, className, delay = 0, treatment = 'rise'}: RevealProps) {
 const reduced = useReducedMotion();
 const [scope, animate] = useAnimate<HTMLDivElement>();
 const visible = useInView(scope, {once: true, amount: 0.12});
 useEffect(() => {
  if (!scope.current || !visible) return;
  if (reduced) return;
  const animation = animate(
   scope.current,
   treatment === 'image'
    ? {opacity: [0.35, 1], transform: ['scale(1.025)', 'scale(1)']}
    : treatment === 'fade' ? {opacity: [0.35, 1]} : {opacity: [0.35, 1], transform: ['translateY(16px)', 'translateY(0px)']},
   {duration: reduced ? 0 : motionSpec.reveal, delay: reduced ? 0 : delay, ease: motionSpec.easeEditorial},
  );
  return () => {animation.stop();};
 }, [animate, delay, reduced, scope, visible, treatment]);
 // Progressive enhancement: content never depends on an animation to appear.
 return <div ref={scope} className={className} style={reduced ? {opacity: 1, transform: 'none'} : undefined}>{children}</div>;
}

export function HeroEntrance({children, delay = 0, className, inline = false}: RevealProps & {inline?: boolean}) {
 const reduced = useReducedMotion();
 const [scope, animate] = useAnimate<HTMLDivElement>();
 const Element = inline ? 'span' : 'div';

 useEffect(() => {
  if (!scope.current) return;
  const animation = animate(
   scope.current,
   reduced ? {opacity: 1, y: 0} : {opacity: [0.1, 1], y: [24, 0]},
   {duration: reduced ? 0 : 0.8, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1]},
  );
  return () => {animation.stop();};
 }, [animate, delay, reduced, scope]);

 // No initial hidden state: the hero is complete without JavaScript.
 return <Element ref={scope} className={className}>{children}</Element>;
}
