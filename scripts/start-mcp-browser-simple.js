#!/usr/bin/env node

// Browser MCP 简化启动脚本
const { spawn } = require('child_process');

console.log('🚀 启动Browser MCP (简化版)...');

// 直接使用npx启动，这是最可靠的方法
const child = spawn('npx', ['@browsermcp/mcp'], {
  stdio: ['inherit', 'inherit', 'inherit'],
  env: { 
    ...process.env, 
    NODE_ENV: 'development'
  }
});

child.on('error', (error) => {
  console.error('❌ Browser MCP 启动失败:', error.message);
  process.exit(1);
});

child.on('close', (code) => {
  console.log(`Browser MCP 退出，代码: ${code}`);
  process.exit(code);
});

console.log('✅ Browser MCP 启动中...');