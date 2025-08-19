import { FullConfig } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

async function globalTeardown(config: FullConfig) {
  console.log('🧹 开始全局测试清理...');
  
  try {
    // 清理测试环境变量
    delete process.env.TEST_BASE_URL;
    delete process.env.TEST_SETUP_COMPLETE;
    
    // 生成测试报告摘要
    const testResultsDir = 'test-results';
    const reportSummary = {
      timestamp: new Date().toISOString(),
      testRun: {
        completed: true,
        duration: Date.now() - (global as any).testStartTime || 0
      },
      environment: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch
      },
      configuration: {
        projects: config.projects.map(p => p.name),
        workers: config.workers || 'undefined'
      }
    };
    
    // 确保测试结果目录存在
    if (!fs.existsSync(testResultsDir)) {
      fs.mkdirSync(testResultsDir, { recursive: true });
    }
    
    // 写入测试摘要
    const summaryPath = path.join(testResultsDir, 'test-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(reportSummary, null, 2));
    
    console.log(`📊 测试摘要已保存到: ${summaryPath}`);
    
    // 清理临时文件
    const tempFiles = [
      'test-results/temp',
      'test-results/.tmp'
    ];
    
    for (const tempPath of tempFiles) {
      if (fs.existsSync(tempPath)) {
        fs.rmSync(tempPath, { recursive: true, force: true });
        console.log(`🗑️  已清理临时文件: ${tempPath}`);
      }
    }
    
    // 生成测试统计
    const resultsJsonPath = path.join(testResultsDir, 'results.json');
    if (fs.existsSync(resultsJsonPath)) {
      try {
        const resultsData = JSON.parse(fs.readFileSync(resultsJsonPath, 'utf8'));
        
        const stats = {
          total: resultsData.suites?.reduce((acc: number, suite: any) => {
            return acc + (suite.specs?.length || 0);
          }, 0) || 0,
          passed: 0,
          failed: 0,
          skipped: 0
        };
        
        // 计算测试结果统计
        if (resultsData.suites) {
          resultsData.suites.forEach((suite: any) => {
            if (suite.specs) {
              suite.specs.forEach((spec: any) => {
                if (spec.tests) {
                  spec.tests.forEach((test: any) => {
                    if (test.results) {
                      test.results.forEach((result: any) => {
                        switch (result.status) {
                          case 'passed':
                            stats.passed++;
                            break;
                          case 'failed':
                            stats.failed++;
                            break;
                          case 'skipped':
                            stats.skipped++;
                            break;
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
        
        console.log('📈 测试统计:');
        console.log(`   - 总计: ${stats.total}`);
        console.log(`   - 通过: ${stats.passed} ✅`);
        console.log(`   - 失败: ${stats.failed} ❌`);
        console.log(`   - 跳过: ${stats.skipped} ⏭️`);
        
        if (stats.failed > 0) {
          console.log(`⚠️  有 ${stats.failed} 个测试失败，请检查测试报告`);
        } else {
          console.log('🎉 所有测试都通过了！');
        }
        
        // 保存统计信息
        const statsPath = path.join(testResultsDir, 'test-stats.json');
        fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));
        
      } catch (error) {
        console.warn('⚠️  无法解析测试结果文件:', error);
      }
    }
    
    // 检查是否有截图和视频文件
    const artifactDirs = ['test-results/screenshots', 'test-results/videos', 'test-results/traces'];
    
    for (const dir of artifactDirs) {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        if (files.length > 0) {
          console.log(`📁 ${path.basename(dir)}: ${files.length} 个文件`);
        }
      }
    }
    
    // 输出有用的信息
    console.log('\n📋 测试完成信息:');
    console.log(`   - 测试报告: test-results/index.html`);
    console.log(`   - JSON结果: test-results/results.json`);
    console.log(`   - JUnit报告: test-results/results.xml`);
    
    if (process.env.CI) {
      console.log('🔄 CI环境检测到，保留所有测试产物');
    } else {
      console.log('💡 提示: 运行 "npx playwright show-report" 查看详细报告');
    }
    
    console.log('✅ 全局测试清理完成');
    
  } catch (error) {
    console.error('❌ 全局清理失败:', error);
    // 不抛出错误，避免影响测试结果
  }
}

export default globalTeardown;