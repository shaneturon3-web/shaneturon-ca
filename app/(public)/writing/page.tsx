import { WritingClient } from './writing-client';

export const metadata = {
  title: 'Writing and Publications — Shane Turon',
  description:
    'Selected books, essays, stories, guides, jokes, and public notes by Shane Turon.',
  alternates: {
    canonical: '/writing',
  },
  openGraph: {
    title: 'Writing and Publications — Shane Turon',
    description:
      'Selected books, essays, stories, guides, jokes, and public notes by Shane Turon.',
    url: '/writing',
  },
};

export default function WritingPage() {
  return <WritingClient />;
}
