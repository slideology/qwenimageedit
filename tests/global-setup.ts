import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log('🎭 Starting Playwright global setup...');
  
  // 可以在这里进行全局的设置，比如：
  // - 启动测试数据库
  // - 设置测试环境变量
  // - 预热缓存
  // - 创建测试用户
  
  const { baseURL } = config.projects[0].use;
  
  if (baseURL) {
    console.log(`🌐 Testing against: ${baseURL}`);
    
    // 验证服务器是否可访问
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    try {
      await page.goto(baseURL, { timeout: 30000 });
      console.log('✅ Server is accessible');
    } catch (error) {
      console.error('❌ Server is not accessible:', error);
      throw error;
    } finally {
      await browser.close();
    }
  }
  
  console.log('✅ Global setup completed');
}

export default globalSetup;