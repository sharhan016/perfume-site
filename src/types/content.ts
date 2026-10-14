export type Locale = 'en' | 'ar';
export type LocalizedText = Record<Locale, string>;
export type Asset = {src: string | null; width: number; height: number; alt: LocalizedText};
export type FragranceNote = {id: string; name: LocalizedText};
export interface Fragrance {
 id: string; slug: string; name: string; tagline: LocalizedText;
 description: LocalizedText | null;
 theme: 'nox' | 'fuego' | 'lazo';
 images: {primary: Asset; gallery: Asset[]; desktopHero?: Asset; mobileHero?: Asset};
 notes: {top: FragranceNote[]; heart: FragranceNote[]; base: FragranceNote[]} | null;
 specifications: {label: LocalizedText; value: LocalizedText}[];
 featured: boolean; published: boolean; sortOrder: number;
}
