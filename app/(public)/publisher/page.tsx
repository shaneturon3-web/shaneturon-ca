import { getLanguage } from '@/lib/language';
import { PublisherClient } from './publisher-client';

const language = getLanguage();

export const metadata = {
  title: language.pages.publisher.metadata.title,
  description: language.pages.publisher.metadata.description,
};

export default function PublisherPage() {
  return <PublisherClient />;
}
