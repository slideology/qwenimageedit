import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  console.log('🧹 Starting Playwright global teardown...');
  
  // 可以在这里进行全局的清理工作，比如：
  // - 清理测试数据
  // - 关闭测试数据库连接
  // - 清理临时文件
  // - 发送测试报告
  
  // 清理测试结果目录中的临时文件
  try {
    // 这里可以添加具体的清理逻辑
    console.log('🗑️  Cleaning up temporary files...');
  } catch (error) {
    console.warn('⚠️  Warning during cleanup:', error);
  }
  
  console.log('✅ Global teardown completed');
}

export default globalTeardown;