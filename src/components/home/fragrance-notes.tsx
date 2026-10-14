import {getTranslations} from 'next-intl/server';
import {getNotesLabels} from '@/lib/content/notes';
import {NotesExperience} from '@/components/fragrance/notes-experience';
import {FadeReveal} from '@/components/animations/fade-reveal';
import type {Fragrance,Locale} from '@/types/content';
export async function FragranceNotes({fragrance,locale}:{fragrance:Fragrance|undefined;locale:Locale}) {
 if(!fragrance?.notes) return null;
 const t=await getTranslations('Notes');const labels=await getNotesLabels();
 return <section className={`home-notes container section-space theme-${fragrance.theme}`} aria-labelledby="composition-title"><FadeReveal><p className="eyebrow">{t('eyebrow')}</p><h2 id="composition-title">{t('heading')}</h2></FadeReveal><FadeReveal delay={.1}><NotesExperience fragrance={fragrance} locale={locale} labels={labels}/></FadeReveal></section>;
}
