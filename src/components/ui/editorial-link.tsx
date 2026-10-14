import {ArrowRight, ArrowUpRight} from 'lucide-react';
import {Link} from '@/i18n/navigation';

export function EditorialLink({href, children, solid = false, outlined = false, className = ''}: {
 href: string;
 children: React.ReactNode;
 solid?: boolean;
 outlined?: boolean;
 className?: string;
}) {
 const style = outlined ? 'button-outline' : solid ? 'button-gold' : 'editorial-link';
 const Arrow = outlined ? ArrowUpRight : ArrowRight;
 return (
  <Link href={href} className={`${style} ${className}`}>
   {children}
   <Arrow size={18} strokeWidth={1.2} className="directional" aria-hidden="true" />
  </Link>
 );
}
