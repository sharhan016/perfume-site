import type {Fragrance} from '@/types/content';
import {assets} from './assets';
// Notes/attributes for NOX follow the supplied ORYNOVA marketing reference.
// Other fragrances have no supplied ingredient or attribute claims.
export const fragranceContent: Fragrance[] = [
 {id: 'nox', slug: 'nox', name: 'NOX', tagline: {en: 'Own the Night', ar: 'امتلك الليل'}, description: null, theme: 'nox', images: {primary: assets.products.nox, gallery: []}, notes: {
 top: [{id:'lavender',name:{en:'Lavender',ar:'الخزامى'}},{id:'bergamot',name:{en:'Bergamot',ar:'البرغموت'}},{id:'sage',name:{en:'Sage',ar:'المريمية'}},{id:'mandarin',name:{en:'Mandarin',ar:'اليوسفي'}}],
 heart: [{id:'coffee',name:{en:'Coffee',ar:'القهوة'}},{id:'geranium',name:{en:'Geranium',ar:'إبرة الراعي'}},{id:'jasmine',name:{en:'Jasmine',ar:'الياسمين'}}],
 base: [{id:'sandalwood',name:{en:'Sandalwood',ar:'خشب الصندل'}},{id:'leather',name:{en:'Leather',ar:'الجلد'}},{id:'myrrh',name:{en:'Myrrh',ar:'المر'}},{id:'musk',name:{en:'Musk',ar:'المسك'}}]
 }, noteImages: assets.notes.nox, referenceSource: 'Orynova_ Cinematic Luxury Fragrance UI Board.png — NOX product detail and fragrance notes panels',
 attributes: [
 {id:'lasting',label:{en:'LONG LASTING',ar:'ثبات طويل الأمد'},icon:'timer',source:'ORYNOVA supplied NOX marketing reference'},
 {id:'quality',label:{en:'PREMIUM QUALITY',ar:'جودة فائقة'},icon:'diamond',source:'ORYNOVA supplied NOX marketing reference'},
 {id:'men',label:{en:'CRAFTED FOR MEN',ar:'مصمم للرجال'},icon:'person',source:'ORYNOVA supplied NOX marketing reference'}
 ], specifications: [], featured: true, published: true, sortOrder: 10},
 {id: 'fuego', slug: 'fuego', name: 'FUEGO', tagline: {en: 'Ignite Your Presence', ar: 'أشعل حضورك'}, description: null, theme: 'fuego', images: {primary: assets.products.fuego, gallery: []}, notes: null, specifications: [], featured: true, published: true, sortOrder: 20},
 {id: 'lazo', slug: 'lazo', name: 'LAZO', tagline: {en: 'Elegance in Every Moment', ar: 'أناقة في كل لحظة'}, description: null, theme: 'lazo', images: {primary: assets.products.lazo, gallery: []}, notes: null, specifications: [], featured: true, published: true, sortOrder: 30}
];
