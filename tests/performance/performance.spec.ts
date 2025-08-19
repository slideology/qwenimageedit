import { test, expect } from '@playwright/test';
import { HomePage } from '../fixtures/page-objects';
import { testData } from '../fixtures/test-data';

test.describe('性能测试', () => {
  test.describe('页面加载性能', () => {
    test('首页加载时间测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      const startTime = Date.now();
      await homePage.goto();
      
      // 等待关键内容加载完成
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('.feature-card').first()).toBeVisible();
      
      const loadTime = Date.now() - startTime;
      
      // 验证加载时间在合理范围内
      expect(loadTime).toBeLessThan(testData.performanceBenchmarks.maxLoadTime);
      
      console.log(`页面加载时间: ${loadTime}ms`);
    });
    
    test('资源加载性能测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      // 监听网络请求
      const requests: any[] = [];
      page.on('request', request => {
        requests.push({
          url: request.url(),
          method: request.method(),
          resourceType: request.resourceType(),
          timestamp: Date.now()
        });
      });
      
      const responses: any[] = [];
      page.on('response', response => {
        responses.push({
          url: response.url(),
          status: response.status(),
          timestamp: Date.now()
        });
      });
      
      await homePage.goto();
      await page.waitForLoadState('networkidle');
      
      // 分析请求性能
      const imageRequests = requests.filter(req => req.resourceType === 'image');
      const scriptRequests = requests.filter(req => req.resourceType === 'script');
      const stylesheetRequests = requests.filter(req => req.resourceType === 'stylesheet');
      
      console.log(`总请求数: ${requests.length}`);
      console.log(`图片请求数: ${imageRequests.length}`);
      console.log(`脚本请求数: ${scriptRequests.length}`);
      console.log(`样式表请求数: ${stylesheetRequests.length}`);
      
      // 验证没有过多的请求
      expect(requests.length).toBeLessThan(50);
      expect(imageRequests.length).toBeLessThan(20);
      
      // 验证没有失败的请求
      const failedResponses = responses.filter(res => res.status >= 400);
      expect(failedResponses.length).toBe(0);
    });
    
    test('图片加载优化测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 获取所有图片元素
      const images = page.locator('img');
      const imageCount = await images.count();
      
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        
        // 验证图片有alt属性
        const alt = await img.getAttribute('alt');
        expect(alt).toBeTruthy();
        
        // 验证图片加载成功
        await expect(img).toBeVisible();
        
        // 检查图片尺寸是否合理
        const boundingBox = await img.boundingBox();
        if (boundingBox) {
          expect(boundingBox.width).toBeGreaterThan(0);
          expect(boundingBox.height).toBeGreaterThan(0);
        }
      }
    });
  });
  
  test.describe('运行时性能', () => {
    test('滚动性能测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 测量滚动性能
      const startTime = Date.now();
      
      // 模拟平滑滚动到页面底部
      await page.evaluate(() => {
        return new Promise(resolve => {
          let totalHeight = 0;
          const distance = 100;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            
            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              resolve(true);
            }
          }, 50);
        });
      });
      
      const scrollTime = Date.now() - startTime;
      console.log(`滚动时间: ${scrollTime}ms`);
      
      // 验证滚动性能
      expect(scrollTime).toBeLessThan(3000);
    });
    
    test('动画性能测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 测试FAQ展开动画性能
      const faqButtons = page.locator('#faq button');
      const firstFAQ = faqButtons.first();
      
      const startTime = Date.now();
      await firstFAQ.click();
      
      // 等待动画完成
      await page.waitForTimeout(500);
      
      const animationTime = Date.now() - startTime;
      console.log(`动画时间: ${animationTime}ms`);
      
      // 验证动画响应时间
      expect(animationTime).toBeLessThan(1000);
    });
    
    test('内存使用测试', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 获取初始内存使用情况
      const initialMetrics = await page.evaluate(() => {
        return (performance as any).memory ? {
          usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
          totalJSHeapSize: (performance as any).memory.totalJSHeapSize
        } : null;
      });
      
      if (initialMetrics) {
        console.log(`初始内存使用: ${Math.round(initialMetrics.usedJSHeapSize / 1024 / 1024)}MB`);
        
        // 执行一些交互操作
        await page.locator('text="Features"').click();
        await page.waitForTimeout(1000);
        
        await page.locator('text="Showcase"').click();
        await page.waitForTimeout(1000);
        
        await page.locator('text="Reviews"').click();
        await page.waitForTimeout(1000);
        
        // 获取操作后的内存使用情况
        const finalMetrics = await page.evaluate(() => {
          return (performance as any).memory ? {
            usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
            totalJSHeapSize: (performance as any).memory.totalJSHeapSize
          } : null;
        });
        
        if (finalMetrics) {
          console.log(`最终内存使用: ${Math.round(finalMetrics.usedJSHeapSize / 1024 / 1024)}MB`);
          
          const memoryIncrease = finalMetrics.usedJSHeapSize - initialMetrics.usedJSHeapSize;
          console.log(`内存增长: ${Math.round(memoryIncrease / 1024 / 1024)}MB`);
          
          // 验证内存增长在合理范围内
          expect(memoryIncrease).toBeLessThan(50 * 1024 * 1024); // 50MB
        }
      }
    });
  });
  
  test.describe('网络性能', () => {
    test('慢网络条件下的性能', async ({ page }) => {
      // 模拟慢速3G网络
      await page.route('**/*', async route => {
        await new Promise(resolve => setTimeout(resolve, 100)); // 100ms延迟
        await route.continue();
      });
      
      const homePage = new HomePage(page);
      
      const startTime = Date.now();
      await homePage.goto();
      
      // 等待关键内容加载
      await expect(page.locator('h1')).toBeVisible();
      
      const loadTime = Date.now() - startTime;
      console.log(`慢网络加载时间: ${loadTime}ms`);
      
      // 在慢网络条件下，加载时间应该仍然可接受
      expect(loadTime).toBeLessThan(10000); // 10秒
    });
    
    test('缓存性能测试', async ({ page }) => {
      const homePage = new HomePage(page);
      
      // 第一次加载
      const firstLoadStart = Date.now();
      await homePage.goto();
      await expect(page.locator('h1')).toBeVisible();
      const firstLoadTime = Date.now() - firstLoadStart;
      
      // 刷新页面（测试缓存）
      const secondLoadStart = Date.now();
      await page.reload();
      await expect(page.locator('h1')).toBeVisible();
      const secondLoadTime = Date.now() - secondLoadStart;
      
      console.log(`首次加载时间: ${firstLoadTime}ms`);
      console.log(`缓存加载时间: ${secondLoadTime}ms`);
      
      // 缓存加载应该更快
      expect(secondLoadTime).toBeLessThan(firstLoadTime);
    });
  });
  
  test.describe('移动端性能', () => {
    test('移动设备性能测试', async ({ page }) => {
      // 设置移动端视口
      await page.setViewportSize({ width: 375, height: 667 });
      
      const homePage = new HomePage(page);
      
      const startTime = Date.now();
      await homePage.goto();
      
      // 等待移动端关键内容加载
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('.mobile-menu-button, button').first()).toBeVisible();
      
      const loadTime = Date.now() - startTime;
      console.log(`移动端加载时间: ${loadTime}ms`);
      
      // 移动端加载时间应该在合理范围内
      expect(loadTime).toBeLessThan(testData.performanceBenchmarks.maxLoadTime);
    });
    
    test('触摸交互性能测试', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 测试移动菜单切换性能
      const mobileMenuButton = page.locator('button').first();
      
      const startTime = Date.now();
      await mobileMenuButton.click();
      
      // 等待菜单动画完成
      await page.waitForTimeout(300);
      
      const responseTime = Date.now() - startTime;
      console.log(`移动菜单响应时间: ${responseTime}ms`);
      
      // 触摸响应应该很快
      expect(responseTime).toBeLessThan(500);
    });
  });
  
  test.describe('Core Web Vitals', () => {
    test('Largest Contentful Paint (LCP)', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 等待页面完全加载
      await page.waitForLoadState('networkidle');
      
      const lcp = await page.evaluate(() => {
        return new Promise(resolve => {
          new PerformanceObserver(list => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            resolve(lastEntry.startTime);
          }).observe({ entryTypes: ['largest-contentful-paint'] });
          
          // 如果5秒内没有LCP事件，返回null
          setTimeout(() => resolve(null), 5000);
        });
      });
      
      if (lcp) {
        console.log(`LCP: ${lcp}ms`);
        // LCP应该在2.5秒内
        expect(lcp).toBeLessThan(2500);
      }
    });
    
    test('First Input Delay (FID) 模拟', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 等待页面交互就绪
      await expect(page.locator('h1')).toBeVisible();
      
      // 模拟用户首次交互
      const startTime = Date.now();
      await page.locator('text="Try Now"').click();
      const responseTime = Date.now() - startTime;
      
      console.log(`首次交互延迟: ${responseTime}ms`);
      
      // FID应该在100ms内
      expect(responseTime).toBeLessThan(100);
    });
    
    test('Cumulative Layout Shift (CLS) 检测', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      
      // 监听布局偏移
      const cls = await page.evaluate(() => {
        return new Promise(resolve => {
          let clsValue = 0;
          
          new PerformanceObserver(list => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
          }).observe({ entryTypes: ['layout-shift'] });
          
          // 5秒后返回CLS值
          setTimeout(() => resolve(clsValue), 5000);
        });
      });
      
      console.log(`CLS: ${cls}`);
      
      // CLS应该小于0.1
      expect(cls).toBeLessThan(0.1);
    });
  });
});