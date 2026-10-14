import {Timer, Gem, UserRound} from 'lucide-react';
import type {FragranceAttribute, Locale} from '@/types/content';
const icons = {timer: Timer, diamond: Gem, person: UserRound};
export function FragranceAttributes({attributes, locale}: {attributes: FragranceAttribute[]; locale: Locale}) {
 return <ul className="fragrance-attributes">{attributes.map(attribute=>{const Icon=icons[attribute.icon];return <li key={attribute.id}><Icon size={32} strokeWidth={1.15} aria-hidden="true"/><span>{attribute.label[locale]}</span></li>;})}</ul>;
}
