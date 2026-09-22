/**
 * Single source of truth for who you are and where you live online.
 * Everything in this file renders somewhere on the site — edit here, not in
 * the page templates.
 */

export const site = {
  name: 'Your Name',
  /** Sits under your name on the home page. One line, no period. */
  tagline: 'Researcher, builder, and science communicator',
  /** Used in the <title> of every page and in link previews. */
  siteName: 'Your Name',
  /** Fallback description for search engines and social cards. */
  description:
    'Personal site of Your Name — research, open-source projects, science outreach, and art.',
  /** Shown on the home page and linked as mailto:. */
  email: 'you@example.com',
  /** Optional: drop a PDF in public/ and point here. Set to null to hide. */
  cv: '/cv.pdf',
  /** Optional: a portrait in src/assets/. Set to null for a text-only header. */
  location: 'City, Country',
} as const;

/**
 * Social and academic links.
 *
 * Order here is the order they render. Delete a line to hide that link —
 * nothing else needs to change. `icon` must match a key in
 * src/components/SocialIcon.astro.
 */
export type SocialLink = {
  label: string;
  url: string;
  icon: string;
  /** Hidden until you fill in a real URL, so placeholders never ship. */
  placeholder?: boolean;
};

export const socials: SocialLink[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/YOUR-HANDLE',
    icon: 'linkedin',
    placeholder: true,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/YOUR-HANDLE',
    icon: 'github',
    placeholder: true,
  },
  {
    label: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=YOUR-ID',
    icon: 'scholar',
    placeholder: true,
  },
  {
    label: 'ORCID',
    url: 'https://orcid.org/0000-0000-0000-0000',
    icon: 'orcid',
    placeholder: true,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/YOUR-HANDLE',
    icon: 'instagram',
    placeholder: true,
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@YOUR-HANDLE',
    icon: 'tiktok',
    placeholder: true,
  },
  {
    label: 'Letterboxd',
    url: 'https://letterboxd.com/YOUR-HANDLE',
    icon: 'letterboxd',
    placeholder: true,
  },
];

/** Only links you've actually filled in get rendered. */
export const activeSocials = socials.filter((s) => !s.placeholder);

export const nav = [
  { label: 'About', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Outreach', href: '/outreach/' },
  { label: 'Hobbies', href: '/hobbies/' },
];
