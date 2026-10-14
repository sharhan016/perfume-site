import Image, {getImageProps} from 'next/image';
import type {Asset, Locale} from '@/types/content';
import {AssetPlaceholder} from './asset-placeholder';
export function EditorialImage({asset, locale, sizes, className, priority = false}: {asset: Asset; locale: Locale; sizes: string; className?: string; priority?: boolean}) {
 if (!asset.src) return <AssetPlaceholder asset={asset} locale={locale} />;
 return <Image className={className} src={asset.src} alt={asset.alt[locale]} width={asset.width} height={asset.height} sizes={sizes} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} />;
}
export function CampaignImage({desktop, mobile, locale, alt}: {desktop: Asset; mobile: Asset; locale: Locale; alt: string}) {
 if (!desktop.src || !mobile.src) return <EditorialImage asset={mobile.src ? mobile : desktop} locale={locale} sizes="100vw" priority />;
 const desktopProps = getImageProps({src: desktop.src, alt: desktop.alt[locale], width: desktop.width, height: desktop.height, sizes: '65vw', quality: 85}).props;
 const mobileProps = getImageProps({src: mobile.src, alt: mobile.alt[locale], width: mobile.width, height: mobile.height, sizes: '100vw', quality: 85}).props;
 // The optimized props must go onto a native img to avoid double optimization.
 // A picture selects only one crop; no duplicate hidden priority images.
 return <picture><source media="(min-width: 900px)" srcSet={desktopProps.srcSet} sizes={desktopProps.sizes} /><img {...mobileProps} alt={alt} className="hero-image" loading="eager" fetchPriority="high" /></picture>;
}
