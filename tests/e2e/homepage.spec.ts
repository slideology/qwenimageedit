import { test, expect } from '@playwright/test';
import { HomePage, NavigationComponent, FAQComponent } from '../fixtures/page-objects';
import { testData } from '../fixtures/test-data';

test.describe('首页核心功能测试', () => {
  let homePage: HomePage;
  let navigation: NavigationComponent;
  let faq: FAQComponent;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    navigation = new NavigationComponent(page);
    faq = new FAQComponent(page);
    await homePage.goto();
  });

  test('页面基本元素加载', async ({ page }) => {
    // 验证页面标题
    await expect(page).toHaveTitle(/ZOOM EARTH AI/);
    
    // 验证Hero区域
    await homePage.verifyHeroSection();
    
    // 验证导航
    await navigation.verifyNavigation();
  });

  test('Hero区域交互功能', async ({ page }) => {
    // 测试CTA按钮可见性
    await expect(homePage.startCreatingButton).toBeVisible();
    await expect(homePage.viewExamplesButton).toBeVisible();
    
    // 验证外部链接属性
    await expect(homePage.startCreatingButton).toHaveAttribute('href', /pollo\.ai/);
    await expect(homePage.startCreatingButton).toHaveAttribute('target', '_blank');
    
    // 验证滚动指示器
    await expect(homePage.scrollIndicator).toBeVisible();
    await expect(homePage.scrollIndicator).toHaveClass(/animate-bounce/);
  });

  test('特色标签显示', async ({ page }) => {
    const expectedTags = [
      '60-Second Processing',
      'AI-Powered',
      'Multi-Platform',
      'Viral Ready'
    ];
    
    await homePage.verifyFeatureTags(expectedTags);
  });

  test('功能展示区域内容', async ({ page }) => {
    // 测试Showcase区域
    await homePage.scrollToSection('showcase');
    
    // 验证标题
    await expect(page.locator('text=See It In Action')).toBeVisible();
    
    // 验证展示卡片
    const showcaseCards = await homePage.getShowcaseCards();
    await expect(showcaseCards).toHaveCount(3);
    
    // 验证图片加载
    const images = page.locator('#showcase img');
    await expect(images).toHaveCount(3);
    
    for (let i = 0; i < 3; i++) {
      await expect(images.nth(i)).toHaveAttribute('src', /.+/);
      await expect(images.nth(i)).toHaveAttribute('alt', /.+/);
    }
  });

  test('Features区域内容验证', async ({ page }) => {
    await homePage.scrollToSection('features');
    
    const featureCards = await homePage.getFeatureCards();
    await expect(featureCards).toHaveCount(6);
    
    // 验证预期功能
    for (const feature of testData.expectedFeatures) {
      await expect(page.locator(`text=${feature}`)).toBeVisible();
    }
  });

  test('用户评价区域显示', async ({ page }) => {
    await homePage.scrollToSection('reviews');
    
    // 验证标题
    await expect(page.locator('text=What Our Users Say')).toBeVisible();
    
    // 验证评价卡片
    const reviewCards = await homePage.getReviewCards();
    await expect(reviewCards).toHaveCount(6);
    
    // 验证用户头像
    const userAvatars = page.locator('#reviews .w-12.h-12');
    await expect(userAvatars).toHaveCount(6);
    
    // 验证评价内容
    for (const review of testData.reviewsData) {
      await expect(page.locator(`text=${review.name}`)).toBeVisible();
      await expect(page.locator(`text=${review.role}`)).toBeVisible();
    }
  });

  test('FAQ区域交互功能', async ({ page }) => {
    await faq.verifyFAQStructure();
    
    // 测试第一个FAQ的展开/收起
    await faq.verifyFAQInteraction(0);
    
    // 测试多个FAQ可以同时展开
    await faq.toggleFAQ(0);
    await faq.toggleFAQ(1);
    
    const firstAnswer = page.locator('#faq .bg-gray-800').nth(0).locator('.animate-fade-in');
    const secondAnswer = page.locator('#faq .bg-gray-800').nth(1).locator('.animate-fade-in');
    
    await expect(firstAnswer).toBeVisible();
    await expect(secondAnswer).toBeVisible();
  });

  test('FAQ结构化数据验证', async ({ page }) => {
    await faq.verifyStructuredData();
  });

  test('Newsletter订阅功能', async ({ page }) => {
    // 滚动到Newsletter区域
    await page.locator('text=Newsletter').scrollIntoViewIfNeeded();
    
    // 验证表单元素
    await expect(homePage.newsletterInput).toBeVisible();
    await expect(homePage.newsletterSubmitButton).toBeVisible();
    
    // 测试有效邮箱
    await homePage.subscribeNewsletter(testData.validEmails[0]);
    
    // 这里可以添加对提交后状态的验证
    // 例如成功消息、加载状态等
  });

  test('页面滚动行为', async ({ page }) => {
    // 测试平滑滚动到各个区域
    const sections = ['features', 'showcase', 'reviews', 'faq'];
    
    for (const section of sections) {
      await navigation.clickNavLink(section.charAt(0).toUpperCase() + section.slice(1));
      
      // 验证页面滚动到对应区域
      const sectionElement = page.locator(`#${section}`);
      await expect(sectionElement).toBeInViewport();
    }
  });

  test('外部链接验证', async ({ page }) => {
    // 验证主要CTA按钮链接
    await expect(homePage.startCreatingButton).toHaveAttribute('href', /pollo\.ai/);
    await expect(homePage.startCreatingButton).toHaveAttribute('target', '_blank');
    
    // 验证Try Now按钮
    await expect(navigation.tryNowButton).toBeVisible();
    
    // 可以添加更多外部链接的验证
  });

  test('页面性能基础检查', async ({ page }) => {
    const startTime = Date.now();
    await homePage.goto();
    const loadTime = Date.now() - startTime;
    
    // 页面应在合理时间内加载
    expect(loadTime).toBeLessThan(testData.performanceBenchmarks.maxLoadTime);
    
    // 验证关键元素已加载
    await expect(homePage.heroTitle).toBeVisible();
    await expect(homePage.startCreatingButton).toBeVisible();
  });

  test('图片加载和优化检查', async ({ page }) => {
    // 检查所有图片
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      
      // 验证图片有alt属性
      await expect(img).toHaveAttribute('alt', /.+/);
      
      // 验证图片有src属性
      await expect(img).toHaveAttribute('src', /.+/);
      
      // 检查图片是否加载成功
      const naturalWidth = await img.evaluate((img: HTMLImageElement) => img.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    }
  });
});

test.describe('首页错误处理', () => {
  test('网络错误处理', async ({ page }) => {
    // 模拟网络错误
    await page.route('**/*', route => route.abort());
    
    // 尝试访问页面
    const response = await page.goto('/', { waitUntil: 'domcontentloaded' }).catch(() => null);
    
    // 验证错误处理
    expect(response).toBeNull();
  });

  test('JavaScript错误监控', async ({ page }) => {
    const jsErrors: string[] = [];
    
    // 监听JavaScript错误
    page.on('pageerror', error => {
      jsErrors.push(error.message);
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // 验证没有JavaScript错误
    expect(jsErrors).toHaveLength(0);
  });

  test('控制台错误检查', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    // 监听控制台错误
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // 验证没有控制台错误（排除已知的第三方错误）
    const significantErrors = consoleErrors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('analytics') &&
      !error.includes('ads')
    );
    
    expect(significantErrors).toHaveLength(0);
  });
});