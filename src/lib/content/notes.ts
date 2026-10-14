import {getTranslations} from 'next-intl/server';
import type {NotesLabels} from '@/components/fragrance/notes-experience';
export async function getNotesLabels():Promise<NotesLabels> {
 const t=await getTranslations('Notes');
 return {title:t('title'),top:t('top'),heart:t('heart'),base:t('base'),intro:t('intro')};
}
