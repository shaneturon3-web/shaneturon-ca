import type { MetadataRoute } from 'next';

const publicRoutes = [
  '/',
  '/about',
  '/systems',
  '/writing',
  '/publisher',
  '/contact',
  '/case-files',
  '/architecture',
  '/lab',
  '/now',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `https://shaneturon.ca${route}`,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
