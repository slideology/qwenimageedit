import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'ZOOM EARTH AI - Intelligent Earth Zoom and Video Generation Tool',
  description = 'Explore every corner of Earth with ZOOM EARTH AI. Our AI-driven technology enables you to create stunning earth zoom videos for education, presentations, and creative projects.',
  image = 'https://earthzoomai.org/images/earth-zoom/social/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : 'https://earthzoomai.org',
  type = 'website',
  structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ZOOM EARTH AI',
    'description': 'Intelligent Earth Zoom and Video Generation Tool',
    'applicationCategory': 'MultimediaApplication',
    'operatingSystem': 'Web',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'author': {
      '@type': 'Organization',
      'name': 'ZOOM EARTH AI Team',
      'url': 'https://earthzoomai.org'
    }
  }
}) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Function to create or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Set basic meta tags
    setMetaTag('description', description);
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('theme-color', '#0f172a');
    setMetaTag('robots', 'index, follow');
    setMetaTag('googlebot', 'index, follow');
    setMetaTag('keywords', 'ZOOM EARTH AI, earth zoom, AI video generation, geographic visualization, satellite imagery, earth observation');
    setMetaTag('author', 'ZOOM EARTH AI Team');
    setMetaTag('copyright', 'ZOOM EARTH AI');

    // Set Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', 'ZOOM EARTH AI', true);

    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', '@ZoomEarthAI');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // Set structured data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;

    // Cleanup function
    return () => {
      // Add cleanup logic here if needed
    };
  }, [title, description, image, url, type, structuredData]);

  return null; // This component doesn't render any content
};

export default SEOHead; 