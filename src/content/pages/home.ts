import {assets} from '@/content/assets';
import type {Asset} from '@/types/content';
export type HomePageContent = {
 hero: {fragranceId: string; environment: Asset; ctaHref: '/fragrances'};
 featured: {ctaHref: '/fragrances'};
 story: {image: Asset; ctaHref: '/our-story'};
 values: {fragranceId: string};
 notes: {fragranceId: string; previewCount: number; environment: Asset};
 discovery: {image: Asset; ctaHref: '/fragrances'};
 closing: {ctaHref: '/fragrances'};
};
// Visual/editorial settings. Marketing copy is in the locale message catalogs.
export const homeContent: HomePageContent = {
 hero: {fragranceId: 'nox', environment: assets.cinema.environment, ctaHref: '/fragrances'},
 featured: {ctaHref: '/fragrances'},
 story: {image: assets.campaigns.packaging, ctaHref: '/our-story'},
 values: {fragranceId: 'nox'},
 notes: {fragranceId: 'nox', previewCount: 2, environment: assets.cinema.environment},
 discovery: {image: assets.hero.desktop, ctaHref: '/fragrances'},
 closing: {ctaHref: '/fragrances'}
};
