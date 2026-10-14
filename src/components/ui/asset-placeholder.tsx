import Image from 'next/image';
import {useTranslations} from 'next-intl';
import type {Asset, Locale} from '@/types/content';
export function AssetPlaceholder({asset, locale, priority = false}: {asset: Asset; locale: Locale; priority?: boolean}) {
 const t = useTranslations('Foundation');
 if (asset.src) return <Image src={asset.src} alt={asset.alt[locale]} width={asset.width} height={asset.height} priority={priority} sizes="(max-width: 768px) 90vw, 42vw" />;
 return <div className="asset-placeholder" style={{aspectRatio: `${asset.width}/${asset.height}`}} role="img" aria-label={t('assetLabel')}><span className="placeholder-mark" aria-hidden="true">O</span><span className="eyebrow">ORYNOVA</span><span className="placeholder-caption">{t('assetCaption')}</span></div>;
}
