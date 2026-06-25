import { PublicNav } from '@/components/public-nav';
import { PublicFooter } from '@/components/public-footer';
import { AnalyticsTracker } from '@/components/analytics-tracker';
import { LanguageProvider } from '@/lib/language';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <PublicNav />
      <AnalyticsTracker />
      <main className="min-h-screen pt-16">{children}</main>
      <PublicFooter />
    </LanguageProvider>
  );
}
