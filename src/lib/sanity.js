import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '79z7j8su',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const ALL_CONTENT_QUERY = `{
  "profile": *[_type == "profile"][0],
  "nav": *[_type == "navigation"][0],
  "social": *[_type == "socialLinks"][0],
  "about": *[_type == "about"][0],
  "skills": *[_type == "skills"][0],
  "agency": *[_type == "agency"][0],
  "projectsSettings": *[_type == "projectsSettings"][0],
  "projects": *[_type == "project"] | order(order asc),
  "blogsSettings": *[_type == "blogsSettings"][0],
  "contactSettings": *[_type == "contactSettings"][0],
  "footer": *[_type == "footer"][0],
  "seo": *[_type == "seo"][0]
}`;

export function fetchAllContent() {
  return sanityClient.fetch(ALL_CONTENT_QUERY);
}
