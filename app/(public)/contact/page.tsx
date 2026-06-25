import { getLanguage } from '@/lib/language';
import { ContactClient } from './contact-client';

const language = getLanguage();

export const metadata = {
  title: language.pages.contact.metadata.title,
  description: language.pages.contact.metadata.description,
};

export default function ContactPage() {
  return <ContactClient />;
}
