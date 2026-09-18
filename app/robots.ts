import type { MetadataRoute } from 'next';

const publicRoutes = ['/', '/about', '/systems', '/contact'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: publicRoutes,
        disallow: ['/admin', '/api', '/login'],
      },
    ],
    sitemap: 'https://shaneturon.ca/sitemap.xml',
  };
}
