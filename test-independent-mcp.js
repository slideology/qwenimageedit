#!/usr/bin/env node

const { spawn } = require('child_process');
const readline = require('readline');

class IndependentMCPTester {
  constructor() {
    this.processes = new Map();
  }

  async startMCPServer(name, command, args) {
    console.log(`🚀 启动 ${name} MCP服务器...`);
    
    const process = spawn(command, args, {
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env }
    });

    this.processes.set(name, process);

    // 监听输出
    process.stdout.on('data', (data) => {
      console.log(`📤 [${name}] 输出:`, data.toString().trim());
    });

    process.stderr.on('data', (data) => {
      console.log(`⚠️ [${name}] 错误:`, data.toString().trim());
    });

    process.on('close', (code) => {
      console.log(`🔚 [${name}] 进程结束，退出码: ${code}`);
      this.processes.delete(name);
    });

    // 等待服务器启动
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return process;
  }

  async sendMCPRequest(serverName, request) {
    const process = this.processes.get(serverName);
    if (!process) {
      throw new Error(`MCP服务器 ${serverName} 未运行`);
    }

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('请求超时'));
      }, 10000);

      let responseData = '';
      
      const onData = (data) => {
        responseData += data.toString();
        try {
          const response = JSON.parse(responseData);
          clearTimeout(timeout);
          process.stdout.removeListener('data', onData);
          resolve(response);
        } catch (e) {
          // 继续等待更多数据
        }
      };

      process.stdout.on('data', onData);
      
      // 发送请求
      process.stdin.write(JSON.stringify(request) + '\n');
    });
  }

  async testBrowserMCP() {
    try {
      console.log('\n🌐 测试Browser MCP...');
      
      await this.startMCPServer('browser', 'npx', ['@browsermcp/mcp']);
      
      // 测试导航请求
      const navRequest = {
        jsonrpc: '2.0',
        id: 1,
        method: 'tools/call',
        params: {
          name: 'browser_navigate',
          arguments: {
            url: 'https://docs.kie.ai/veo3-api/quickstart'
          }
        }
      };

      const response = await this.sendMCPRequest('browser', navRequest);
      console.log('✅ Browser MCP响应:', response);
      
      return response;
    } catch (error) {
      console.error('❌ Browser MCP测试失败:', error.message);
      return null;
    }
  }

  async testContext7MCP() {
    try {
      console.log('\n📚 测试Context7 MCP...');
      
      await this.startMCPServer('context7', 'npx', ['@upstash/context7-mcp']);
      
      // 测试库搜索请求
      const searchRequest = {
        jsonrpc: '2.0',
        id: 2,
        method: 'tools/call',
        params: {
          name: 'resolve-library-id',
          arguments: {
            libraryName: 'kie.ai'
          }
        }
      };

      const response = await this.sendMCPRequest('context7', searchRequest);
      console.log('✅ Context7 MCP响应:', response);
      
      return response;
    } catch (error) {
      console.error('❌ Context7 MCP测试失败:', error.message);
      return null;
    }
  }

  async cleanup() {
    console.log('\n🧹 清理MCP进程...');
    for (const [name, process] of this.processes) {
      console.log(`🔚 终止 ${name} 进程...`);
      process.kill();
    }
    this.processes.clear();
  }

  async runTests() {
    console.log('🔍 独立MCP测试开始');
    console.log('========================');

    try {
      // 并行测试两个MCP服务器
      const [browserResult, context7Result] = await Promise.allSettled([
        this.testBrowserMCP(),
        this.testContext7MCP()
      ]);

      console.log('\n📊 测试结果汇总:');
      console.log('==================');
      
      if (browserResult.status === 'fulfilled' && browserResult.value) {
        console.log('✅ Browser MCP: 可用');
      } else {
        console.log('❌ Browser MCP: 不可用');
      }

      if (context7Result.status === 'fulfilled' && context7Result.value) {
        console.log('✅ Context7 MCP: 可用');
      } else {
        console.log('❌ Context7 MCP: 不可用');
      }

    } catch (error) {
      console.error('💥 测试过程中出现错误:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// 运行测试
if (require.main === module) {
  const tester = new IndependentMCPTester();
  
  // 处理进程退出
  process.on('SIGINT', async () => {
    console.log('\n⚠️ 收到中断信号，正在清理...');
    await tester.cleanup();
    process.exit(0);
  });

  tester.runTests()
    .then(() => {
      console.log('\n🎉 独立MCP测试完成!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 测试失败:', error);
      process.exit(1);
    });
}

module.exports = IndependentMCPTester;