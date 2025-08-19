#!/usr/bin/env node

const { spawn } = require('child_process');

async function testDirectMCP() {
  console.log('🔍 直接测试MCP服务器通信');
  console.log('============================');

  // 测试Browser MCP
  console.log('\n🌐 测试Browser MCP直接通信...');
  
  try {
    const browserProcess = spawn('node', ['node_modules/@browsermcp/mcp/dist/index.js'], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    // 发送初始化请求
    const initRequest = {
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {
          tools: {}
        },
        clientInfo: {
          name: 'test-client',
          version: '1.0.0'
        }
      }
    };

    browserProcess.stdin.write(JSON.stringify(initRequest) + '\n');

    // 监听响应
    let responseData = '';
    browserProcess.stdout.on('data', (data) => {
      responseData += data.toString();
      console.log('📤 Browser MCP响应:', data.toString().trim());
    });

    browserProcess.stderr.on('data', (data) => {
      console.log('⚠️ Browser MCP错误:', data.toString().trim());
    });

    // 等待响应
    await new Promise(resolve => setTimeout(resolve, 3000));

    // 发送导航请求
    const navRequest = {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: {
        name: 'browser_navigate',
        arguments: {
          url: 'https://docs.kie.ai/veo3-api/quickstart'
        }
      }
    };

    console.log('🚀 发送导航请求...');
    browserProcess.stdin.write(JSON.stringify(navRequest) + '\n');

    // 等待导航响应
    await new Promise(resolve => setTimeout(resolve, 5000));

    browserProcess.kill();
    console.log('✅ Browser MCP测试完成');

  } catch (error) {
    console.error('❌ Browser MCP测试失败:', error.message);
  }

  // 测试Context7 MCP
  console.log('\n📚 测试Context7 MCP直接通信...');
  
  try {
    const context7Process = spawn('node', ['node_modules/@upstash/context7-mcp/dist/index.js'], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    // 发送初始化请求
    const initRequest = {
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {
          tools: {}
        },
        clientInfo: {
          name: 'test-client',
          version: '1.0.0'
        }
      }
    };

    context7Process.stdin.write(JSON.stringify(initRequest) + '\n');

    // 监听响应
    context7Process.stdout.on('data', (data) => {
      console.log('📤 Context7 MCP响应:', data.toString().trim());
    });

    context7Process.stderr.on('data', (data) => {
      console.log('⚠️ Context7 MCP错误:', data.toString().trim());
    });

    // 等待响应
    await new Promise(resolve => setTimeout(resolve, 3000));

    context7Process.kill();
    console.log('✅ Context7 MCP测试完成');

  } catch (error) {
    console.error('❌ Context7 MCP测试失败:', error.message);
  }

  console.log('\n🎉 直接MCP测试完成!');
}

// 运行测试
if (require.main === module) {
  testDirectMCP().catch(console.error);
}