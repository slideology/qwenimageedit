# Earth Zoom AI - Playwright 完整测试方案

## 项目概述

Earth Zoom AI 是一个基于 React + TypeScript 的单页应用，提供 AI 驱动的地球缩放效果生成服务。本测试方案将覆盖网站的所有核心功能、用户体验和性能指标。

## 测试架构设计

### 1. 测试环境配置

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
```

### 2. 测试目录结构

```
tests/
├── e2e/                    # 端到端测试
│   ├── homepage.spec.ts    # 首页功能测试
│   ├── navigation.spec.ts  # 导航功能测试
│   ├── responsive.spec.ts  # 响应式设计测试
│   └── forms.spec.ts       # 表单功能测试
├── performance/            # 性能测试
│   ├── lighthouse.spec.ts  # Lighthouse 性能测试
│   ├── loading.spec.ts     # 页面加载测试
│   └── animations.spec.ts  # 动画性能测试
├── seo/                    # SEO 测试
│   ├── meta-tags.spec.ts   # Meta 标签测试
│   ├── structured-data.spec.ts # 结构化数据测试
│   └── accessibility.spec.ts   # 可访问性测试
├── visual/                 # 视觉回归测试
│   ├── homepage.spec.ts    # 首页视觉测试
│   ├── components.spec.ts  # 组件视觉测试
│   └── responsive.spec.ts  # 响应式视觉测试
├── integration/            # 集成测试
│   ├── external-links.spec.ts # 外部链接测试
│   ├── analytics.spec.ts   # 分析工具测试
│   └── social-media.spec.ts    # 社交媒体集成测试
├── fixtures/               # 测试数据和工具
│   ├── test-data.ts        # 测试数据
│   ├── page-objects.ts     # 页面对象模型
│   └── helpers.ts          # 测试辅助函数
└── utils/                  # 测试工具
    ├── lighthouse.ts       # Lighthouse 工具
    ├── accessibility.ts    # 可访问性工具
    └── performance.ts      # 性能测试工具
```

## 详细测试用例

### 1. 首页功能测试 (homepage.spec.ts)

```typescript
import { test, expect } from '@playwright/test';

test.describe('首页核心功能', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('页面基本元素加载', async ({ page }) => {
    // 验证页面标题
    await expect(page).toHaveTitle(/ZOOM EARTH AI/);
    
    // 验证主要标题
    await expect(page.locator('h1')).toContainText('ZOOM EARTH AI');
    
    // 验证CTA按钮
    await expect(page.locator('text=Start Creating Now')).toBeVisible();
    await expect(page.locator('text=View Examples')).toBeVisible();
  });

  test('Hero区域交互', async ({ page }) => {
    // 测试CTA按钮点击
    const startButton = page.locator('text=Start Creating Now');
    await expect(startButton).toBeVisible();
    
    // 验证外部链接
    await expect(startButton).toHaveAttribute('href', /pollo\.ai/);
    await expect(startButton).toHaveAttribute('target', '_blank');
  });

  test('特色标签显示', async ({ page }) => {
    const features = [
      '60-Second Processing',
      'AI-Powered',
      'Multi-Platform',
      'Viral Ready'
    ];
    
    for (const feature of features) {
      await expect(page.locator(`text=${feature}`)).toBeVisible();
    }
  });

  test('滚动指示器动画', async ({ page }) => {
    const scrollIndicator = page.locator('.animate-bounce');
    await expect(scrollIndicator).toBeVisible();
    
    // 验证动画类存在
    await expect(scrollIndicator).toHaveClass(/animate-bounce/);
  });
});

