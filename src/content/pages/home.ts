import {assets} from '@/content/assets';
import type {Asset} from '@/types/content';
export type HomePageContent = {
 hero: {desktop: Asset; mobile: Asset; ctaHref: '/fragrances'};
 featured: {ctaHref: '/fragrances'};
 story: {image: Asset; ctaHref: '/our-story'};
 values: {fragranceId: string};
 discovery: {image: Asset; ctaHref: '/fragrances'};
 closing: {ctaHref: '/fragrances'};
};
// Visual/editorial settings. Marketing copy is in the locale message catalogs.
export const homeContent: HomePageContent = {
 hero: {desktop: assets.products.nox, mobile: assets.hero.mobile, ctaHref: '/fragrances'},
 featured: {ctaHref: '/fragrances'},
 story: {image: assets.campaigns.packaging, ctaHref: '/our-story'},
 values: {fragranceId: 'nox'},
 discovery: {image: assets.hero.desktop, ctaHref: '/fragrances'},
 closing: {ctaHref: '/fragrances'}
};
