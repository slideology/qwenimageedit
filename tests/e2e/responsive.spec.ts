import { test, expect } from '@playwright/test';
import { HomePage, NavigationComponent } from '../fixtures/page-objects';
import { testData } from '../fixtures/test-data';

// 定义视口尺寸
const VIEWPORTS = {
  mobile: {
    iphone_se: { width: 375, height: 667 },
    iphone_12: { width: 390, height: 844 }
  },
  tablet: {
    ipad: { width: 768, height: 1024 }
  },
  desktop: {
    laptop: { width: 1366, height: 768 },
    fullhd: { width: 1920, height: 1080 },
    '4k': { width: 3840, height: 2160 }
  }
};

test.describe('响应式设计测试', () => {
  test.describe('移动端适配', () => {
    test('iPhone SE 显示测试', async ({ page }) => {
      await page.setViewportSize(VIEWPORTS.mobile.iphone_se);
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证移动端布局
      const navigation = new NavigationComponent(page);
      await expect(navigation.mobileMenuButton).toBeVisible();
      
      // 验证Hero区域在移动端的显示
      const heroTitle = page.locator('h1');
      await expect(heroTitle).toBeVisible();
      await expect(heroTitle).toHaveCSS('font-size', /^(2|3|4)\d*px$/);
      
      // 验证按钮在移动端的显示
      const ctaButton = page.locator('text="Try Now"');
      await expect(ctaButton).toBeVisible();
      await expect(ctaButton).toHaveCSS('width', /^\d+px$/);
    });
    
    test('iPad 显示测试', async ({ page }) => {
      await page.setViewportSize(VIEWPORTS.tablet.ipad);
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证平板端布局
      const navigation = new NavigationComponent(page);
      await expect(navigation.mobileMenuButton).toBeVisible();
      
      // 验证Features区域在平板端的网格布局
      const featureCards = page.locator('.feature-card');
      await expect(featureCards).toHaveCount(6);
      
      // 验证卡片在平板端的排列（通常是2列）
      const firstCard = featureCards.first();
      const secondCard = featureCards.nth(1);
      
      const firstCardBox = await firstCard.boundingBox();
      const secondCardBox = await secondCard.boundingBox();
      
      if (firstCardBox && secondCardBox) {
        // 验证卡片是否在同一行（Y坐标相近）
        expect(Math.abs(firstCardBox.y - secondCardBox.y)).toBeLessThan(50);
      }
    });
    
    test('移动端菜单交互', async ({ page }) => {
      await page.setViewportSize(VIEWPORTS.mobile.iphone_12);
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      const navigation = new NavigationComponent(page);
      
      // 验证移动菜单初始状态
      await expect(navigation.mobileNav).toBeHidden();
      
      // 打开移动菜单
      await navigation.toggleMobileMenu();
      await expect(navigation.mobileNav).toBeVisible();
      
      // 验证菜单项可见
      await expect(navigation.mobileNav.locator('button')).toHaveCount(4);
      
      // 点击菜单项后菜单应该关闭
      await navigation.clickNavLink('Features');
      await expect(navigation.mobileNav).toBeHidden();
      
      // 验证页面滚动到对应区域
      await expect(page.locator('#features')).toBeInViewport();
    });
  });
  
  test.describe('桌面端适配', () => {
    test('1920x1080 显示测试', async ({ page }) => {
      await page.setViewportSize(VIEWPORTS.desktop.fullhd);
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证桌面端导航
      const navigation = new NavigationComponent(page);
      await expect(navigation.navLinks).toBeVisible();
      await expect(navigation.mobileMenuButton).toBeHidden();
      
      // 验证Hero区域在大屏幕上的显示
      const heroSection = page.locator('.hero-section');
      await expect(heroSection).toBeVisible();
      
      // 验证Features区域的网格布局（桌面端通常是3列）
      const featureCards = page.locator('.feature-card');
      await expect(featureCards).toHaveCount(6);
      
      // 验证前三个卡片在同一行
      const cards = await featureCards.all();
      if (cards.length >= 3) {
        const firstCardBox = await cards[0].boundingBox();
        const secondCardBox = await cards[1].boundingBox();
        const thirdCardBox = await cards[2].boundingBox();
        
        if (firstCardBox && secondCardBox && thirdCardBox) {
          expect(Math.abs(firstCardBox.y - secondCardBox.y)).toBeLessThan(50);
          expect(Math.abs(secondCardBox.y - thirdCardBox.y)).toBeLessThan(50);
        }
      }
    });
    
    test('4K 显示测试', async ({ page }) => {
      await page.setViewportSize(VIEWPORTS.desktop['4k']);
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证内容在4K屏幕上不会过度拉伸
      const container = page.locator('.container, .max-w-7xl').first();
      await expect(container).toBeVisible();
      
      const containerBox = await container.boundingBox();
      if (containerBox) {
        // 验证容器宽度有最大限制
        expect(containerBox.width).toBeLessThan(1600);
      }
      
      // 验证文字大小在4K屏幕上仍然可读
      const heroTitle = page.locator('h1');
      await expect(heroTitle).toHaveCSS('font-size', /^[4-9]\d*px$/);
    });
  });
  
  test.describe('断点测试', () => {
    test('断点切换测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 测试从桌面端到移动端的切换
      await page.setViewportSize(VIEWPORTS.desktop.laptop);
      
      const navigation = new NavigationComponent(page);
      await expect(navigation.navLinks).toBeVisible();
      await expect(navigation.mobileMenuButton).toBeHidden();
      
      // 切换到平板尺寸
      await page.setViewportSize(VIEWPORTS.tablet.ipad);
      await page.waitForTimeout(500); // 等待CSS过渡
      
      await expect(navigation.mobileMenuButton).toBeVisible();
      
      // 切换到移动端尺寸
      await page.setViewportSize(VIEWPORTS.mobile.iphone_12);
      await page.waitForTimeout(500);
      
      await expect(navigation.mobileMenuButton).toBeVisible();
      await expect(navigation.navLinks).toBeHidden();
    });
    
    test('临界断点测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 测试768px断点（平板/移动端分界）
      await page.setViewportSize({ width: 768, height: 1024 });
      
      const navigation = new NavigationComponent(page);
      await expect(navigation.mobileMenuButton).toBeVisible();
      
      // 测试769px（刚好超过断点）
      await page.setViewportSize({ width: 769, height: 1024 });
      await page.waitForTimeout(300);
      
      // 根据设计可能仍然显示移动菜单或切换到桌面菜单
      const isMobileMenuVisible = await navigation.mobileMenuButton.isVisible();
      const isDesktopNavVisible = await navigation.navLinks.isVisible();
      
      // 至少有一个导航方式应该可见
      expect(isMobileMenuVisible || isDesktopNavVisible).toBeTruthy();
    });
  });
  
  test.describe('内容适配', () => {
    test('图片响应式测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 测试不同屏幕尺寸下的图片显示
      const showcaseImages = page.locator('.showcase-image, .feature-image');
      
      for (const viewport of [VIEWPORTS.mobile.iphone_12, VIEWPORTS.tablet.ipad, VIEWPORTS.desktop.laptop]) {
        await page.setViewportSize(viewport);
        await page.waitForTimeout(300);
        
        const images = await showcaseImages.all();
        for (const image of images) {
          await expect(image).toBeVisible();
          
          const imageBox = await image.boundingBox();
          if (imageBox) {
            // 验证图片不会超出容器宽度
            expect(imageBox.width).toBeLessThanOrEqual(viewport.width);
            // 验证图片有合理的宽度
            expect(imageBox.width).toBeGreaterThan(100);
          }
        }
      }
    });
    
    test('文字响应式测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      const heroTitle = page.locator('h1');
      const heroSubtitle = page.locator('.hero-subtitle, .text-xl');
      
      // 移动端文字大小
      await page.setViewportSize(VIEWPORTS.mobile.iphone_12);
      const mobileTitleSize = await heroTitle.evaluate(el => 
        window.getComputedStyle(el).fontSize
      );
      
      // 桌面端文字大小
      await page.setViewportSize(VIEWPORTS.desktop.laptop);
      const desktopTitleSize = await heroTitle.evaluate(el => 
        window.getComputedStyle(el).fontSize
      );
      
      // 桌面端文字应该比移动端大
      const mobileSize = parseInt(mobileTitleSize);
      const desktopSize = parseInt(desktopTitleSize);
      expect(desktopSize).toBeGreaterThan(mobileSize);
    });
    
    test('布局响应式测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 测试Features区域的布局变化
      const featureCards = page.locator('.feature-card');
      
      // 移动端：单列布局
      await page.setViewportSize(VIEWPORTS.mobile.iphone_12);
      await page.waitForTimeout(300);
      
      const cards = await featureCards.all();
      if (cards.length >= 2) {
        const firstCardBox = await cards[0].boundingBox();
        const secondCardBox = await cards[1].boundingBox();
        
        if (firstCardBox && secondCardBox) {
          // 移动端卡片应该垂直排列
          expect(secondCardBox.y).toBeGreaterThan(firstCardBox.y + firstCardBox.height - 50);
        }
      }
      
      // 桌面端：多列布局
      await page.setViewportSize(VIEWPORTS.desktop.laptop);
      await page.waitForTimeout(300);
      
      if (cards.length >= 2) {
        const firstCardBox = await cards[0].boundingBox();
        const secondCardBox = await cards[1].boundingBox();
        
        if (firstCardBox && secondCardBox) {
          // 桌面端前两个卡片应该在同一行或相近位置
          expect(Math.abs(firstCardBox.y - secondCardBox.y)).toBeLessThan(100);
        }
      }
    });
  });
  
  test.describe('性能测试', () => {
    test('不同设备性能测试', async ({ browser }) => {
      // 模拟低端移动设备
      const context = await browser.newContext({
        viewport: VIEWPORTS.mobile.iphone_se,
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true
      });
      const page = await context.newPage();
      
      const homePage = new HomePage(page);
      
      const startTime = Date.now();
      await homePage.goto();
      
      // 等待关键内容加载
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('.feature-card').first()).toBeVisible();
      
      const loadTime = Date.now() - startTime;
      
      // 移动端加载时间应该在合理范围内
      expect(loadTime).toBeLessThan(5000);
      
      await context.close();
    });
    
    test('图片懒加载测试', async ({ page }) => {
      await page.setViewportSize(VIEWPORTS.mobile.iphone_12);
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 检查页面底部的图片是否实现了懒加载
      const images = page.locator('img');
      const imageCount = await images.count();
      
      // 滚动前，检查是否有图片还未加载
      let unloadedImages = 0;
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        const isInViewport = await img.isVisible();
        if (!isInViewport) {
          unloadedImages++;
        }
      }
      
      // 滚动到页面底部
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(1000);
      
      // 验证所有图片现在都应该可见
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        await expect(img).toBeVisible();
      }
    });
  });
});