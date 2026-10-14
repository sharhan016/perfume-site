import {ArrowUpRight} from 'lucide-react';
import {Link} from '@/i18n/navigation';

type PremiumCtaProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
 href?: string;
 children: React.ReactNode;
 commerce?: boolean;
};

// A single visual component supports navigation and disclosure actions.
// Commerce is deliberately a distinct opt-in style for a future integration.
export function PremiumCta({href,children,className='',commerce=false,...buttonProps}:PremiumCtaProps) {
 const classes=`${commerce?'commerce-cta':'premium-cta'} ${className}`;
 const content=<><span>{children}</span><ArrowUpRight size={18} strokeWidth={1.2} className="directional cta-arrow" aria-hidden="true"/></>;
 return href ? <Link href={href} className={classes}>{content}</Link> : <button {...buttonProps} className={classes}>{content}</button>;
}
export {PremiumCta as EditorialLink};
