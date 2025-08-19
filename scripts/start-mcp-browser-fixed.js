#!/usr/bin/env node

// Browser MCP 修复版启动脚本 - 支持ES模块
const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 启动Browser MCP (ES模块支持版本)...');

const mcpPath = path.join(__dirname, '../node_modules/@browsermcp/mcp/dist/index.js');

// 检查文件是否存在
const fs = require('fs');
if (!fs.existsSync(mcpPath)) {
  console.error('❌ Browser MCP文件不存在:', mcpPath);
  process.exit(1);
}

console.log('📁 MCP路径:', mcpPath);

// 使用ES模块兼容的启动方式
const child = spawn('node', [
  '--experimental-modules',  // 启用ES模块支持
  '--es-module-specifier-resolution=node',  // Node.js模块解析
  mcpPath
], {
  stdio: ['inherit', 'inherit', 'inherit'],
  env: { 
    ...process.env, 
    NODE_ENV: 'development',
    NODE_OPTIONS: '--experimental-modules --es-module-specifier-resolution=node'
  }
});

child.on('error', (error) => {
  console.error('❌ Browser MCP 启动失败:', error);
  console.log('🔧 尝试备用启动方法...');
  
  // 备用方法：直接使用npx
  const backupChild = spawn('npx', ['@browsermcp/mcp'], {
    stdio: ['inherit', 'inherit', 'inherit'],
    env: { ...process.env, NODE_ENV: 'development' }
  });
  
  backupChild.on('error', (backupError) => {
    console.error('❌ 备用方法也失败:', backupError);
    process.exit(1);
  });
  
  backupChild.on('close', (code) => {
    console.log(`🔄 Browser MCP (备用) 退出，代码: ${code}`);
    process.exit(code);
  });
});

child.on('close', (code) => {
  console.log(`✅ Browser MCP 退出，代码: ${code}`);
  process.exit(code);
});

// 添加优雅关闭处理
process.on('SIGINT', () => {
  console.log('🛑 收到中断信号，正在关闭Browser MCP...');
  child.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('🛑 收到终止信号，正在关闭Browser MCP...');
  child.kill('SIGTERM');
});