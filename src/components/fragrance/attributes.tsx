import {Timer, Gem} from 'lucide-react';
import {FadeReveal} from '@/components/animations/fade-reveal';
import type {FragranceAttribute, Locale} from '@/types/content';
function SuitSymbol(props: React.SVGProps<SVGSVGElement> & {size?:number}) {
 return <svg {...props} width={props.size||32} height={props.size||32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><path d="M4 22v-6c0-3 3-5 5-5l3 3 3-3c2 0 5 2 5 5v6M9 11l-1 6 4-3 4 3-1-6M12 14l-1 3 1 5 1-5-1-3"/></svg>;
}
const icons = {timer: Timer, diamond: Gem, person: SuitSymbol};
export function FragranceAttributes({attributes, locale, reveal=false}: {attributes: FragranceAttribute[]; locale: Locale; reveal?: boolean}) {
 return <ul className="fragrance-attributes">{attributes.map((attribute,index)=>{const Icon=icons[attribute.icon];const content=<><Icon size={32} strokeWidth={1.15} aria-hidden="true"/><span>{attribute.label[locale]}</span></>;return <li key={attribute.id}>{reveal?<FadeReveal delay={index*.06} className="attribute-content">{content}</FadeReveal>:content}</li>;})}</ul>;
}
