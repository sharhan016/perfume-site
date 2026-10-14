import type {Fragrance} from '@/types/content';
import {assets} from './assets';
// Taglines are editable concept copy. Notes and specifications await client verification.
export const fragranceContent: Fragrance[] = [
 {id: 'nox', slug: 'nox', name: 'NOX', tagline: {en: 'Own the Night', ar: 'امتلك الليل'}, description: null, theme: 'nox', images: {primary: assets.products.nox, gallery: []}, notes: null, specifications: [], featured: true, published: true, sortOrder: 10},
 {id: 'fuego', slug: 'fuego', name: 'FUEGO', tagline: {en: 'Ignite Your Presence', ar: 'أشعل حضورك'}, description: null, theme: 'fuego', images: {primary: assets.products.fuego, gallery: []}, notes: null, specifications: [], featured: true, published: true, sortOrder: 20},
 {id: 'lazo', slug: 'lazo', name: 'LAZO', tagline: {en: 'Elegance in Every Moment', ar: 'أناقة في كل لحظة'}, description: null, theme: 'lazo', images: {primary: assets.products.lazo, gallery: []}, notes: null, specifications: [], featured: true, published: true, sortOrder: 30}
];
