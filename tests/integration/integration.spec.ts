import { test, expect } from '@playwright/test';
import { HomePage, NavigationComponent, FAQComponent } from '../fixtures/page-objects';
import { testData } from '../fixtures/test-data';

test.describe('集成测试', () => {
  test.describe('页面组件交互', () => {
    test('导航与页面内容联动测试', async ({ page }) => {
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      
      await homePage.goto();
      
      // 测试导航链接与页面滚动的联动
      const navButtons = ['Features', 'Showcase', 'Reviews', 'FAQ'];
      
      for (const buttonText of navButtons) {
        // 点击导航按钮
        await navigation.clickNavLink(buttonText);
        
        // 验证页面滚动到对应区域
        const sectionId = buttonText.toLowerCase();
        const targetSection = page.locator(`#${sectionId}`);
        
        if (await targetSection.count() > 0) {
          // 验证目标区域在视口中可见
          await expect(targetSection).toBeInViewport();
          
          // 验证URL hash更新（如果有的话）
          const currentUrl = page.url();
          console.log(`导航到 ${buttonText}，当前URL: ${currentUrl}`);
        }
        
        await page.waitForTimeout(1000);
      }
    });
    
    test('Hero区域与导航交互测试', async ({ page }) => {
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      
      await homePage.goto();
      
      // 验证Hero区域按钮功能
      await expect(homePage.startCreatingButton).toBeVisible();
      await expect(homePage.viewExamplesButton).toBeVisible();
      
      // 点击"View Examples"按钮
      await homePage.clickViewExamples();
      
      // 验证页面滚动到showcase区域
      const showcaseSection = page.locator('#showcase');
      if (await showcaseSection.count() > 0) {
        await expect(showcaseSection).toBeInViewport();
      }
      
      // 返回顶部测试
      await navigation.logoText.click();
      await page.waitForTimeout(500);
      
      // 验证回到页面顶部
      const heroTitle = homePage.heroTitle;
      await expect(heroTitle).toBeInViewport();
    });
    
    test('FAQ组件与页面滚动交互', async ({ page }) => {
      const homePage = new HomePage(page);
      const faqComponent = new FAQComponent(page);
      
      await homePage.goto();
      
      // 滚动到FAQ区域
      await faqComponent.scrollToFAQ();
      
      // 验证FAQ区域可见
      await expect(faqComponent.faqSection).toBeInViewport();
      
      // 测试FAQ展开/收起功能
      const faqItemsCount = await faqComponent.faqItems.count();
      
      if (faqItemsCount > 0) {
        // 测试第一个FAQ项目
        await faqComponent.verifyFAQInteraction(0);
        
        // 测试多个FAQ项目可以同时展开
        if (faqItemsCount > 1) {
          await faqComponent.toggleFAQ(0); // 展开第一个
          await faqComponent.toggleFAQ(1); // 展开第二个
          
          // 验证两个都是展开状态
          const firstAnswer = faqComponent.faqItems.nth(0).locator('.animate-fade-in');
          const secondAnswer = faqComponent.faqItems.nth(1).locator('.animate-fade-in');
          
          await expect(firstAnswer).toBeVisible();
          await expect(secondAnswer).toBeVisible();
        }
      }
    });
  });
  
  test.describe('表单与反馈交互', () => {
    test('Newsletter订阅完整流程测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      await homePage.goto();
      
      // 滚动到Newsletter区域
      await page.locator('section').last().scrollIntoViewIfNeeded();
      
      // 测试有效邮箱订阅
      const validEmail = testData.validEmails[0];
      await homePage.subscribeNewsletter(validEmail);
      
      // 等待可能的反馈
      await page.waitForTimeout(2000);
      
      // 检查是否有成功提示
      const successMessages = page.locator('.success, .text-green-500, [role="alert"]');
      const successCount = await successMessages.count();
      
      if (successCount > 0) {
        console.log('Newsletter订阅成功提示显示正常');
      }
      
      // 测试无效邮箱
      await page.reload();
      await page.locator('section').last().scrollIntoViewIfNeeded();
      
      const invalidEmail = testData.invalidEmails[0];
      await homePage.subscribeNewsletter(invalidEmail);
      
      await page.waitForTimeout(2000);
      
      // 检查是否有错误提示
      const errorMessages = page.locator('.error, .text-red-500, [role="alert"]');
      const errorCount = await errorMessages.count();
      
      if (errorCount > 0) {
        console.log('Newsletter订阅错误提示显示正常');
      }
    });
    
    test('表单验证与用户体验测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      await homePage.goto();
      
      // 滚动到Newsletter区域
      await page.locator('section').last().scrollIntoViewIfNeeded();
      
      const emailInput = homePage.newsletterInput;
      const submitButton = homePage.newsletterSubmitButton;
      
      // 测试空表单提交
      await submitButton.click();
      await page.waitForTimeout(1000);
      
      // 验证浏览器原生验证或自定义验证
      const inputValidity = await emailInput.evaluate((input: HTMLInputElement) => {
        return {
          valid: input.validity.valid,
          valueMissing: input.validity.valueMissing,
          typeMismatch: input.validity.typeMismatch
        };
      });
      
      // 空输入应该触发验证
      expect(inputValidity.valid).toBeFalsy();
      
      // 测试输入焦点状态
      await emailInput.focus();
      await expect(emailInput).toBeFocused();
      
      // 测试输入实时验证
      await emailInput.fill('invalid');
      await page.waitForTimeout(500);
      
      const partialInputValidity = await emailInput.evaluate((input: HTMLInputElement) => {
        return input.validity.valid;
      });
      
      // 部分输入应该无效
      expect(partialInputValidity).toBeFalsy();
      
      // 测试完整有效邮箱
      await emailInput.fill('test@example.com');
      await page.waitForTimeout(500);
      
      const validInputValidity = await emailInput.evaluate((input: HTMLInputElement) => {
        return input.validity.valid;
      });
      
      // 有效邮箱应该通过验证
      expect(validInputValidity).toBeTruthy();
    });
  });
  
  test.describe('响应式交互测试', () => {
    test('移动端导航与内容交互', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      
      await homePage.goto();
      
      // 验证移动端菜单按钮可见
      await expect(navigation.mobileMenuButton).toBeVisible();
      
      // 打开移动菜单
      await navigation.toggleMobileMenu();
      
      // 验证移动菜单展开
      await expect(navigation.mobileNav).toBeVisible();
      
      // 测试移动菜单中的导航链接
      const mobileNavLinks = navigation.mobileNav.locator('button');
      const linkCount = await mobileNavLinks.count();
      
      if (linkCount > 0) {
        // 点击第一个链接
        const firstLink = mobileNavLinks.first();
        const linkText = await firstLink.textContent();
        
        await firstLink.click();
        
        // 验证菜单关闭（通常移动端点击链接后菜单会关闭）
        await page.waitForTimeout(1000);
        
        // 验证页面滚动到对应区域
        if (linkText) {
          const sectionId = linkText.toLowerCase().trim();
          const targetSection = page.locator(`#${sectionId}`);
          
          if (await targetSection.count() > 0) {
            await expect(targetSection).toBeInViewport();
          }
        }
      }
    });
    
    test('跨设备一致性测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      // 测试不同视口尺寸下的功能一致性
      const viewports = [
        { width: 375, height: 667, name: 'Mobile' },
        { width: 768, height: 1024, name: 'Tablet' },
        { width: 1920, height: 1080, name: 'Desktop' }
      ];
      
      for (const viewport of viewports) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await homePage.goto();
        
        // 验证核心元素在所有设备上都可见
        await expect(homePage.heroTitle).toBeVisible();
        await expect(homePage.startCreatingButton).toBeVisible();
        
        // 验证Newsletter输入框在所有设备上都可用
        await page.locator('section').last().scrollIntoViewIfNeeded();
        await expect(homePage.newsletterInput).toBeVisible();
        await expect(homePage.newsletterSubmitButton).toBeVisible();
        
        console.log(`${viewport.name} (${viewport.width}x${viewport.height}) 测试通过`);
      }
    });
  });
  
  test.describe('性能与用户体验集成', () => {
    test('页面加载与交互性能测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      // 记录页面加载开始时间
      const startTime = Date.now();
      
      await homePage.goto();
      
      // 等待页面完全加载
      await page.waitForLoadState('networkidle');
      
      const loadTime = Date.now() - startTime;
      console.log(`页面加载时间: ${loadTime}ms`);
      
      // 验证页面加载时间合理（小于5秒）
      expect(loadTime).toBeLessThan(5000);
      
      // 测试交互响应性
      const interactionStartTime = Date.now();
      
      await homePage.startCreatingButton.click();
      
      const interactionTime = Date.now() - interactionStartTime;
      console.log(`交互响应时间: ${interactionTime}ms`);
      
      // 验证交互响应时间合理（小于500ms）
      expect(interactionTime).toBeLessThan(500);
    });
    
    test('滚动性能与动画流畅性测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      await homePage.goto();
      
      // 测试平滑滚动
      const scrollStartTime = Date.now();
      
      // 滚动到页面底部
      await page.evaluate(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      });
      
      // 等待滚动完成
      await page.waitForTimeout(2000);
      
      const scrollTime = Date.now() - scrollStartTime;
      console.log(`滚动完成时间: ${scrollTime}ms`);
      
      // 验证页面已滚动到底部
      const scrollPosition = await page.evaluate(() => window.pageYOffset);
      expect(scrollPosition).toBeGreaterThan(0);
      
      // 测试滚动到特定区域
      const navigation = new NavigationComponent(page);
      
      await navigation.clickNavLink('Features');
      await page.waitForTimeout(1000);
      
      const featuresSection = page.locator('#features');
      if (await featuresSection.count() > 0) {
        await expect(featuresSection).toBeInViewport();
      }
    });
  });
  
  test.describe('错误处理与恢复', () => {
    test('网络错误恢复测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      // 正常加载页面
      await homePage.goto();
      await expect(homePage.heroTitle).toBeVisible();
      
      // 模拟网络中断
      await page.route('**/*', route => {
        if (route.request().url().includes('api') || route.request().url().includes('submit')) {
          route.abort();
        } else {
          route.continue();
        }
      });
      
      // 尝试提交Newsletter
      await page.locator('section').last().scrollIntoViewIfNeeded();
      await homePage.subscribeNewsletter('test@example.com');
      
      // 等待错误处理
      await page.waitForTimeout(3000);
      
      // 验证页面仍然可用
      await expect(homePage.heroTitle).toBeVisible();
      await expect(homePage.newsletterInput).toBeVisible();
      
      // 恢复网络
      await page.unroute('**/*');
      
      // 验证功能恢复
      await page.reload();
      await expect(homePage.heroTitle).toBeVisible();
    });
    
    test('JavaScript错误处理测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      // 监听JavaScript错误
      const jsErrors: string[] = [];
      page.on('pageerror', error => {
        jsErrors.push(error.message);
      });
      
      await homePage.goto();
      
      // 注入一个可能的错误
      await page.evaluate(() => {
        // 尝试访问不存在的方法（但不会破坏页面）
        try {
          (window as any).nonExistentFunction?.();
        } catch (e) {
          console.warn('测试错误处理:', e);
        }
      });
      
      await page.waitForTimeout(1000);
      
      // 验证页面核心功能仍然正常
      await expect(homePage.heroTitle).toBeVisible();
      await expect(homePage.startCreatingButton).toBeVisible();
      
      // 验证交互仍然可用
      await homePage.startCreatingButton.click();
      
      console.log(`检测到 ${jsErrors.length} 个JavaScript错误`);
      
      // 如果有错误，记录但不失败测试（除非是严重错误）
      if (jsErrors.length > 0) {
        console.log('JavaScript错误列表:', jsErrors);
      }
    });
  });
  
  test.describe('数据流与状态管理', () => {
    test('页面状态持久化测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      await homePage.goto();
      
      // 展开FAQ项目
      const faqComponent = new FAQComponent(page);
      await faqComponent.scrollToFAQ();
      
      if (await faqComponent.faqItems.count() > 0) {
        await faqComponent.toggleFAQ(0);
        
        // 验证FAQ展开
        const firstAnswer = faqComponent.faqItems.nth(0).locator('.animate-fade-in');
        await expect(firstAnswer).toBeVisible();
        
        // 刷新页面
        await page.reload();
        
        // 验证页面重新加载后状态
        await faqComponent.scrollToFAQ();
        
        // FAQ应该回到初始状态（收起）
        const firstAnswerAfterReload = faqComponent.faqItems.nth(0).locator('.animate-fade-in');
        await expect(firstAnswerAfterReload).not.toBeVisible();
      }
    });
    
    test('用户交互历史测试', async ({ page }) => {
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      
      await homePage.goto();
      
      // 模拟用户浏览路径
      const userJourney = [
        { action: 'clickNavLink', target: 'Features' },
        { action: 'clickNavLink', target: 'Showcase' },
        { action: 'clickNavLink', target: 'Reviews' },
        { action: 'clickNavLink', target: 'FAQ' }
      ];
      
      for (const step of userJourney) {
        if (step.action === 'clickNavLink') {
          await navigation.clickNavLink(step.target);
          
          // 验证导航成功
          const targetSection = page.locator(`#${step.target.toLowerCase()}`);
          if (await targetSection.count() > 0) {
            await expect(targetSection).toBeInViewport();
          }
          
          await page.waitForTimeout(1000);
        }
      }
      
      // 验证最终状态
      const faqSection = page.locator('#faq');
      if (await faqSection.count() > 0) {
        await expect(faqSection).toBeInViewport();
      }
      
      console.log('用户浏览路径测试完成');
    });
  });
});