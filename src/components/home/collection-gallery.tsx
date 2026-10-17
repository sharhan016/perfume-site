'use client';
import {useId, useRef, type ReactNode} from 'react';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import {useReducedMotion} from 'motion/react';
import type {Locale} from '@/types/content';

export function CollectionGallery({children, count, labels}: {
 children: ReactNode; count: number; locale: Locale; labels: {previous: string; next: string; browse: string};
}) {
 const rail = useRef<HTMLDivElement>(null);
 const id = useId();
 const reduced = useReducedMotion();
 function move(direction: number, keyboard: boolean) {
  const element = rail.current;
  if (!element) return;
  const items = Array.from(element.children) as HTMLElement[];
  const firstOffset = items[0]?.offsetLeft || 0;
  const offsets = items.map(item => item.offsetLeft - firstOffset);
  const distances = offsets.map(offset => Math.abs(offset - element.scrollLeft));
  const current = distances.indexOf(Math.min(...distances));
  const next = Math.max(0, Math.min(items.length - 1, current + direction));
  element.scrollTo({left: offsets[next] || 0, behavior: reduced || keyboard ? 'auto' : 'smooth'});
 }
 return <div className="collection-gallery">
  <div ref={rail} id={id} className="fragrance-grid editorial-gallery">{children}</div>
  {count > 1 && <div className="gallery-controls"><p>{labels.browse}</p><div>
   <button type="button" aria-label={labels.previous} aria-controls={id} onClick={event => move(-1, event.detail === 0)}><ArrowLeft className="directional" size={20} strokeWidth={1.2}/></button>
   <button type="button" aria-label={labels.next} aria-controls={id} onClick={event => move(1, event.detail === 0)}><ArrowRight className="directional" size={20} strokeWidth={1.2}/></button>
  </div></div>}
 </div>;
}
