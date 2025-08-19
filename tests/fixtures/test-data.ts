export const testData = {
  // 有效邮箱地址
  validEmails: [
    'test@example.com',
    'user.name@domain.co.uk',
    'test+tag@gmail.com',
    'valid.email@test-domain.org'
  ],
  
  // 无效邮箱地址
  invalidEmails: [
    'invalid-email',
    '@domain.com',
    'test@',
    'test..test@domain.com',
    'test@domain',
    'test space@domain.com'
  ],
  
  // 示例内容
  sampleContent: {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message for contact form validation. It contains enough content to test the form properly.',
    subject: 'Test Subject for Contact Form'
  },
  
  // 预期的功能特性
  expectedFeatures: [
    'AI-Powered Processing',
    'Real-Time Rendering',
    'Advanced Satellite Integration',
    'Customizable Effects',
    'Multi-Platform Export',
    'Enterprise-Grade Security'
  ],
  
  // 导航链接
  navigationLinks: [
    'Features',
    'Showcase', 
    'Reviews',
    'FAQ'
  ],
  
  // Footer链接
  footerLinks: {
    quickLinks: ['Home', 'Features', 'Showcase', 'Reviews', 'FAQ', 'About'],
    supportLinks: ['Contact Us', 'Pricing', 'Privacy Policy', 'Terms of Service'],
    socialLinks: ['YouTube', 'Twitter', 'TikTok']
  },
  
  // FAQ数据
  faqData: [
    {
      question: 'What is Zoom Earth AI?',
      answer: 'Zoom Earth AI is an advanced AI-powered platform'
    },
    {
      question: 'How does the AI processing work?',
      answer: 'Our AI uses advanced machine learning algorithms'
    },
    {
      question: 'What formats can I export to?',
      answer: 'You can export your creations in multiple formats'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we implement enterprise-grade security measures'
    },
    {
      question: 'Can I use this for commercial purposes?',
      answer: 'Yes, our platform supports commercial usage'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide comprehensive support including documentation'
    }
  ],
  
  // 用户评价数据
  reviewsData: [
    {
      name: 'Sarah Chen',
      role: 'Content Creator',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      role: 'Marketing Director',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Social Media Manager',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Video Producer',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Digital Artist',
      rating: 5
    },
    {
      name: 'Alex Johnson',
      role: 'Brand Manager',
      rating: 5
    }
  ],
  
  // 性能基准
  performanceBenchmarks: {
    maxLoadTime: 3000, // 3秒
    maxLighthouseScore: {
      performance: 85,
      accessibility: 90,
      bestPractices: 85,
      seo: 90
    },
    maxImageLoadTime: 2000, // 2秒
    maxApiResponseTime: 1000 // 1秒
  },
  
  // 视口尺寸
  viewports: {
    mobile: { width: 375, height: 667 },
    tablet: { width: 768, height: 1024 },
    desktop: { width: 1920, height: 1080 },
    largeDesktop: { width: 2560, height: 1440 }
  },
  
  // SEO数据
  seoData: {
    expectedTitle: 'ZOOM EARTH AI',
    expectedKeywords: ['zoom', 'earth', 'ai', 'satellite', 'video', 'generation'],
    expectedDescription: /AI.*earth.*zoom/i,
    expectedOgTags: {
      title: 'ZOOM EARTH AI',
      type: 'website',
      image: /.+/,
      url: /https?:\/\/.+/
    }
  }
};

// 辅助函数
export const helpers = {
  // 生成随机邮箱
  generateRandomEmail: () => {
    const timestamp = Date.now();
    return `test${timestamp}@example.com`;
  },
  
  // 生成随机字符串
  generateRandomString: (length: number = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },
  
  // 等待动画完成
  waitForAnimations: async (page: any, timeout: number = 2000) => {
    await page.waitForTimeout(timeout);
  },
  
  // 滚动到元素
  scrollToElement: async (page: any, selector: string) => {
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500); // 等待滚动动画
  }
};