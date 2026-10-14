import {ArrowRight} from 'lucide-react';
import {Link} from '@/i18n/navigation';
export function EditorialLink({href, children, solid = false, className = ''}: {href: string; children: React.ReactNode; solid?: boolean; className?: string}) {
 return <Link href={href} className={`${solid ? 'button-gold' : 'editorial-link'} ${className}`}>{children}<ArrowRight size={18} strokeWidth={1.3} className="directional" aria-hidden="true" /></Link>;
}
