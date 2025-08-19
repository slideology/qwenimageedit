import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log('🚀 开始全局测试设置...');
  
  const { baseURL } = config.projects[0].use;
  
  if (!baseURL) {
    console.warn('⚠️  未设置 baseURL，跳过健康检查');
    return;
  }
  
  // 启动浏览器进行健康检查
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log(`🔍 检查应用健康状态: ${baseURL}`);
    
    // 等待应用启动
    let retries = 0;
    const maxRetries = 30; // 最多等待30次，每次2秒
    
    while (retries < maxRetries) {
      try {
        const response = await page.goto(baseURL, { 
          waitUntil: 'networkidle',
          timeout: 10000 
        });
        
        if (response && response.status() === 200) {
          console.log('✅ 应用健康检查通过');
          break;
        } else {
          throw new Error(`HTTP ${response?.status()}`);
        }
      } catch (error) {
        retries++;
        console.log(`⏳ 等待应用启动... (${retries}/${maxRetries})`);
        
        if (retries >= maxRetries) {
          throw new Error(`应用启动超时: ${error}`);
        }
        
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    // 验证关键页面元素
    console.log('🔍 验证页面基本元素...');
    
    const title = await page.title();
    console.log(`📄 页面标题: ${title}`);
    
    // 检查是否有JavaScript错误
    const jsErrors: string[] = [];
    page.on('pageerror', error => {
      jsErrors.push(error.message);
    });
    
    // 等待页面完全加载
    await page.waitForTimeout(3000);
    
    if (jsErrors.length > 0) {
      console.warn('⚠️  检测到JavaScript错误:', jsErrors);
    } else {
      console.log('✅ 无JavaScript错误');
    }
    
    // 检查基本的页面结构
    const hasHero = await page.locator('h1').count() > 0;
    const hasNavigation = await page.locator('nav, header').count() > 0;
    const hasFooter = await page.locator('footer').count() > 0;
    
    console.log(`📊 页面结构检查:`);
    console.log(`   - Hero区域: ${hasHero ? '✅' : '❌'}`);
    console.log(`   - 导航栏: ${hasNavigation ? '✅' : '❌'}`);
    console.log(`   - 页脚: ${hasFooter ? '✅' : '❌'}`);
    
    // 性能基准测试
    console.log('⚡ 执行性能基准测试...');
    
    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
      };
    });
    
    console.log(`📈 性能指标:`);
    console.log(`   - DOM加载: ${performanceMetrics.domContentLoaded.toFixed(2)}ms`);
    console.log(`   - 页面加载: ${performanceMetrics.loadComplete.toFixed(2)}ms`);
    console.log(`   - 首次绘制: ${performanceMetrics.firstPaint.toFixed(2)}ms`);
    console.log(`   - 首次内容绘制: ${performanceMetrics.firstContentfulPaint.toFixed(2)}ms`);
    
    // 设置全局测试数据
    process.env.TEST_BASE_URL = baseURL;
    process.env.TEST_SETUP_COMPLETE = 'true';
    
    console.log('✅ 全局测试设置完成');
    
  } catch (error) {
    console.error('❌ 全局设置失败:', error);
    throw error;
  } finally {
    await page.close();
    await browser.close();
  }
}

export default globalSetup;