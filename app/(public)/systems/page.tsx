import { getLanguage } from '@/lib/language';
import { SystemsClient } from './systems-client';

export const dynamic = 'force-dynamic';

const language = getLanguage();

export const metadata = {
  title: language.pages.systems.metadata.title,
  description: language.pages.systems.metadata.description,
  alternates: {
    canonical: '/systems',
  },
  openGraph: {
    title: language.pages.systems.metadata.title,
    description: language.pages.systems.metadata.description,
    url: '/systems',
  },
};

export default async function SystemsPage() {
  return <SystemsClient />;
}