test.describe('功能展示区域', () => {
  test('Showcase区域内容', async ({ page }) => {
    await page.goto('/');
    
    // 滚动到showcase区域
    await page.locator('#showcase').scrollIntoViewIfNeeded();
    
    // 验证标题
    await expect(page.locator('text=See It In Action')).toBeVisible();
    
    // 验证展示卡片
    const showcaseCards = page.locator('#showcase .grid > div');
    await expect(showcaseCards).toHaveCount(3);
    
    // 验证图片加载
    const images = page.locator('#showcase img');
    await expect(images).toHaveCount(3);
    
    for (let i = 0; i < 3; i++) {
      await expect(images.nth(i)).toHaveAttribute('src', /.+/);
      await expect(images.nth(i)).toHaveAttribute('alt', /.+/);
    }
  });

  test('Features区域内容', async ({ page }) => {
    await page.goto('/');
    await page.locator('#features').scrollIntoViewIfNeeded();
    
    const featureCards = page.locator('#features .grid > div');
    await expect(featureCards).toHaveCount(6);
    
    const expectedFeatures = [
      'AI-Powered Processing',
      'Real-Time Rendering',
      'Advanced Satellite Integration',
      'Customizable Effects',
      'Multi-Platform Export',
      'Enterprise-Grade Security'
    ];
    
    for (const feature of expectedFeatures) {
      await expect(page.locator(`text=${feature}`)).toBeVisible();
    }
  });
});

test.describe('用户评价区域', () => {
  test('Reviews区域显示', async ({ page }) => {
    await page.goto('/');
    await page.locator('#reviews').scrollIntoViewIfNeeded();
    
    // 验证标题
    await expect(page.locator('text=What Our Users Say')).toBeVisible();
    
    // 验证评价卡片
    const reviewCards = page.locator('#reviews .grid > div');
    await expect(reviewCards).toHaveCount(6);
    
    // 验证用户头像和信息
    const userAvatars = page.locator('#reviews .w-12.h-12');
    await expect(userAvatars).toHaveCount(6);
  });
});

test.describe('FAQ区域', () => {
  test('FAQ交互功能', async ({ page }) => {
    await page.goto('/');
    await page.locator('#faq').scrollIntoViewIfNeeded();
    
    // 验证FAQ标题
    await expect(page.locator('text=Everything About Zoom Earth AI')).toBeVisible();
    
    // 获取所有FAQ项目
    const faqItems = page.locator('#faq .bg-gray-800');
    await expect(faqItems).toHaveCount(6);
    
    // 测试第一个FAQ的展开/收起
    const firstFAQ = faqItems.first();
    const firstButton = firstFAQ.locator('button');
    
    // 初始状态应该是收起的
    await expect(firstFAQ.locator('.animate-fade-in')).not.toBeVisible();
    
    // 点击展开
    await firstButton.click();
    await expect(firstFAQ.locator('.animate-fade-in')).toBeVisible();
    
    // 再次点击收起
    await firstButton.click();
    await expect(firstFAQ.locator('.animate-fade-in')).not.toBeVisible();
  });

  test('FAQ结构化数据', async ({ page }) => {
    await page.goto('/');
    
    // 验证FAQ结构化数据脚本存在
    const faqSchema = page.locator('script[type="application/ld+json"]');
    await expect(faqSchema).toHaveCount(1);
    
    // 验证结构化数据内容
    const schemaContent = await faqSchema.textContent();
    expect(schemaContent).toContain('"@type": "FAQPage"');
    expect(schemaContent).toContain('"@type": "Question"');
  });
});
```

### 2. 导航功能测试 (navigation.spec.ts)

```typescript
import { test, expect } from '@playwright/test';

