'use client';

import {useAnimate, useInView, useReducedMotion} from 'motion/react';
import {useEffect, type ReactNode} from 'react';

type RevealProps = {
 children: ReactNode;
 className?: string;
 delay?: number;
};

export function FadeReveal({children, className, delay = 0}: RevealProps) {
 const reduced = useReducedMotion();
 const [scope, animate] = useAnimate<HTMLDivElement>();
 const visible = useInView(scope, {once: true, amount: 0.12});
 useEffect(() => {
  if (!scope.current || !visible) return;
  const animation = animate(
   scope.current,
   reduced ? {opacity: 1, y: 0} : {opacity: [0.5, 1], y: [18, 0]},
   {duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1]},
  );
  return () => {animation.stop();};
 }, [animate, delay, reduced, scope, visible]);
 // Progressive enhancement: content never depends on an animation to appear.
 return <div ref={scope} className={className}>{children}</div>;
}

export function HeroEntrance({children, delay = 0, className, inline = false}: RevealProps & {inline?: boolean}) {
 const reduced = useReducedMotion();
 const [scope, animate] = useAnimate<HTMLDivElement>();
 const Element = inline ? 'span' : 'div';

 useEffect(() => {
  if (!scope.current) return;
  const animation = animate(
   scope.current,
   reduced ? {opacity: 1, y: 0} : {opacity: [0.4, 1], y: [16, 0]},
   {duration: reduced ? 0 : 0.8, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1]},
  );
  return () => {animation.stop();};
 }, [animate, delay, reduced, scope]);

 // No initial hidden state: the hero is complete without JavaScript.
 return <Element ref={scope} className={className}>{children}</Element>;
}
