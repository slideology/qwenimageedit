import { test, expect } from '@playwright/test';
import { HomePage, NavigationComponent, FooterComponent } from '../fixtures/page-objects';
import { testData } from '../fixtures/test-data';

test.describe('导航功能测试', () => {
  let homePage: HomePage;
  let navigation: NavigationComponent;
  let footer: FooterComponent;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    navigation = new NavigationComponent(page);
    footer = new FooterComponent(page);
    await homePage.goto();
  });

  test('Header导航基本功能', async ({ page }) => {
    // 验证Logo和品牌名称
    await expect(navigation.logo).toBeVisible();
    await expect(navigation.logoText).toBeVisible();
    
    // 验证导航链接
    for (const link of testData.navigationLinks) {
      await expect(page.locator(`button:has-text("${link}")`)).toBeVisible();
    }
    
    // 验证Try Now按钮
    await expect(navigation.tryNowButton).toBeVisible();
    await expect(navigation.tryNowButton).toHaveAttribute('href', /pollo\.ai/);
    await expect(navigation.tryNowButton).toHaveAttribute('target', '_blank');
  });

  test('锚点导航功能', async ({ page }) => {
    // 测试Features导航
    await navigation.clickNavLink('Features');
    await expect(page.locator('#features')).toBeInViewport();
    
    // 测试Showcase导航
    await navigation.clickNavLink('Showcase');
    await expect(page.locator('#showcase')).toBeInViewport();
    
    // 测试Reviews导航
    await navigation.clickNavLink('Reviews');
    await expect(page.locator('#reviews')).toBeInViewport();
    
    // 测试FAQ导航
    await navigation.clickNavLink('FAQ');
    await expect(page.locator('#faq')).toBeInViewport();
  });

  test('滚动时Header状态变化', async ({ page }) => {
    // 初始状态Header应该是透明的
    await navigation.verifyHeaderBackground(false);
    
    // 滚动页面
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(500);
    
    // Header应该变为有背景
    await navigation.verifyHeaderBackground(true);
    
    // 滚动回顶部
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    
    // Header应该恢复透明
    await navigation.verifyHeaderBackground(false);
  });

  test('导航链接活跃状态', async ({ page }) => {
    // 测试各个导航链接的活跃状态
    for (const link of testData.navigationLinks) {
      await navigation.clickNavLink(link);
      
      // 验证对应区域在视口中
      const sectionId = link.toLowerCase();
      await expect(page.locator(`#${sectionId}`)).toBeInViewport();
      
      // 可以在这里添加活跃状态的样式验证
      // await navigation.verifyActiveSection(link);
    }
  });

  test('Logo点击返回顶部', async ({ page }) => {
    // 先滚动到页面底部
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // 点击Logo
    await navigation.logo.click();
    await page.waitForTimeout(1000);
    
    // 验证回到顶部
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });
});

test.describe('移动端导航测试', () => {
  test.beforeEach(async ({ page }) => {
    // 设置移动端视口
    await page.setViewportSize(testData.viewports.mobile);
  });

  test('移动端菜单基本功能', async ({ page }) => {
    const homePage = new HomePage(page);
    const navigation = new NavigationComponent(page);
    
    await homePage.goto();
    
    // 验证移动端菜单按钮显示
    await navigation.verifyMobileNavigation();
    
    // 验证桌面端导航隐藏
    await expect(page.locator('.hidden.md\\:flex')).not.toBeVisible();
  });

  test('移动端菜单展开收起', async ({ page }) => {
    const homePage = new HomePage(page);
    const navigation = new NavigationComponent(page);
    
    await homePage.goto();
    
    // 初始状态菜单应该是收起的
    await expect(navigation.mobileNav).not.toBeVisible();
    
    // 点击打开菜单
    await navigation.toggleMobileMenu();
    await expect(navigation.mobileNav).toBeVisible();
    
    // 验证菜单项显示
    for (const link of testData.navigationLinks) {
      await expect(navigation.mobileNav.locator(`button:has-text("${link}")`)).toBeVisible();
    }
    
    // 点击关闭菜单
    await navigation.toggleMobileMenu();
    await expect(navigation.mobileNav).not.toBeVisible();
  });

  test('移动端导航链接功能', async ({ page }) => {
    const homePage = new HomePage(page);
    const navigation = new NavigationComponent(page);
    
    await homePage.goto();
    
    // 打开移动端菜单
    await navigation.toggleMobileMenu();
    
    // 测试移动端导航链接
    await navigation.mobileNav.locator('button:has-text("Features")').click();
    
    // 验证导航到对应区域
    await expect(page.locator('#features')).toBeInViewport();
    
    // 验证菜单自动关闭（如果有这个功能）
    // await expect(navigation.mobileNav).not.toBeVisible();
  });

  test('移动端触摸交互', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    
    // 测试触摸滚动
    await page.touchscreen.tap(200, 300);
    
    // 模拟向上滑动
    await page.evaluate(() => {
      window.scrollBy(0, 500);
    });
    
    await page.waitForTimeout(500);
    
    // 验证滚动后的Header状态
    const navigation = new NavigationComponent(page);
    await navigation.verifyHeaderBackground(true);
  });
});