test.describe('导航功能测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Header导航基本功能', async ({ page }) => {
    // 验证Logo
    await expect(page.locator('img[alt="ZOOM EARTH AI Logo"]')).toBeVisible();
    await expect(page.locator('text=ZOOM EARTH AI').first()).toBeVisible();
    
    // 验证导航链接
    const navLinks = ['Features', 'Showcase', 'Reviews', 'FAQ'];
    for (const link of navLinks) {
      await expect(page.locator(`button:has-text("${link}")`)).toBeVisible();
    }
    
    // 验证Try Now按钮
    await expect(page.locator('text=Try Now')).toBeVisible();
  });

  test('锚点导航功能', async ({ page }) => {
    // 测试Features导航
    await page.locator('button:has-text("Features")').click();
    await page.waitForTimeout(1000); // 等待滚动动画
    
    // 验证页面滚动到Features区域
    const featuresSection = page.locator('#features');
    await expect(featuresSection).toBeInViewport();
    
    // 测试其他导航链接
    await page.locator('button:has-text("Showcase")').click();
    await page.waitForTimeout(1000);
    await expect(page.locator('#showcase')).toBeInViewport();
    
    await page.locator('button:has-text("Reviews")').click();
    await page.waitForTimeout(1000);
    await expect(page.locator('#reviews')).toBeInViewport();
    
    await page.locator('button:has-text("FAQ")').click();
    await page.waitForTimeout(1000);
    await expect(page.locator('#faq')).toBeInViewport();
  });

  test('滚动时Header状态变化', async ({ page }) => {
    // 初始状态Header应该是透明的
    const header = page.locator('header');
    await expect(header).toHaveClass(/bg-transparent/);
    
    // 滚动页面
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(500);
    
    // Header应该变为有背景
    await expect(header).toHaveClass(/bg-gray-900/);
  });

  test('移动端菜单功能', async ({ page }) => {
    // 设置移动端视口
    await page.setViewportSize({ width: 375, height: 667 });
    
    // 验证移动端菜单按钮显示
    const menuButton = page.locator('button').filter({ hasText: /M4 6h16M4 12h16M4 18h16/ });
    await expect(menuButton).toBeVisible();
    
    // 点击打开菜单
    await menuButton.click();
    
    // 验证菜单项显示
    const mobileNav = page.locator('.md\\:hidden .flex-col');
    await expect(mobileNav).toBeVisible();
    
    // 验证移动端导航链接
    const navLinks = ['Features', 'Showcase', 'Reviews', 'FAQ'];
    for (const link of navLinks) {
      await expect(mobileNav.locator(`button:has-text("${link}")`)).toBeVisible();
    }
    
    // 点击关闭菜单
    await menuButton.click();
    await expect(mobileNav).not.toBeVisible();
  });

  test('Footer导航链接', async ({ page }) => {
    // 滚动到页面底部
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // 验证Footer显示
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // 验证快速链接
    const quickLinks = ['Home', 'Features', 'Showcase', 'Reviews', 'FAQ', 'About'];
    for (const link of quickLinks) {
      await expect(footer.locator(`text=${link}`)).toBeVisible();
    }
    
    // 验证支持链接
    const supportLinks = ['Contact Us', 'Pricing', 'Privacy Policy', 'Terms of Service'];
    for (const link of supportLinks) {
      await expect(footer.locator(`text=${link}`)).toBeVisible();
    }
    
    // 验证社交媒体链接
    const socialLinks = footer.locator('a[href*="youtube.com"], a[href*="twitter.com"], a[href*="tiktok.com"]');
    await expect(socialLinks).toHaveCount(3);
  });
});
```

### 3. 响应式设计测试 (responsive.spec.ts)

```typescript
import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'Large Desktop', width: 2560, height: 1440 }
];

test.describe('响应式设计测试', () => {
  for (const viewport of viewports) {
    test(`${viewport.name} 视口布局测试`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      
      // 验证页面基本元素可见
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('text=Start Creating Now')).toBeVisible();
      
      // 验证导航适配
      if (viewport.width < 768) {
        // 移动端应显示汉堡菜单
        await expect(page.locator('button').filter({ hasText: /M4 6h16/ })).toBeVisible();
        await expect(page.locator('.hidden.md\\:flex')).not.toBeVisible();
      } else {
        // 桌面端应显示完整导航
        await expect(page.locator('.hidden.md\\:flex')).toBeVisible();
      }
      
      // 验证网格布局适配
      await page.locator('#features').scrollIntoViewIfNeeded();
      const featureGrid = page.locator('#features .grid');
      
      if (viewport.width < 768) {
        await expect(featureGrid).toHaveClass(/grid-cols-1/);
      } else if (viewport.width < 1024) {
        await expect(featureGrid).toHaveClass(/md:grid-cols-2/);
      } else {
        await expect(featureGrid).toHaveClass(/lg:grid-cols-3/);
      }
    });
  }

  test('触摸设备交互测试', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 模拟触摸滚动
    await page.touchscreen.tap(200, 300);
    await page.evaluate(() => {
      window.scrollBy(0, 500);
    });
    
    // 验证滚动后的状态
    await expect(page.locator('header')).toHaveClass(/bg-gray-900/);
  });

  test('横屏模式测试', async ({ page }) => {
    await page.setViewportSize({ width: 667, height: 375 });
    await page.goto('/');
    
    // 验证横屏模式下的布局
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.container')).toBeVisible();
  });
});
```

### 4. 性能测试 (performance/lighthouse.spec.ts)

```typescript
import { test, expect } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

