export interface ThemeColors {
  background: string;
  text: string;
  muted: string;
  card: string;
  border: string;
  primary: string;
  accent: string;
}

export interface ButtonConfig {
  label: string;
  href: string;
}

export interface Section {
  id: string;
  type: 'hero' | 'story' | 'bullets' | 'cards' | 'gallery' | 'pricing' | 'faq' | 'cta';
  title?: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  highlights?: string[];
  items?: string[] | { q: string; a: string }[];
  cards?: { title: string; text: string }[];
  images?: { src: string; alt: string }[];
  price?: {
    cashLabel: string;
    cashValue: string;
    installmentsLabel: string;
    installmentsValue: string;
  };
  includes?: string[];
  scarcity?: {
    title: string;
    text: string;
  };
  secondaryInfo?: string[];
  primaryCta?: ButtonConfig;
  secondaryCta?: ButtonConfig;
  cta?: ButtonConfig;
  image?: { src: string; alt: string };
  trust?: string[];
  note?: string;
  content?: string[];
  disclaimer?: string;
  microcopy?: string;
  anchor?: boolean;
}

export interface PageContent {
  header: {
    brand: {
      name: string;
      logoText: string;
    };
    cta: ButtonConfig;
  };
  sections: Section[];
  footer: {
    brand: string;
    legal: string[];
  };
}