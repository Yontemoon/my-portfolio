import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://monteyoon.com',
      lastModified: new Date(),
    },
    {
      url: 'https://monteyoon.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://monteyoon.com/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://monteyoon.com/contact',
      lastModified: new Date(),
    },
  ]
}
