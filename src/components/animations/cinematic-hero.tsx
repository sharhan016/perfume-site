'use client';
import {useEffect,useRef,type ReactNode} from 'react';
import {motion,useAnimate,useReducedMotion,useScroll,useTransform} from 'motion/react';

type EntranceProps={children:ReactNode;className?:string;kind?:'scene'|'product'|'line'|'copy';delay?:number;inline?:boolean};
export function CinematicEntrance({children,className='',kind='copy',delay=0,inline=false}:EntranceProps) {
 const [scope,animate]=useAnimate<HTMLDivElement>();const reduced=useReducedMotion();
 useEffect(()=>{
  if(!scope.current)return;
  const frames=reduced?{opacity:1,x:0,y:0,scale:1}:kind==='scene'?{opacity:[.55,1],scale:[1.04,1]}:kind==='product'?{opacity:[.25,1],y:[24,0],scale:[.965,1]}:kind==='line'?{opacity:[.2,1],y:['85%','0%']}:{opacity:[.2,1],y:[12,0]};
  const control=animate(scope.current,frames,{duration:reduced?0:kind==='scene'?1.3:.95,delay:reduced?0:delay,ease:[.22,1,.36,1]});
  return ()=>control.stop();
 },[animate,delay,kind,reduced,scope]);
 // The server renders the complete composition; animation is progressive enhancement.
 const Element=inline?'span':'div';
 return <Element ref={scope} className={className}>{children}</Element>;
}
export function CinematicHero({environment,product,copy,details,bottom,theme,integrated=false}:{integrated?:boolean;environment:ReactNode;product:ReactNode;copy:ReactNode;details:ReactNode;bottom:ReactNode;theme:string}) {
 const target=useRef<HTMLElement>(null);const reduced=useReducedMotion();
 const {scrollYProgress}=useScroll({target,offset:['start start','end start']});
 const sceneY=useTransform(scrollYProgress,[0,1],[0,75]);
 const bottleY=useTransform(scrollYProgress,[0,1],[0,-55]);
 const bottleScale=useTransform(scrollYProgress,[0,1],[1,1.045]);
 const copyY=useTransform(scrollYProgress,[0,1],[0,-35]);
 const copyOpacity=useTransform(scrollYProgress,[0,.8],[1,.3]);
 const lightOpacity=useTransform(scrollYProgress,[0,1],[.24,.06]);
 return <section ref={target} className={`cinematic-hero theme-${theme}`} aria-labelledby="hero-title"><motion.div className="cinema-environment" style={{y:reduced?0:sceneY}}><CinematicEntrance kind="scene">{environment}</CinematicEntrance></motion.div><div className="cinema-shadows" aria-hidden="true"/><motion.div className="cinema-light" aria-hidden="true" style={{opacity:reduced?.18:lightOpacity}}/><motion.div className={`cinema-product ${integrated?'is-integrated':''}`} style={{y:reduced?0:bottleY,scale:reduced?1:bottleScale}}><CinematicEntrance kind="product" delay={.1}>{product}</CinematicEntrance></motion.div><motion.div className="cinema-copy container" style={{y:reduced?0:copyY,opacity:reduced?1:copyOpacity}}>{copy}</motion.div><div className="cinema-details container">{details}</div><div className="cinema-foreground" aria-hidden="true"/><div className="cinema-bottom container">{bottom}</div></section>;
}
