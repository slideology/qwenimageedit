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
  title = 'Qwen Image Edit - Advanced AI Image Editing Platform',
  description = 'Transform your images with Qwen Image Edit. Our AI-driven technology enables semantic and appearance editing, text modification, style transfer, and professional image enhancement.',
  image = 'https://earthzoomai.org/images/earth-zoom/social/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : 'https://earthzoomai.org',
  type = 'website',
  structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Qwen Image Edit',
    'description': 'Advanced AI Image Editing Platform',
    'applicationCategory': 'MultimediaApplication',
    'operatingSystem': 'Web',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'author': {
      '@type': 'Organization',
      'name': 'Qwen Image Edit Team',
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
    setMetaTag('keywords', 'Qwen Image Edit, AI image editing, semantic editing, appearance editing, text editing, style transfer, image enhancement');
    setMetaTag('author', 'Qwen Image Edit Team');
    setMetaTag('copyright', 'Qwen Image Edit');

    // Set Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', 'Qwen Image Edit', true);

    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', '@QwenImageEdit');
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