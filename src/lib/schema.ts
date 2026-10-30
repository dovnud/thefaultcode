import { CONTACT_EMAIL, EDITORIAL_AUTHOR, ORG, SITE_URL } from '../config/site';
import { ogPath } from './og';

/** Content dates are stored as YYYY-MM-DD. Noon UTC keeps that calendar day stable. */
export function isoDate(day: string): string {
  if (!day) return day;
  return day.includes('T') ? day : `${day}T12:00:00Z`;
}

/** One Organization node. Homepage and About only. No logo (no qualifying image) and no sameAs (no profiles). */
export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    ...ORG,
    description: 'An independent reference site that explains furnace, washing machine, dishwasher and AC / heat pump fault codes using manufacturer manuals and official support pages.',
    ...(CONTACT_EMAIL ? { contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: CONTACT_EMAIL, url: `${SITE_URL}/contact/` } } : {}),
  };
}

export function breadcrumbLd(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
  };
}

/** 1200×630 page card. It shows the page's own title or code, so it represents the article. */
export function articleImage(pathname: string) {
  return { '@type': 'ImageObject', url: `${SITE_URL}${ogPath(pathname)}`, width: 1200, height: 630 };
}

export function articleLd(o: { headline: string; description: string; url: string; pathname: string; published: string; modified?: string }) {
  const published = isoDate(o.published);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: o.headline,
    description: o.description,
    datePublished: published,
    dateModified: isoDate(o.modified ?? o.published),
    image: articleImage(o.pathname),
    author: EDITORIAL_AUTHOR,
    publisher: ORG,
    mainEntityOfPage: { '@type': 'WebPage', '@id': o.url },
  };
}
