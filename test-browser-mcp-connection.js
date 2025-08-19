#!/usr/bin/env node

// Browser MCP 连接测试脚本
const { spawn } = require('child_process');

console.log('🧪 测试Browser MCP连接...');
console.log('================================\n');

// 测试1: 检查包是否可以正常启动
console.log('📋 测试1: 检查Browser MCP包启动');
const testChild = spawn('npx', ['@browsermcp/mcp', '--help'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

let output = '';
let errorOutput = '';

testChild.stdout.on('data', (data) => {
  output += data.toString();
});

testChild.stderr.on('data', (data) => {
  errorOutput += data.toString();
});

testChild.on('close', (code) => {
  console.log(`✅ Browser MCP包测试完成，退出代码: ${code}`);
  
  if (code === 0) {
    console.log('📄 输出内容:');
    console.log(output);
    console.log('\n🎉 Browser MCP包工作正常！');
    
    // 测试2: 尝试启动MCP服务器
    console.log('\n📋 测试2: 启动MCP服务器进行连接测试');
    testMCPServer();
  } else {
    console.log('❌ Browser MCP包测试失败');
    console.log('错误输出:', errorOutput);
  }
});

function testMCPServer() {
  console.log('🚀 启动Browser MCP服务器...');
  
  const serverChild = spawn('npx', ['@browsermcp/mcp'], {
    stdio: ['pipe', 'pipe', 'pipe']
  });
  
  let serverOutput = '';
  let serverError = '';
  
  serverChild.stdout.on('data', (data) => {
    serverOutput += data.toString();
    console.log('📤 服务器输出:', data.toString().trim());
  });
  
  serverChild.stderr.on('data', (data) => {
    serverError += data.toString();
    console.log('⚠️ 服务器错误:', data.toString().trim());
  });
  
  // 5秒后关闭测试
  setTimeout(() => {
    console.log('\n⏰ 测试时间结束，关闭服务器...');
    serverChild.kill('SIGTERM');
    
    setTimeout(() => {
      console.log('\n📊 测试结果总结:');
      console.log('- Browser MCP包: ✅ 正常');
      console.log('- 服务器启动: ', serverOutput.length > 0 ? '✅ 成功' : '❌ 失败');
      console.log('- 错误信息: ', serverError.length > 0 ? '⚠️ 有错误' : '✅ 无错误');
      
      if (serverError.length > 0) {
        console.log('\n🔍 错误详情:');
        console.log(serverError);
      }
      
      console.log('\n💡 建议:');
      console.log('1. 将 .cursor/mcp.json 替换为 .cursor/mcp-final.json 的内容');
      console.log('2. 重启CodeBuddy以应用新的MCP配置');
      console.log('3. 使用npx方式启动可以避免ES模块兼容性问题');
      
      process.exit(0);
    }, 1000);
  }, 5000);
}