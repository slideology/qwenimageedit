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
  title = 'Earth Zoom AI - 智能地球缩放与视频生成工具',
  description = '使用Earth Zoom AI探索地球的每个角落。我们的AI驱动技术让您能够创建令人惊叹的地球缩放视频，适用于教育、展示和创意项目。',
  image = 'https://earthzoomai.org/images/earth-zoom/social/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : 'https://earthzoomai.org',
  type = 'website',
  structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Earth Zoom AI',
    'description': '智能地球缩放与视频生成工具',
    'applicationCategory': 'MultimediaApplication',
    'operatingSystem': 'Web',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'author': {
      '@type': 'Organization',
      'name': 'Earth Zoom AI Team',
      'url': 'https://earthzoomai.org'
    }
  }
}) => {
  useEffect(() => {
    // 设置页面标题
    document.title = title;

    // 创建或更新meta标签的函数
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

    // 设置基本meta标签
    setMetaTag('description', description);
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('theme-color', '#0f172a');
    setMetaTag('robots', 'index, follow');
    setMetaTag('googlebot', 'index, follow');
    setMetaTag('keywords', 'Earth Zoom AI, 地球缩放, AI视频生成, 地理可视化, 卫星图像, 地球观察');
    setMetaTag('author', 'Earth Zoom AI Team');
    setMetaTag('copyright', 'Earth Zoom AI');

    // 设置Open Graph标签
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', 'Earth Zoom AI', true);

    // 设置Twitter Card标签
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', '@EarthZoomAI');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // 设置结构化数据
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // 设置canonical链接
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;

    // 清理函数
    return () => {
      // 这里可以添加清理逻辑，如果需要的话
    };
  }, [title, description, image, url, type, structuredData]);

  return null; // 这个组件不渲染任何内容
};

export default SEOHead; 