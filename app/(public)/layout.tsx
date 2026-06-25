import { PublicNav } from '@/components/public-nav';
import { PublicFooter } from '@/components/public-footer';
import { AnalyticsTracker } from '@/components/analytics-tracker';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicNav />
      <AnalyticsTracker />
      <main className="min-h-screen pt-16">{children}</main>
      <PublicFooter />
    </>
  );
}
