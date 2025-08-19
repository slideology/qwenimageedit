#!/usr/bin/env node

// Context7 MCP 启动脚本
const { spawn } = require('child_process');
const path = require('path');

const mcpPath = path.join(__dirname, '../node_modules/@upstash/context7-mcp/dist/index.js');

const child = spawn('node', [mcpPath], {
  stdio: ['inherit', 'inherit', 'inherit'],
  env: { ...process.env, NODE_ENV: 'development' }
});

child.on('error', (error) => {
  console.error('Context7 MCP 启动失败:', error);
  process.exit(1);
});

child.on('close', (code) => {
  console.log(`Context7 MCP 退出，代码: ${code}`);
  process.exit(code);
});