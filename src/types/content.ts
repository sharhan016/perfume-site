export type Locale = 'en' | 'ar';
export type LocalizedText = Record<Locale, string>;
export type Asset = {src: string | null; width: number; height: number; alt: LocalizedText};
export type FragranceNote = {id: string; name: LocalizedText; image?: Asset};
export type NoteCategory = 'top' | 'heart' | 'base';
export type FragranceAttribute = {id: string; label: LocalizedText; icon: 'timer' | 'diamond' | 'person'; source: string};
export interface Fragrance {
 id: string; slug: string; name: string; tagline: LocalizedText;
 campaignHeadline?: LocalizedText; campaignMessage?: LocalizedText; supportingMessage?: LocalizedText;
 description: LocalizedText | null;
 theme: 'nox' | 'fuego' | 'lazo';
 images: {isolated?: Asset; primary: Asset; gallery: Asset[]; desktopHero?: Asset; mobileHero?: Asset};
 notes: {top: FragranceNote[]; heart: FragranceNote[]; base: FragranceNote[]} | null;
 noteImages?: Record<NoteCategory, Asset>;
 referenceSource?: string;
 attributes?: FragranceAttribute[];
 specifications: {label: LocalizedText; value: LocalizedText}[];
 featured: boolean; published: boolean; sortOrder: number;
}
