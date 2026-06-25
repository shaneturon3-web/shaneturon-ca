'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    const track = async () => {
      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventType: 'page_view',
            page: pathname,
            referrer: typeof document !== 'undefined' ? document?.referrer : null,
            userAgent: typeof navigator !== 'undefined' ? navigator?.userAgent : null,
          }),
        });
      } catch {
        // silent fail
      }
    };
    track();
  }, [pathname]);

  return null;
}