test.describe('Lighthouse 性能测试', () => {
  test('首页性能指标', async ({ page }) => {
    await page.goto('/');
    
    await playAudit({
      page,
      thresholds: {
        performance: 85,
        accessibility: 90,
        'best-practices': 85,
        seo: 90,
        pwa: 50
      },
      port: 9222
    });
  });

  test('页面加载时间测试', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    
    // 等待页面完全加载
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // 页面应在3秒内加载完成
    expect(loadTime).toBeLessThan(3000);
    
    // 验证关键元素已加载
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Start Creating Now')).toBeVisible();
  });

  test('图片加载优化测试', async ({ page }) => {
    await page.goto('/');
    
    // 检查图片懒加载
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      
      // 验证图片有alt属性
      await expect(img).toHaveAttribute('alt', /.+/);
      
      // 验证图片格式优化（WebP）
      const src = await img.getAttribute('src');
      if (src && src.includes('/images/')) {
        expect(src).toMatch(/\.(webp|jpg|png)$/i);
      }
    }
  });

  test('CSS和JS资源优化', async ({ page }) => {
    const responses: any[] = [];
    
    page.on('response', response => {
      if (response.url().includes('.css') || response.url().includes('.js')) {
        responses.push({
          url: response.url(),
          status: response.status(),
          headers: response.headers()
        });
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // 验证资源压缩
    for (const response of responses) {
      expect(response.status).toBe(200);
      
      // 验证Gzip压缩
      if (response.headers['content-encoding']) {
        expect(response.headers['content-encoding']).toMatch(/gzip|br/);
      }
    }
  });
});
```

### 5. SEO测试 (seo/meta-tags.spec.ts)

```typescript
import { test, expect } from '@playwright/test';

test.describe('SEO Meta标签测试', () => {
  test('基础Meta标签', async ({ page }) => {
    await page.goto('/');
    
    // 验证页面标题
    await expect(page).toHaveTitle(/ZOOM EARTH AI/);
    
    // 验证Meta描述
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.{120,}/);
    
    // 验证关键词
    const metaKeywords = page.locator('meta[name="keywords"]');
    await expect(metaKeywords).toHaveAttribute('content', /zoom.*earth.*ai/i);
    
    // 验证viewport
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
  });

  test('Open Graph标签', async ({ page }) => {
    await page.goto('/');
    
    // 验证OG标签
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /ZOOM EARTH AI/);
    
    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute('content', /.+/);
    
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute('content', /.+/);
    
    const ogUrl = page.locator('meta[property="og:url"]');
    await expect(ogUrl).toHaveAttribute('content', /https?:\/\/.+/);
  });

  test('Twitter Card标签', async ({ page }) => {
    await page.goto('/');
    
    const twitterCard = page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
    
    const twitterTitle = page.locator('meta[name="twitter:title"]');
    await expect(twitterTitle).toHaveAttribute('content', /ZOOM EARTH AI/);
  });

  test('结构化数据', async ({ page }) => {
    await page.goto('/');
    
    // 验证FAQ结构化数据
    const faqSchema = page.locator('script[type="application/ld+json"]');
    const schemaContent = await faqSchema.textContent();
    
    expect(schemaContent).toContain('"@context": "https://schema.org"');
    expect(schemaContent).toContain('"@type": "FAQPage"');
    
    // 验证JSON格式正确
    expect(() => JSON.parse(schemaContent || '')).not.toThrow();
  });
});
```

### 6. 可访问性测试 (seo/accessibility.spec.ts)

```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('可访问性测试', () => {
  test('Axe可访问性扫描', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('键盘导航测试', async ({ page }) => {
    await page.goto('/');
    
    // 测试Tab键导航
    await page.keyboard.press('Tab');
    
    // 验证焦点在第一个可聚焦元素上
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
    
    // 继续Tab导航
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      const currentFocus = page.locator(':focus');
      await expect(currentFocus).toBeVisible();
    }
  });

  test('ARIA标签测试', async ({ page }) => {
    await page.goto('/');
    
    // 验证按钮有适当的ARIA标签
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      
      // 按钮应该有文本内容或aria-label
      expect(text || ariaLabel).toBeTruthy();
    }
  });

  test('颜色对比度测试', async ({ page }) => {
    await page.goto('/');
    
    // 使用axe-core检查颜色对比度
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    
    const colorContrastViolations = accessibilityScanResults.violations.filter(
      violation => violation.id === 'color-contrast'
    );
    
    expect(colorContrastViolations).toHaveLength(0);
  });

  test('屏幕阅读器支持', async ({ page }) => {
    await page.goto('/');
    
    // 验证主要标题结构
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    
    const h2s = page.locator('h2');
    const h2Count = await h2s.count();
    expect(h2Count).toBeGreaterThan(0);
    
    // 验证图片alt属性
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute('alt', /.+/);
    }
  });
});
```

### 7. 表单功能测试 (forms.spec.ts)

```typescript
import { test, expect } from '@playwright/test';

