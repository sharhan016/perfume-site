import {fragranceContent} from '@/content/fragrances';
export async function getFragrances() {return fragranceContent.filter(item => item.published).sort((a, b) => a.sortOrder - b.sortOrder);}
export async function getFeaturedFragrances() {return (await getFragrances()).filter(item => item.featured);}
export async function getFragranceBySlug(slug: string) {return (await getFragrances()).find(item => item.slug === slug);}
