import {assets} from '@/content/assets';
import type {Asset} from '@/types/content';
export type HomePageContent = {
 hero: {desktop: Asset; mobile: Asset; ctaHref: '/fragrances'};
 featured: {ctaHref: '/fragrances'};
 story: {image: Asset; ctaHref: '/our-story'};
 values: {id: 'expression' | 'detail' | 'identity' | 'purpose'; icon: 'spark' | 'gem' | 'flower' | 'compass'}[];
 discovery: {image: Asset; ctaHref: '/fragrances'};
 closing: {ctaHref: '/contact'};
};
// Visual/editorial settings. Marketing copy is in the locale message catalogs.
export const homeContent: HomePageContent = {
 hero: {desktop: assets.products.nox, mobile: assets.hero.mobile, ctaHref: '/fragrances'},
 featured: {ctaHref: '/fragrances'},
 story: {image: assets.campaigns.packaging, ctaHref: '/our-story'},
 values: [
  {id: 'expression', icon: 'spark'}, {id: 'detail', icon: 'gem'},
  {id: 'identity', icon: 'flower'}, {id: 'purpose', icon: 'compass'}
 ],
 discovery: {image: assets.hero.desktop, ctaHref: '/fragrances'},
 closing: {ctaHref: '/contact'}
};