test.describe('表单功能测试', () => {
  test('Newsletter订阅表单', async ({ page }) => {
    await page.goto('/');
    
    // 滚动到Newsletter区域
    await page.locator('text=Newsletter').scrollIntoViewIfNeeded();
    
    // 查找邮箱输入框
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toBeVisible();
    
    // 测试有效邮箱
    await emailInput.fill('test@example.com');
    
    // 查找提交按钮
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
    
    // 点击提交（注意：这里可能需要模拟API响应）
    await submitButton.click();
    
    // 验证提交后的状态（成功消息或加载状态）
    // 这里需要根据实际实现调整
  });

  test('表单验证测试', async ({ page }) => {
    await page.goto('/');
    
    const emailInput = page.locator('input[type="email"]');
    const submitButton = page.locator('button[type="submit"]');
    
    // 测试空邮箱提交
    await submitButton.click();
    
    // 验证HTML5验证
    const validationMessage = await emailInput.evaluate(
      (input: HTMLInputElement) => input.validationMessage
    );
    expect(validationMessage).toBeTruthy();
    
    // 测试无效邮箱格式
    await emailInput.fill('invalid-email');
    await submitButton.click();
    
    const invalidMessage = await emailInput.evaluate(
      (input: HTMLInputElement) => input.validationMessage
    );
    expect(invalidMessage).toBeTruthy();
  });

  test('联系表单测试', async ({ page }) => {
    await page.goto('/contact');
    
    // 验证联系表单存在
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageTextarea = page.locator('textarea[name="message"]');
    const submitButton = page.locator('button[type="submit"]');
    
    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(messageTextarea).toBeVisible();
    await expect(submitButton).toBeVisible();
    
    // 填写表单
    await nameInput.fill('Test User');
    await emailInput.fill('test@example.com');
    await messageTextarea.fill('This is a test message.');
    
    // 提交表单
    await submitButton.click();
    
    // 验证提交后的状态
    // 这里需要根据实际实现调整
  });
});
```

### 8. 视觉回归测试 (visual/homepage.spec.ts)

```typescript
import { test, expect } from '@playwright/test';

