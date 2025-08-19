#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');

console.log('🔍 全面MCP功能测试');
console.log('========================\n');

// 测试Context7的具体功能
async function testContext7Functions() {
  console.log('📚 测试Context7具体功能...');
  
  const context7Process = spawn('npx', ['-y', '@upstash/context7-mcp'], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  // 测试resolve-library-id功能
  const resolveRequest = {
    jsonrpc: "2.0",
    id: 1,
    method: "tools/call",
    params: {
      name: "resolve-library-id",
      arguments: {
        libraryName: "react"
      }
    }
  };

  console.log('🔍 测试resolve-library-id功能...');
  context7Process.stdin.write(JSON.stringify(resolveRequest) + '\n');

  // 等待响应
  return new Promise((resolve) => {
    let responseData = '';
    
    context7Process.stdout.on('data', (data) => {
      responseData += data.toString();
      console.log('📤 Context7响应:', responseData);
    });

    context7Process.stderr.on('data', (data) => {
      console.log('⚠️ Context7错误:', data.toString());
    });

    setTimeout(() => {
      context7Process.kill();
      resolve(responseData);
    }, 5000);
  });
}

// 测试Browser MCP的连接状态
async function testBrowserMCPStatus() {
  console.log('🌐 测试Browser MCP连接状态...');
  
  const browserProcess = spawn('npx', ['@browsermcp/mcp'], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  // 测试快照功能
  const snapshotRequest = {
    jsonrpc: "2.0",
    id: 1,
    method: "tools/call",
    params: {
      name: "browser_snapshot",
      arguments: {}
    }
  };

  console.log('📸 测试browser_snapshot功能...');
  browserProcess.stdin.write(JSON.stringify(snapshotRequest) + '\n');

  return new Promise((resolve) => {
    let responseData = '';
    
    browserProcess.stdout.on('data', (data) => {
      responseData += data.toString();
      console.log('📤 Browser MCP响应:', responseData);
    });

    browserProcess.stderr.on('data', (data) => {
      console.log('⚠️ Browser MCP错误:', data.toString());
    });

    setTimeout(() => {
      browserProcess.kill();
      resolve(responseData);
    }, 5000);
  });
}

// 测试可用的MCP工具列表
async function listAvailableMCPTools() {
  console.log('🛠️ 获取可用MCP工具列表...');
  
  const context7Process = spawn('npx', ['-y', '@upstash/context7-mcp'], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  const listToolsRequest = {
    jsonrpc: "2.0",
    id: 1,
    method: "tools/list",
    params: {}
  };

  console.log('📋 请求工具列表...');
  context7Process.stdin.write(JSON.stringify(listToolsRequest) + '\n');

  return new Promise((resolve) => {
    let responseData = '';
    
    context7Process.stdout.on('data', (data) => {
      responseData += data.toString();
      console.log('📤 工具列表响应:', responseData);
    });

    setTimeout(() => {
      context7Process.kill();
      resolve(responseData);
    }, 3000);
  });
}

// 主测试函数
async function runComprehensiveTest() {
  try {
    console.log('🚀 开始全面测试...\n');

    // 测试1: Context7功能
    console.log('=== 测试1: Context7功能 ===');
    await testContext7Functions();
    console.log('✅ Context7功能测试完成\n');

    // 测试2: Browser MCP状态
    console.log('=== 测试2: Browser MCP状态 ===');
    await testBrowserMCPStatus();
    console.log('✅ Browser MCP状态测试完成\n');

    // 测试3: 工具列表
    console.log('=== 测试3: 可用工具列表 ===');
    await listAvailableMCPTools();
    console.log('✅ 工具列表测试完成\n');

    console.log('🎉 全面测试完成!');
    
  } catch (error) {
    console.error('❌ 测试过程中出现错误:', error);
  }
}

// 运行测试
runComprehensiveTest();