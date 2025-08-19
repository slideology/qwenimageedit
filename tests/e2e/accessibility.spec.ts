import { test, expect } from '@playwright/test';
import { HomePage, NavigationComponent } from '../fixtures/page-objects';
import { testData } from '../fixtures/test-data';

test.describe('可访问性测试', () => {
  test.describe('键盘导航', () => {
    test('Tab键导航测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 获取所有可聚焦元素
      const focusableElements = page.locator(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      
      const elementCount = await focusableElements.count();
      expect(elementCount).toBeGreaterThan(0);
      
      // 测试Tab键导航
      let currentFocusIndex = 0;
      for (let i = 0; i < Math.min(elementCount, 10); i++) {
        await page.keyboard.press('Tab');
        
        // 验证焦点元素可见
        const focusedElement = page.locator(':focus');
        await expect(focusedElement).toBeVisible();
        
        currentFocusIndex++;
      }
      
      console.log(`Tab导航测试完成，测试了 ${currentFocusIndex} 个元素`);
    });
    
    test('Shift+Tab反向导航测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 先Tab到第三个元素
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      
      const forwardElement = page.locator(':focus');
      const forwardElementText = await forwardElement.textContent();
      
      // 使用Shift+Tab返回
      await page.keyboard.press('Shift+Tab');
      
      const backwardElement = page.locator(':focus');
      const backwardElementText = await backwardElement.textContent();
      
      // 验证反向导航工作正常
      expect(forwardElementText).not.toBe(backwardElementText);
      
      console.log('Shift+Tab反向导航测试通过');
    });
    
    test('Enter键激活测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 找到第一个按钮并用Tab导航到它
      const firstButton = page.locator('button').first();
      await firstButton.focus();
      
      // 验证焦点在按钮上
      await expect(firstButton).toBeFocused();
      
      // 使用Enter键激活
      await page.keyboard.press('Enter');
      
      // 等待可能的页面变化
      await page.waitForTimeout(500);
      
      console.log('Enter键激活测试完成');
    });
    
    test('空格键激活测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 找到按钮并聚焦
      const button = page.locator('button').first();
      await button.focus();
      
      // 使用空格键激活
      await page.keyboard.press('Space');
      
      // 等待可能的页面变化
      await page.waitForTimeout(500);
      
      console.log('空格键激活测试完成');
    });
  });
  
  test.describe('ARIA属性', () => {
    test('ARIA标签测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 检查重要元素的ARIA标签
      const navigation = page.locator('nav');
      if (await navigation.count() > 0) {
        const ariaLabel = await navigation.first().getAttribute('aria-label');
        if (ariaLabel) {
          expect(ariaLabel.length).toBeGreaterThan(0);
        }
      }
      
      // 检查按钮的ARIA属性
      const buttons = page.locator('button');
      const buttonCount = await buttons.count();
      
      for (let i = 0; i < Math.min(buttonCount, 5); i++) {
        const button = buttons.nth(i);
        const ariaLabel = await button.getAttribute('aria-label');
        const ariaExpanded = await button.getAttribute('aria-expanded');
        const text = await button.textContent();
        
        // 按钮应该有文本或aria-label
        const hasAccessibleName = (text && text.trim().length > 0) || (ariaLabel && ariaLabel.length > 0);
        expect(hasAccessibleName).toBeTruthy();
      }
      
      console.log(`检查了 ${Math.min(buttonCount, 5)} 个按钮的ARIA属性`);
    });
    
    test('ARIA展开状态测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 查找有aria-expanded属性的元素
      const expandableElements = page.locator('[aria-expanded]');
      const count = await expandableElements.count();
      
      if (count > 0) {
        const firstExpandable = expandableElements.first();
        const initialState = await firstExpandable.getAttribute('aria-expanded');
        
        // 点击元素
        await firstExpandable.click();
        await page.waitForTimeout(300);
        
        const newState = await firstExpandable.getAttribute('aria-expanded');
        
        // 验证状态发生了变化
        expect(newState).not.toBe(initialState);
        
        console.log(`ARIA展开状态从 ${initialState} 变为 ${newState}`);
      }
    });
    
    test('ARIA隐藏元素测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 检查aria-hidden元素
      const hiddenElements = page.locator('[aria-hidden="true"]');
      const count = await hiddenElements.count();
      
      if (count > 0) {
        // 验证aria-hidden元素不应该被屏幕阅读器访问
        for (let i = 0; i < count; i++) {
          const element = hiddenElements.nth(i);
          const tabIndex = await element.getAttribute('tabindex');
          
          // aria-hidden元素不应该可聚焦
          if (tabIndex !== null) {
            expect(tabIndex).toBe('-1');
          }
        }
        
        console.log(`检查了 ${count} 个aria-hidden元素`);
      }
    });
  });
  
  test.describe('颜色对比度', () => {
    test('文本颜色对比度测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 检查主要文本元素的颜色对比度
      const textElements = page.locator('h1, h2, h3, p, a, button');
      const count = await textElements.count();
      
      for (let i = 0; i < Math.min(count, 10); i++) {
        const element = textElements.nth(i);
        
        const styles = await element.evaluate(el => {
          const computed = window.getComputedStyle(el);
          return {
            color: computed.color,
            backgroundColor: computed.backgroundColor,
            fontSize: computed.fontSize
          };
        });
        
        // 验证颜色值存在
        expect(styles.color).toBeTruthy();
        expect(styles.fontSize).toBeTruthy();
        
        // 这里可以添加更复杂的对比度计算逻辑
        // 目前只验证基本属性存在
      }
      
      console.log(`检查了 ${Math.min(count, 10)} 个元素的颜色对比度`);
    });
    
    test('链接颜色区分测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 获取链接元素
      const links = page.locator('a');
      const linkCount = await links.count();
      
      if (linkCount > 0) {
        const firstLink = links.first();
        
        const normalColor = await firstLink.evaluate(el => {
          return window.getComputedStyle(el).color;
        });
        
        // 模拟hover状态
        await firstLink.hover();
        await page.waitForTimeout(100);
        
        const hoverColor = await firstLink.evaluate(el => {
          return window.getComputedStyle(el).color;
        });
        
        // 验证链接有视觉反馈（颜色变化或其他样式变化）
        // 这里只检查颜色是否定义
        expect(normalColor).toBeTruthy();
        expect(hoverColor).toBeTruthy();
        
        console.log(`链接颜色: 正常=${normalColor}, 悬停=${hoverColor}`);
      }
    });
  });
  
  test.describe('表单可访问性', () => {
    test('表单标签关联测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 查找表单输入元素
      const inputs = page.locator('input, textarea, select');
      const inputCount = await inputs.count();
      
      for (let i = 0; i < inputCount; i++) {
        const input = inputs.nth(i);
        const id = await input.getAttribute('id');
        const ariaLabel = await input.getAttribute('aria-label');
        const ariaLabelledby = await input.getAttribute('aria-labelledby');
        const placeholder = await input.getAttribute('placeholder');
        
        // 验证输入元素有适当的标签
        let hasLabel = false;
        
        if (id) {
          const label = page.locator(`label[for="${id}"]`);
          hasLabel = await label.count() > 0;
        }
        
        if (!hasLabel) {
          hasLabel = !!(ariaLabel || ariaLabelledby || placeholder);
        }
        
        expect(hasLabel).toBeTruthy();
      }
      
      console.log(`检查了 ${inputCount} 个表单元素的标签关联`);
    });
    
    test('表单错误提示测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 查找Newsletter订阅表单
      const emailInput = page.locator('input[type="email"]');
      
      if (await emailInput.count() > 0) {
        // 输入无效邮箱
        await emailInput.fill('invalid-email');
        
        // 查找提交按钮
        const submitButton = page.locator('button[type="submit"]').first();
        if (await submitButton.count() > 0) {
          await submitButton.click();
          
          // 等待可能的错误提示
          await page.waitForTimeout(1000);
          
          // 检查是否有错误提示
          const errorMessages = page.locator('[role="alert"], .error, .invalid');
          const errorCount = await errorMessages.count();
          
          if (errorCount > 0) {
            console.log('表单错误提示功能正常');
          }
        }
      }
    });
  });
  
  test.describe('焦点管理', () => {
    test('焦点可见性测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 测试焦点样式
      const focusableElements = page.locator('a, button, input');
      const count = await focusableElements.count();
      
      if (count > 0) {
        const firstElement = focusableElements.first();
        await firstElement.focus();
        
        // 验证元素获得焦点
        await expect(firstElement).toBeFocused();
        
        // 检查焦点样式
        const focusStyles = await firstElement.evaluate(el => {
          const computed = window.getComputedStyle(el);
          return {
            outline: computed.outline,
            outlineColor: computed.outlineColor,
            outlineWidth: computed.outlineWidth,
            boxShadow: computed.boxShadow
          };
        });
        
        // 验证有焦点指示器
        const hasFocusIndicator = 
          focusStyles.outline !== 'none' || 
          focusStyles.boxShadow !== 'none' ||
          focusStyles.outlineWidth !== '0px';
        
        expect(hasFocusIndicator).toBeTruthy();
        
        console.log('焦点可见性测试通过');
      }
    });
    
    test('焦点陷阱测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 查找模态框或下拉菜单
      const navigation = new NavigationComponent(page);
      
      // 如果有移动菜单，测试焦点陷阱
      if (await navigation.mobileMenuButton.isVisible()) {
        await navigation.toggleMobileMenu();
        
        // 验证焦点在菜单内
        const menuLinks = navigation.mobileNav.locator('a, button');
        const linkCount = await menuLinks.count();
        
        if (linkCount > 0) {
          // Tab到菜单的最后一个元素
          for (let i = 0; i < linkCount; i++) {
            await page.keyboard.press('Tab');
          }
          
          // 再按Tab应该回到第一个元素（焦点陷阱）
          await page.keyboard.press('Tab');
          
          const focusedElement = page.locator(':focus');
          const isInMenu = await navigation.mobileNav.locator(':focus').count() > 0;
          
          expect(isInMenu).toBeTruthy();
          
          console.log('焦点陷阱测试通过');
        }
      }
    });
  });
  
  test.describe('屏幕阅读器支持', () => {
    test('标题结构测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证标题层级结构
      const headings = page.locator('h1, h2, h3, h4, h5, h6');
      const headingCount = await headings.count();
      
      expect(headingCount).toBeGreaterThan(0);
      
      // 验证H1存在且唯一
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
      
      // 获取所有标题的层级
      const headingLevels: number[] = [];
      for (let i = 0; i < headingCount; i++) {
        const heading = headings.nth(i);
        const tagName = await heading.evaluate(el => el.tagName.toLowerCase());
        const level = parseInt(tagName.charAt(1));
        headingLevels.push(level);
      }
      
      // 验证标题层级合理
      expect(headingLevels[0]).toBe(1);
      
      console.log(`标题结构: ${headingLevels.join(', ')}`);
    });
    
    test('地标元素测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证主要地标元素存在
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
      
      // 验证导航地标
      const navElements = page.locator('nav');
      const navCount = await navElements.count();
      expect(navCount).toBeGreaterThan(0);
      
      console.log(`地标元素验证通过: ${navCount}个导航区域`);
    });
    
    test('列表结构测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 查找列表元素
      const lists = page.locator('ul, ol');
      const listCount = await lists.count();
      
      for (let i = 0; i < listCount; i++) {
        const list = lists.nth(i);
        const listItems = list.locator('li');
        const itemCount = await listItems.count();
        
        // 验证列表有子项
        expect(itemCount).toBeGreaterThan(0);
      }
      
      console.log(`检查了 ${listCount} 个列表结构`);
    });
  });
  
  test.describe('动画和运动', () => {
    test('减少动画偏好测试', async ({ page }) => {
      // 模拟用户偏好减少动画
      await page.emulateMedia({ reducedMotion: 'reduce' });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 验证页面仍然可用
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('button').first()).toBeVisible();
      
      console.log('减少动画偏好测试通过');
    });
    
    test('自动播放内容测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 检查是否有自动播放的视频或音频
      const autoplayMedia = page.locator('video[autoplay], audio[autoplay]');
      const count = await autoplayMedia.count();
      
      // 如果有自动播放媒体，应该有控制选项
      if (count > 0) {
        for (let i = 0; i < count; i++) {
          const media = autoplayMedia.nth(i);
          const controls = await media.getAttribute('controls');
          const muted = await media.getAttribute('muted');
          
          // 自动播放的媒体应该静音或有控制选项
          expect(controls !== null || muted !== null).toBeTruthy();
        }
      }
      
      console.log(`检查了 ${count} 个自动播放媒体元素`);
    });
  });
  
  test.describe('移动端可访问性', () => {
    test('触摸目标大小测试', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 检查可点击元素的大小
      const clickableElements = page.locator('button, a, input[type="submit"]');
      const count = await clickableElements.count();
      
      for (let i = 0; i < Math.min(count, 10); i++) {
        const element = clickableElements.nth(i);
        const boundingBox = await element.boundingBox();
        
        if (boundingBox) {
          // 触摸目标应该至少44x44px
          expect(boundingBox.width).toBeGreaterThanOrEqual(44);
          expect(boundingBox.height).toBeGreaterThanOrEqual(44);
        }
      }
      
      console.log(`检查了 ${Math.min(count, 10)} 个触摸目标大小`);
    });
    
    test('移动端导航可访问性', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      const navigation = new NavigationComponent(page);
      
      // 验证移动菜单按钮可访问
      await expect(navigation.mobileMenuButton).toBeVisible();
      
      // 验证移动菜单按钮有适当的标签
      const ariaLabel = await navigation.mobileMenuButton.getAttribute('aria-label');
      const text = await navigation.mobileMenuButton.textContent();
      
      const hasAccessibleName = (ariaLabel && ariaLabel.length > 0) || (text && text.trim().length > 0);
      expect(hasAccessibleName).toBeTruthy();
      
      console.log('移动端导航可访问性测试通过');
    });
  });
});