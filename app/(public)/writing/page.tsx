import { getLanguage } from '@/lib/language';
import { WritingClient } from './writing-client';

export const dynamic = 'force-dynamic';

const language = getLanguage();

export const metadata = {
  title: language.pages.writing.metadata.title,
  description: language.pages.writing.metadata.description,
};

export default async function WritingPage() {
  return <WritingClient />;
}
