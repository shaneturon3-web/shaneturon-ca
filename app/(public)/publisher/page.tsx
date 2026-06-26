import { getLanguage } from '@/lib/language';
import { PublisherClient } from './publisher-client';

export const dynamic = 'force-dynamic';

const language = getLanguage();

export const metadata = {
  title: language.pages.publisher.metadata.title,
  description: language.pages.publisher.metadata.description,
};

export default async function PublisherPage() {
  return <PublisherClient />;
}
