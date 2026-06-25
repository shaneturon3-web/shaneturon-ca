import { getLanguage } from '@/lib/language';
import { ArchitectureClient } from './architecture-client';

const language = getLanguage();

export const metadata = {
  title: language.pages.architecture.metadata.title,
  description: language.pages.architecture.metadata.description,
};

export default function ArchitecturePage() {
  return <ArchitectureClient />;
}
