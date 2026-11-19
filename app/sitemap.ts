import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { getAllArticles } from '@/lib/writing';

export default function sitemap(): MetadataRoute.Sitemap {
  const articleUrls = getAllArticles().map((article) => ({
    url: `${siteUrl}/writing/${article.slug}`,
    lastModified: new Date(`${article.date}T00:00:00Z`),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/writing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...articleUrls,
  ];
}
