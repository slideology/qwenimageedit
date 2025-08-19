import { useState, useEffect } from 'react';

export type SiteConfig = {
  siteName: string;
  logo: string;
  favicon: string;
  brandColor: string;
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    bgImage?: string;
  };
  features: Array<{
    title: string;
    desc: string;
    image: string;
  }>;
  nav: Array<{
    label: string;
    href: string;
  }>;
  footer: {
    copyright: string;
    social: Array<{ type: string; url: string }>;
    desc: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
};

export function useSiteConfig(): SiteConfig | null {
  const [config, setConfig] = useState<SiteConfig | null>(null);

  useEffect(() => {
    fetch('/config/site-config.json')
      .then((res) => res.json())
      .then((data) => setConfig(data));
  }, []);

  return config;
} 