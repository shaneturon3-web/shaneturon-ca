'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function isLocalRuntime() {
  if (typeof window === 'undefined') {
    return true;
  }

  return [
    'localhost',
    '127.0.0.1',
    '0.0.0.0',
  ].includes(window.location.hostname);
}

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (isLocalRuntime()) {
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3000);

    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      signal: controller.signal,
      body: JSON.stringify({
        eventType: 'page_view',
        page: pathname || '/',
        referrer: document.referrer || null,
        userAgent: navigator.userAgent || null,
      }),
    })
      .catch(() => {})
      .finally(() => window.clearTimeout(timeout));

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
