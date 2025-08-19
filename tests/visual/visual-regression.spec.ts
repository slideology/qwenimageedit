import { test, expect } from '@playwright/test';
import { HomePage, NavigationComponent } from '../fixtures/page-objects';
import { testData } from '../fixtures/test-data';

test.describe('视觉回归测试', () => {
  test.describe('页面截图对比', () => {
    test('首页完整截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 等待页面完全加载
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // 隐藏可能变化的动态内容
      await page.addStyleTag({
        content: `
          .dynamic-content,
          [data-testid="current-time"],
          .loading-spinner {
            visibility: hidden !important;
          }
        `
      });
      
      // 全页面截图
      await expect(page).toHaveScreenshot('homepage-full.png', {
        fullPage: true,
        animations: 'disabled'
      });
    });
    
    test('首页Hero区域截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
      
      // Hero区域截图
      const heroSection = page.locator('section').first();
      await expect(heroSection).toHaveScreenshot('hero-section.png', {
        animations: 'disabled'
      });
    });
    
    test('导航栏截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      const navigation = new NavigationComponent(page);
      
      // 导航栏截图
      await expect(navigation.header).toHaveScreenshot('navigation-header.png', {
        animations: 'disabled'
      });
    });
    
    test('Features区域截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 滚动到Features区域
      const featuresSection = page.locator('#features');
      await featuresSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      // Features区域截图
      await expect(featuresSection).toHaveScreenshot('features-section.png', {
        animations: 'disabled'
      });
    });
    
    test('FAQ区域截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 滚动到FAQ区域
      const faqSection = page.locator('#faq');
      await faqSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      // FAQ区域截图
      await expect(faqSection).toHaveScreenshot('faq-section.png', {
        animations: 'disabled'
      });
    });
    
    test('Footer截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 滚动到页面底部
      await page.locator('footer').scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      // Footer截图
      await expect(page.locator('footer')).toHaveScreenshot('footer-section.png', {
        animations: 'disabled'
      });
    });
  });
  
  test.describe('响应式截图对比', () => {
    test('移动端首页截图', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // 移动端全页面截图
      await expect(page).toHaveScreenshot('homepage-mobile.png', {
        fullPage: true,
        animations: 'disabled'
      });
    });
    
    test('平板端首页截图', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // 平板端全页面截图
      await expect(page).toHaveScreenshot('homepage-tablet.png', {
        fullPage: true,
        animations: 'disabled'
      });
    });
    
    test('桌面端首页截图', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // 桌面端全页面截图
      await expect(page).toHaveScreenshot('homepage-desktop.png', {
        fullPage: true,
        animations: 'disabled'
      });
    });
    
    test('移动端导航菜单截图', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      const navigation = new NavigationComponent(page);
      
      // 打开移动菜单
      await navigation.toggleMobileMenu();
      await page.waitForTimeout(500);
      
      // 移动菜单截图
      await expect(page).toHaveScreenshot('mobile-menu-open.png', {
        animations: 'disabled'
      });
    });
  });
  
  test.describe('交互状态截图', () => {
    test('按钮悬停状态截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 找到主要按钮
      const primaryButton = page.locator('button').first();
      
      // 悬停状态
      await primaryButton.hover();
      await page.waitForTimeout(300);
      
      // 悬停状态截图
      await expect(primaryButton).toHaveScreenshot('button-hover-state.png', {
        animations: 'disabled'
      });
    });
    
    test('链接悬停状态截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 找到导航链接
      const navLink = page.locator('nav a').first();
      
      // 悬停状态
      await navLink.hover();
      await page.waitForTimeout(300);
      
      // 悬停状态截图
      await expect(navLink).toHaveScreenshot('link-hover-state.png', {
        animations: 'disabled'
      });
    });
    
    test('表单焦点状态截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 找到邮箱输入框
      const emailInput = page.locator('input[type="email"]').first();
      
      if (await emailInput.count() > 0) {
        // 聚焦状态
        await emailInput.focus();
        await page.waitForTimeout(300);
        
        // 焦点状态截图
        await expect(emailInput).toHaveScreenshot('input-focus-state.png', {
          animations: 'disabled'
        });
      }
    });
    
    test('FAQ展开状态截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 滚动到FAQ区域
      const faqSection = page.locator('#faq');
      await faqSection.scrollIntoViewIfNeeded();
      
      // 找到第一个FAQ项目
      const firstFaqItem = page.locator('#faq .bg-gray-800').first();
      
      if (await firstFaqItem.count() > 0) {
        // 点击展开
        await firstFaqItem.locator('button').click();
        await page.waitForTimeout(500);
        
        // 展开状态截图
        await expect(faqSection).toHaveScreenshot('faq-expanded-state.png', {
          animations: 'disabled'
        });
      }
    });
  });
  
  test.describe('主题和样式变化', () => {
    test('深色主题截图', async ({ page }) => {
      // 模拟深色主题偏好
      await page.emulateMedia({ colorScheme: 'dark' });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // 深色主题截图
      await expect(page).toHaveScreenshot('homepage-dark-theme.png', {
        fullPage: true,
        animations: 'disabled'
      });
    });
    
    test('浅色主题截图', async ({ page }) => {
      // 模拟浅色主题偏好
      await page.emulateMedia({ colorScheme: 'light' });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // 浅色主题截图
      await expect(page).toHaveScreenshot('homepage-light-theme.png', {
        fullPage: true,
        animations: 'disabled'
      });
    });
    
    test('高对比度模式截图', async ({ page }) => {
      // 模拟高对比度偏好
      await page.emulateMedia({ forcedColors: 'active' });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // 高对比度模式截图
      await expect(page).toHaveScreenshot('homepage-high-contrast.png', {
        fullPage: true,
        animations: 'disabled'
      });
    });
  });
  
  test.describe('元素级别截图', () => {
    test('Logo截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // Logo截图
      const logo = page.locator('[data-testid="logo"], .logo, img[alt*="logo" i]').first();
      
      if (await logo.count() > 0) {
        await expect(logo).toHaveScreenshot('logo.png', {
          animations: 'disabled'
        });
      }
    });
    
    test('特色标签截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 特色标签截图
      if (await homePage.featureTags.count() > 0) {
        await expect(homePage.featureTags.first()).toHaveScreenshot('feature-tags.png', {
          animations: 'disabled'
        });
      }
    });
    
    test('用户评价卡片截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 滚动到评价区域
      const testimonialsSection = page.locator('#reviews');
      await testimonialsSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      // 用户评价卡片截图
      const testimonialCard = page.locator('#reviews .grid > div').first();
      
      if (await testimonialCard.count() > 0) {
        await expect(testimonialCard).toHaveScreenshot('testimonial-card.png', {
          animations: 'disabled'
        });
      }
    });
    
    test('Newsletter订阅框截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 滚动到Newsletter区域
      const newsletterSection = page.locator('section').last();
      await newsletterSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      // Newsletter订阅框截图
      await expect(newsletterSection).toHaveScreenshot('newsletter-section.png', {
        animations: 'disabled'
      });
    });
  });
  
  test.describe('错误状态截图', () => {
    test('表单验证错误截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 找到邮箱输入框
      const emailInput = page.locator('input[type="email"]').first();
      
      if (await emailInput.count() > 0) {
        // 输入无效邮箱
        await emailInput.fill('invalid-email');
        
        // 查找提交按钮
        const submitButton = page.locator('button[type="submit"]').first();
        if (await submitButton.count() > 0) {
          await submitButton.click();
          await page.waitForTimeout(1000);
          
          // 错误状态截图
          const newsletterSection = page.locator('section').last();
          await expect(newsletterSection).toHaveScreenshot('form-validation-error.png', {
            animations: 'disabled'
          });
        }
      }
    });
    
    test('网络错误状态截图', async ({ page }) => {
      // 模拟网络错误
      await page.route('**/*', route => {
        if (route.request().url().includes('api')) {
          route.abort();
        } else {
          route.continue();
        }
      });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // 网络错误状态截图
      await expect(page).toHaveScreenshot('network-error-state.png', {
        fullPage: true,
        animations: 'disabled'
      });
    });
  });
  
  test.describe('动画和过渡效果', () => {
    test('页面加载动画截图', async ({ page }) => {
      const homePage = new HomePage(page);
      
      // 开始导航但不等待完成
      const navigationPromise = homePage.goto();
      
      // 等待短时间捕获加载状态
      await page.waitForTimeout(500);
      
      // 加载状态截图
      await expect(page).toHaveScreenshot('page-loading-state.png', {
        animations: 'allow'
      });
      
      // 等待导航完成
      await navigationPromise;
    });
    
    test('滚动动画截图', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      
      // 滚动到中间位置
      await page.evaluate(() => {
        window.scrollTo(0, window.innerHeight);
      });
      
      await page.waitForTimeout(1000);
      
      // 滚动状态截图
      await expect(page).toHaveScreenshot('scroll-animation-state.png', {
        animations: 'allow'
      });
    });
  });
  
  test.describe('跨浏览器视觉对比', () => {
    test('Chromium渲染截图', async ({ page, browserName }) => {
      test.skip(browserName !== 'chromium', '仅在Chromium中运行');
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // Chromium渲染截图
      await expect(page).toHaveScreenshot('homepage-chromium.png', {
        fullPage: true,
        animations: 'disabled'
      });
    });
    
    test('Firefox渲染截图', async ({ page, browserName }) => {
      test.skip(browserName !== 'firefox', '仅在Firefox中运行');
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // Firefox渲染截图
      await expect(page).toHaveScreenshot('homepage-firefox.png', {
        fullPage: true,
        animations: 'disabled'
      });
    });
    
    test('WebKit渲染截图', async ({ page, browserName }) => {
      test.skip(browserName !== 'webkit', '仅在WebKit中运行');
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // WebKit渲染截图
      await expect(page).toHaveScreenshot('homepage-webkit.png', {
        fullPage: true,
        animations: 'disabled'
      });
    });
  });
});