test.describe('Footer导航测试', () => {
  let footer: FooterComponent;

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    footer = new FooterComponent(page);
    await homePage.goto();
  });

  test('Footer基本内容验证', async ({ page }) => {
    await footer.verifyFooterContent();
  });

  test('Footer快速链接', async ({ page }) => {
    await footer.scrollToFooter();
    await footer.verifyQuickLinks(testData.footerLinks.quickLinks);
  });

  test('Footer支持链接', async ({ page }) => {
    await footer.scrollToFooter();
    await footer.verifySupportLinks(testData.footerLinks.supportLinks);
  });

  test('Footer社交媒体链接', async ({ page }) => {
    await footer.scrollToFooter();
    await footer.verifySocialLinks();
    
    // 验证社交媒体链接属性
    const socialLinks = page.locator('footer a[href*="youtube.com"], footer a[href*="twitter.com"], footer a[href*="tiktok.com"]');
    
    for (let i = 0; i < await socialLinks.count(); i++) {
      const link = socialLinks.nth(i);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', /noopener/);
    }
  });

  test('Footer版权信息', async ({ page }) => {
    await footer.scrollToFooter();
    
    // 验证当前年份显示
    const currentYear = new Date().getFullYear();
    await expect(page.locator(`text=© ${currentYear}`)).toBeVisible();
    
    // 验证公司名称
    await expect(page.locator('text=ZOOM EARTH AI')).toBeVisible();
  });

  test('Footer链接导航功能', async ({ page }) => {
    await footer.scrollToFooter();
    
    // 测试Footer中的快速链接
    const homeLink = page.locator('footer').locator('text=Home');
    await homeLink.click();
    
    // 验证回到顶部
    await page.waitForTimeout(1000);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });
});

test.describe('跨设备导航一致性测试', () => {
  const viewports = [
    { name: 'Mobile', ...testData.viewports.mobile },
    { name: 'Tablet', ...testData.viewports.tablet },
    { name: 'Desktop', ...testData.viewports.desktop }
  ];

  for (const viewport of viewports) {
    test(`${viewport.name} 导航一致性`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      
      await homePage.goto();
      
      // 验证Logo始终可见
      await expect(navigation.logo).toBeVisible();
      await expect(navigation.logoText).toBeVisible();
      
      // 验证Try Now按钮始终可见
      await expect(navigation.tryNowButton).toBeVisible();
      
      if (viewport.width < 768) {
        // 移动端应显示汉堡菜单
        await expect(navigation.mobileMenuButton).toBeVisible();
      } else {
        // 桌面端应显示完整导航
        for (const link of testData.navigationLinks) {
          await expect(page.locator(`nav button:has-text("${link}")`)).toBeVisible();
        }
      }
    });
  }
});

test.describe('导航性能测试', () => {
  test('导航响应速度', async ({ page }) => {
    const homePage = new HomePage(page);
    const navigation = new NavigationComponent(page);
    
    await homePage.goto();
    
    // 测试导航点击响应时间
    const startTime = Date.now();
    await navigation.clickNavLink('Features');
    const responseTime = Date.now() - startTime;
    
    // 导航应该在合理时间内响应
    expect(responseTime).toBeLessThan(1000);
    
    // 验证滚动到位
    await expect(page.locator('#features')).toBeInViewport();
  });

  test('滚动性能', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    
    // 测试快速滚动性能
    const startTime = Date.now();
    
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollBy(0, 200));
      await page.waitForTimeout(50);
    }
    
    const scrollTime = Date.now() - startTime;
    
    // 滚动应该流畅
    expect(scrollTime).toBeLessThan(1000);
  });

  test('Header状态切换性能', async ({ page }) => {
    const homePage = new HomePage(page);
    const navigation = new NavigationComponent(page);
    
    await homePage.goto();
    
    // 测试Header背景切换性能
    const iterations = 10;
    const startTime = Date.now();
    
    for (let i = 0; i < iterations; i++) {
      await page.evaluate(() => window.scrollTo(0, 100));
      await page.waitForTimeout(10);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(10);
    }
    
    const totalTime = Date.now() - startTime;
    const averageTime = totalTime / iterations;
    
    // 每次状态切换应该很快
    expect(averageTime).toBeLessThan(100);
  });
});

test.describe('导航错误处理', () => {
  test('无效锚点处理', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    
    // 尝试导航到不存在的锚点
    await page.evaluate(() => {
      const link = document.createElement('a');
      link.href = '#nonexistent';
      link.click();
    });
    
    // 页面应该保持稳定，不应该出错
    await page.waitForTimeout(500);
    
    // 验证页面仍然正常
    const navigation = new NavigationComponent(page);
    await expect(navigation.logo).toBeVisible();
  });

  test('JavaScript禁用时的导航', async ({ browser }) => {
    // 创建禁用JavaScript的上下文
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    
    const homePage = new HomePage(page);
    await homePage.goto();
    
    // 验证基本导航元素仍然可见
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('img[alt="ZOOM EARTH AI Logo"]')).toBeVisible();
    
    await context.close();
  });

  test('网络中断时的导航', async ({ browser }) => {
    // 创建离线模式的上下文
    const context = await browser.newContext();
    const page = await context.newPage();
    
    const homePage = new HomePage(page);
    await homePage.goto();
    
    // 模拟网络中断
    await context.setOffline(true);
    
    // 尝试导航（应该仍然工作，因为是锚点导航）
    const navigation = new NavigationComponent(page);
    await navigation.clickNavLink('Features');
    
    // 验证导航仍然有效
    await expect(page.locator('#features')).toBeInViewport();
    
    // 恢复网络
    await context.setOffline(false);
    await context.close();
  });
});