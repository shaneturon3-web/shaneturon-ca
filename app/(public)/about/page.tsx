import { getLanguage } from '@/lib/language';
import { AboutClient } from './about-client';

const language = getLanguage();

export const metadata = {
  title: language.pages.about.metadata.title,
  description: language.pages.about.metadata.description,
};

export default function AboutPage() {
  return <AboutClient />;
}
