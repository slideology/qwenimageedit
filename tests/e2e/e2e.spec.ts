import { test, expect } from '@playwright/test';
import { HomePage, NavigationComponent, FAQComponent } from '../fixtures/page-objects';
import { testData } from '../fixtures/test-data';

test.describe('端到端测试', () => {
  test.describe('完整用户流程', () => {
    test('新用户首次访问完整流程', async ({ page }) => {
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      const faqComponent = new FAQComponent(page);
      
      // 1. 用户访问首页
      await homePage.goto();
      
      // 验证页面加载完成
      await expect(homePage.heroTitle).toBeVisible();
      await expect(homePage.heroSubtitle).toBeVisible();
      
      // 2. 用户浏览Hero区域
      await expect(homePage.startCreatingButton).toBeVisible();
      await expect(homePage.viewExamplesButton).toBeVisible();
      
      // 3. 用户点击查看示例
      await homePage.clickViewExamples();
      
      // 验证滚动到showcase区域
      const showcaseSection = page.locator('#showcase');
      if (await showcaseSection.count() > 0) {
        await expect(showcaseSection).toBeInViewport();
      }
      
      // 4. 用户浏览Features区域
      await navigation.clickNavLink('Features');
      
      const featuresSection = page.locator('#features');
      if (await featuresSection.count() > 0) {
        await expect(featuresSection).toBeInViewport();
        
        // 验证Features内容
        const featureCards = featuresSection.locator('.feature-card, [class*="feature"], .grid > div');
        const cardCount = await featureCards.count();
        expect(cardCount).toBeGreaterThan(0);
      }
      
      // 5. 用户查看用户评价
      await navigation.clickNavLink('Reviews');
      
      const reviewsSection = page.locator('#reviews');
      if (await reviewsSection.count() > 0) {
        await expect(reviewsSection).toBeInViewport();
        
        // 验证评价内容
        const reviewCards = reviewsSection.locator('.review-card, [class*="review"], .testimonial');
        const reviewCount = await reviewCards.count();
        
        if (reviewCount > 0) {
          // 验证第一个评价的内容
          const firstReview = reviewCards.first();
          await expect(firstReview).toBeVisible();
        }
      }
      
      // 6. 用户查看FAQ
      await navigation.clickNavLink('FAQ');
      await faqComponent.scrollToFAQ();
      
      // 验证FAQ区域
      await expect(faqComponent.faqSection).toBeInViewport();
      
      const faqItemsCount = await faqComponent.faqItems.count();
      if (faqItemsCount > 0) {
        // 用户展开第一个FAQ
        await faqComponent.toggleFAQ(0);
        
        // 验证FAQ展开
        const firstAnswer = faqComponent.faqItems.nth(0).locator('.animate-fade-in');
        await expect(firstAnswer).toBeVisible();
        
        // 用户展开第二个FAQ（如果存在）
        if (faqItemsCount > 1) {
          await faqComponent.toggleFAQ(1);
          const secondAnswer = faqComponent.faqItems.nth(1).locator('.animate-fade-in');
          await expect(secondAnswer).toBeVisible();
        }
      }
      
      // 7. 用户订阅Newsletter
      await page.locator('section').last().scrollIntoViewIfNeeded();
      
      const validEmail = testData.validEmails[0];
      await homePage.subscribeNewsletter(validEmail);
      
      // 等待订阅反馈
      await page.waitForTimeout(2000);
      
      // 8. 用户返回顶部
      await navigation.logoText.click();
      await page.waitForTimeout(1000);
      
      // 验证回到顶部
      await expect(homePage.heroTitle).toBeInViewport();
      
      console.log('新用户首次访问完整流程测试完成');
    });
    
    test('移动端用户完整流程', async ({ page }) => {
      // 设置移动端视口
      await page.setViewportSize({ width: 375, height: 667 });
      
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      
      // 1. 移动端用户访问首页
      await homePage.goto();
      
      // 验证移动端布局
      await expect(homePage.heroTitle).toBeVisible();
      await expect(navigation.mobileMenuButton).toBeVisible();
      
      // 2. 用户打开移动菜单
      await navigation.toggleMobileMenu();
      await expect(navigation.mobileNav).toBeVisible();
      
      // 3. 用户通过移动菜单导航
      const mobileNavLinks = navigation.mobileNav.locator('button');
      const linkCount = await mobileNavLinks.count();
      
      if (linkCount > 0) {
        // 点击Features链接
        const featuresLink = mobileNavLinks.filter({ hasText: 'Features' });
        if (await featuresLink.count() > 0) {
          await featuresLink.click();
          
          // 验证菜单关闭并滚动到Features
          await page.waitForTimeout(1000);
          const featuresSection = page.locator('#features');
          if (await featuresSection.count() > 0) {
            await expect(featuresSection).toBeInViewport();
          }
        }
      }
      
      // 4. 移动端Newsletter订阅
      await page.locator('section').last().scrollIntoViewIfNeeded();
      
      // 验证移动端表单可用性
      await expect(homePage.newsletterInput).toBeVisible();
      await expect(homePage.newsletterSubmitButton).toBeVisible();
      
      // 测试移动端输入
      const validEmail = testData.validEmails[1];
      await homePage.newsletterInput.fill(validEmail);
      
      // 验证输入值
      const inputValue = await homePage.newsletterInput.inputValue();
      expect(inputValue).toBe(validEmail);
      
      await homePage.newsletterSubmitButton.click();
      await page.waitForTimeout(2000);
      
      console.log('移动端用户完整流程测试完成');
    });
  });
  
  test.describe('真实场景模拟', () => {
    test('用户快速浏览场景', async ({ page }) => {
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      
      await homePage.goto();
      
      // 模拟用户快速浏览行为
      const quickBrowsingActions = [
        async () => {
          // 快速查看Hero区域
          await expect(homePage.heroTitle).toBeVisible();
          await page.waitForTimeout(500);
        },
        async () => {
          // 快速滚动到Features
          await navigation.clickNavLink('Features');
          await page.waitForTimeout(800);
        },
        async () => {
          // 快速查看Showcase
          await navigation.clickNavLink('Showcase');
          await page.waitForTimeout(600);
        },
        async () => {
          // 快速滚动到底部
          await page.locator('section').last().scrollIntoViewIfNeeded();
          await page.waitForTimeout(400);
        }
      ];
      
      // 执行快速浏览
      for (const action of quickBrowsingActions) {
        await action();
      }
      
      // 验证页面仍然响应正常
      await expect(homePage.heroTitle).toBeVisible();
      await expect(homePage.newsletterInput).toBeVisible();
      
      console.log('用户快速浏览场景测试完成');
    });
    
    test('用户深度探索场景', async ({ page }) => {
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      const faqComponent = new FAQComponent(page);
      
      await homePage.goto();
      
      // 模拟用户深度探索行为
      
      // 1. 仔细阅读Hero区域
      await expect(homePage.heroTitle).toBeVisible();
      await expect(homePage.heroSubtitle).toBeVisible();
      
      // 模拟阅读时间
      await page.waitForTimeout(2000);
      
      // 2. 详细查看Features
      await navigation.clickNavLink('Features');
      
      const featuresSection = page.locator('#features');
      if (await featuresSection.count() > 0) {
        await expect(featuresSection).toBeInViewport();
        
        // 模拟仔细阅读每个Feature
        const featureCards = featuresSection.locator('.feature-card, [class*="feature"], .grid > div');
        const cardCount = await featureCards.count();
        
        for (let i = 0; i < Math.min(cardCount, 3); i++) {
          const card = featureCards.nth(i);
          await card.scrollIntoViewIfNeeded();
          await page.waitForTimeout(1500); // 模拟阅读时间
        }
      }
      
      // 3. 深入了解FAQ
      await faqComponent.scrollToFAQ();
      
      const faqItemsCount = await faqComponent.faqItems.count();
      if (faqItemsCount > 0) {
        // 逐个展开FAQ项目
        for (let i = 0; i < Math.min(faqItemsCount, 3); i++) {
          await faqComponent.toggleFAQ(i);
          
          // 模拟阅读FAQ答案
          await page.waitForTimeout(2000);
          
          // 验证FAQ展开
          const answer = faqComponent.faqItems.nth(i).locator('.animate-fade-in');
          await expect(answer).toBeVisible();
        }
      }
      
      // 4. 最终决定订阅
      await page.locator('section').last().scrollIntoViewIfNeeded();
      
      const validEmail = testData.validEmails[2];
      await homePage.subscribeNewsletter(validEmail);
      
      await page.waitForTimeout(2000);
      
      console.log('用户深度探索场景测试完成');
    });
    
    test('用户犹豫不决场景', async ({ page }) => {
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      
      await homePage.goto();
      
      // 模拟用户犹豫不决的行为
      
      // 1. 多次在不同区域间跳转
      const hesitantActions = [
        () => navigation.clickNavLink('Features'),
        () => navigation.clickNavLink('Showcase'),
        () => navigation.clickNavLink('Features'), // 回到Features
        () => navigation.clickNavLink('Reviews'),
        () => navigation.clickNavLink('FAQ'),
        () => navigation.clickNavLink('Features'), // 再次回到Features
      ];
      
      for (const action of hesitantActions) {
        await action();
        await page.waitForTimeout(1000);
      }
      
      // 2. 多次尝试Newsletter但没有提交
      await page.locator('section').last().scrollIntoViewIfNeeded();
      
      // 输入邮箱但不提交
      await homePage.newsletterInput.fill('test@');
      await page.waitForTimeout(500);
      
      // 清空重新输入
      await homePage.newsletterInput.fill('');
      await page.waitForTimeout(500);
      
      // 再次输入部分邮箱
      await homePage.newsletterInput.fill('user@example');
      await page.waitForTimeout(500);
      
      // 最终完成输入并提交
      await homePage.newsletterInput.fill(testData.validEmails[0]);
      await homePage.newsletterSubmitButton.click();
      
      await page.waitForTimeout(2000);
      
      console.log('用户犹豫不决场景测试完成');
    });
  });
  
  test.describe('错误恢复场景', () => {
    test('网络不稳定环境下的用户体验', async ({ page }) => {
      const homePage = new HomePage(page);
      
      // 正常加载页面
      await homePage.goto();
      await expect(homePage.heroTitle).toBeVisible();
      
      // 模拟间歇性网络问题
      let requestCount = 0;
      await page.route('**/*', route => {
        requestCount++;
        
        // 每第3个请求失败
        if (requestCount % 3 === 0 && route.request().url().includes('api')) {
          route.abort();
        } else {
          route.continue();
        }
      });
      
      // 用户尝试多次操作
      for (let i = 0; i < 3; i++) {
        try {
          await page.locator('section').last().scrollIntoViewIfNeeded();
          await homePage.subscribeNewsletter(`test${i}@example.com`);
          await page.waitForTimeout(2000);
        } catch (error) {
          console.log(`第${i + 1}次尝试失败:`, error);
        }
      }
      
      // 验证页面仍然可用
      await expect(homePage.heroTitle).toBeVisible();
      await expect(homePage.newsletterInput).toBeVisible();
      
      // 清除网络拦截
      await page.unroute('**/*');
      
      console.log('网络不稳定环境测试完成');
    });
    
    test('浏览器兼容性场景', async ({ page }) => {
      const homePage = new HomePage(page);
      
      await homePage.goto();
      
      // 测试基本功能在不同浏览器中的表现
      const browserInfo = await page.evaluate(() => {
        return {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          language: navigator.language,
          cookieEnabled: navigator.cookieEnabled,
          onLine: navigator.onLine
        };
      });
      
      console.log('浏览器信息:', browserInfo);
      
      // 验证核心功能
      await expect(homePage.heroTitle).toBeVisible();
      await expect(homePage.startCreatingButton).toBeVisible();
      
      // 测试JavaScript功能
      const jsSupport = await page.evaluate(() => {
        try {
          // 测试现代JavaScript特性
          const testArray = [1, 2, 3];
          const doubled = testArray.map(x => x * 2);
          const hasMap = doubled.length === 3;
          
          // 测试Promise支持
          const hasPromise = typeof Promise !== 'undefined';
          
          // 测试箭头函数
          const arrowFunc = () => true;
          const hasArrowFunc = arrowFunc();
          
          return {
            hasMap,
            hasPromise,
            hasArrowFunc,
            modernJS: hasMap && hasPromise && hasArrowFunc
          };
        } catch (e) {
          return { error: e.message };
        }
      });
      
      console.log('JavaScript支持:', jsSupport);
      
      // 验证交互功能
      await homePage.startCreatingButton.click();
      
      // 验证表单功能
      await page.locator('section').last().scrollIntoViewIfNeeded();
      await homePage.newsletterInput.fill('compatibility@test.com');
      
      const inputValue = await homePage.newsletterInput.inputValue();
      expect(inputValue).toBe('compatibility@test.com');
      
      console.log('浏览器兼容性测试完成');
    });
  });
  
  test.describe('性能压力测试', () => {
    test('高频交互压力测试', async ({ page }) => {
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      
      await homePage.goto();
      
      const startTime = Date.now();
      
      // 执行高频交互
      const highFrequencyActions = [
        'Features',
        'Showcase', 
        'Reviews',
        'FAQ',
        'Features', // 重复访问
        'Showcase',
        'Reviews'
      ];
      
      for (let round = 0; round < 3; round++) {
        for (const section of highFrequencyActions) {
          await navigation.clickNavLink(section);
          await page.waitForTimeout(100); // 最小等待时间
        }
      }
      
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      
      console.log(`高频交互总耗时: ${totalTime}ms`);
      
      // 验证页面仍然响应
      await expect(homePage.heroTitle).toBeVisible();
      
      // 验证最终状态
      const faqSection = page.locator('#faq');
      if (await faqSection.count() > 0) {
        await expect(faqSection).toBeInViewport();
      }
      
      console.log('高频交互压力测试完成');
    });
    
    test('长时间会话测试', async ({ page }) => {
      const homePage = new HomePage(page);
      const navigation = new NavigationComponent(page);
      const faqComponent = new FAQComponent(page);
      
      await homePage.goto();
      
      // 模拟长时间用户会话（5分钟的活动）
      const sessionDuration = 30000; // 30秒（测试环境下缩短）
      const startTime = Date.now();
      
      while (Date.now() - startTime < sessionDuration) {
        // 随机执行不同操作
        const randomAction = Math.floor(Math.random() * 4);
        
        switch (randomAction) {
          case 0:
            // 导航操作
            const sections = ['Features', 'Showcase', 'Reviews', 'FAQ'];
            const randomSection = sections[Math.floor(Math.random() * sections.length)];
            await navigation.clickNavLink(randomSection);
            break;
            
          case 1:
            // FAQ交互
            await faqComponent.scrollToFAQ();
            const faqCount = await faqComponent.faqItems.count();
            if (faqCount > 0) {
              const randomFAQ = Math.floor(Math.random() * Math.min(faqCount, 3));
              await faqComponent.toggleFAQ(randomFAQ);
            }
            break;
            
          case 2:
            // 滚动操作
            await page.evaluate(() => {
              const scrollAmount = Math.random() * window.innerHeight;
              window.scrollBy(0, scrollAmount);
            });
            break;
            
          case 3:
            // 表单交互
            await page.locator('section').last().scrollIntoViewIfNeeded();
            await homePage.newsletterInput.focus();
            await page.waitForTimeout(100);
            break;
        }
        
        await page.waitForTimeout(1000 + Math.random() * 2000); // 1-3秒随机间隔
      }
      
      // 验证会话结束后页面状态
      await expect(homePage.heroTitle).toBeVisible();
      await expect(homePage.newsletterInput).toBeVisible();
      
      console.log('长时间会话测试完成');
    });
  });
});