test.describe('视觉回归测试', () => {
  test('首页完整截图', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // 等待动画完成
    await page.waitForTimeout(2000);
    
    // 全页面截图
    await expect(page).toHaveScreenshot('homepage-full.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('Hero区域截图', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const heroSection = page.locator('section').first();
    await expect(heroSection).toHaveScreenshot('hero-section.png', {
      animations: 'disabled'
    });
  });

  test('Features区域截图', async ({ page }) => {
    await page.goto('/');
    await page.locator('#features').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    const featuresSection = page.locator('#features');
    await expect(featuresSection).toHaveScreenshot('features-section.png', {
      animations: 'disabled'
    });
  });

  test('移动端视觉测试', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('暗色主题测试', async ({ page }) => {
    await page.goto('/');
    
    // 验证暗色主题样式
    const body = page.locator('body');
    await expect(body).toHaveClass(/bg-gray-950/);
    
    await expect(page).toHaveScreenshot('homepage-dark-theme.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });
});
```

## 测试执行策略

### 1. 持续集成配置

```yaml
# .github/workflows/playwright.yml
name: Playwright Tests
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 18
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

### 2. 测试数据管理

```typescript
// fixtures/test-data.ts
export const testData = {
  validEmails: [
    'test@example.com',
    'user.name@domain.co.uk',
    'test+tag@gmail.com'
  ],
  invalidEmails: [
    'invalid-email',
    '@domain.com',
    'test@',
    'test..test@domain.com'
  ],
  sampleContent: {
    name: 'Test User',
    message: 'This is a test message for contact form validation.'
  },
  expectedFeatures: [
    'AI-Powered Processing',
    'Real-Time Rendering',
    'Advanced Satellite Integration',
    'Customizable Effects',
    'Multi-Platform Export',
    'Enterprise-Grade Security'
  ]
};
```

### 3. 页面对象模型

```typescript
// fixtures/page-objects.ts
export class HomePage {
  constructor(private page: any) {}

  async goto() {
    await this.page.goto('/');
  }

  async clickStartCreating() {
    await this.page.locator('text=Start Creating Now').click();
  }

  async scrollToSection(sectionId: string) {
    await this.page.locator(`#${sectionId}`).scrollIntoViewIfNeeded();
  }

  async toggleFAQ(index: number) {
    const faqItems = this.page.locator('#faq .bg-gray-800');
    await faqItems.nth(index).locator('button').click();
  }

  async subscribeNewsletter(email: string) {
    await this.page.locator('input[type="email"]').fill(email);
    await this.page.locator('button[type="submit"]').click();
  }
}

export class NavigationComponent {
  constructor(private page: any) {}

  async clickNavLink(linkText: string) {
    await this.page.locator(`button:has-text("${linkText}")`).click();
  }

  async toggleMobileMenu() {
    await this.page.locator('button').filter({ hasText: /M4 6h16/ }).click();
  }

  async verifyActiveSection(sectionName: string) {
    const activeLink = this.page.locator(`button:has-text("${sectionName}")`).first();
    await expect(activeLink).toHaveClass(/text-blue-400/);
  }
}
```

## 测试报告和监控

### 1. 自定义报告器

```typescript
// utils/custom-reporter.ts
import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';

class CustomReporter implements Reporter {
  onTestEnd(test: TestCase, result: TestResult) {
    if (result.status === 'failed') {
      console.log(`❌ ${test.title} failed`);
      console.log(`   Duration: ${result.duration}ms`);
      console.log(`   Error: ${result.error?.message}`);
    } else if (result.status === 'passed') {
      console.log(`✅ ${test.title} passed (${result.duration}ms)`);
    }
  }

  onEnd() {
    console.log('🎭 Playwright tests completed');
  }
}

export default CustomReporter;
```

### 2. 性能监控

```typescript
// utils/performance-monitor.ts
export class PerformanceMonitor {
  static async measurePageLoad(page: any, url: string) {
    const startTime = Date.now();
    
    await page.goto(url);
    await page.waitForLoadState('networkidle');
    
    const endTime = Date.now();
    const loadTime = endTime - startTime;
    
    // 收集性能指标
    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
      };
    });
    
    return {
      totalLoadTime: loadTime,
      ...metrics
    };
  }
}
```

## 实施计划

### 第一阶段：基础测试框架搭建（1-2周）
1. 安装和配置Playwright
2. 设置基本的测试目录结构
3. 实现核心页面对象模型
4. 编写基础的端到端测试

### 第二阶段：核心功能测试（2-3周）
1. 完成首页所有功能测试
2. 实现导航和响应式测试
3. 添加表单功能测试
4. 设置持续集成

### 第三阶段：高级测试功能（2-3周）
1. 实现性能和Lighthouse测试
2. 添加SEO和可访问性测试
3. 设置视觉回归测试
4. 完善测试报告

### 第四阶段：优化和维护（持续）
1. 优化测试执行速度
2. 添加更多边界情况测试
3. 定期更新测试用例
4. 监控和改进测试覆盖率

## 成功指标

1. **测试覆盖率**：达到90%以上的功能覆盖率
2. **性能指标**：Lighthouse分数保持在85分以上
3. **可访问性**：通过WCAG 2.1 AA级别标准
4. **跨浏览器兼容性**：支持Chrome、Firefox、Safari
5. **响应式设计**：在所有主要设备尺寸上正常工作
6. **测试执行时间**：完整测试套件在15分钟内完成

这个完整的Playwright测试方案将确保Earth Zoom AI网站的质量、性能和用户体验达到最高标准。