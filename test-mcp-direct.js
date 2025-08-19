#!/usr/bin/env node

const { spawn } = require('child_process');

console.log('🔍 直接测试MCP服务器通信');
console.log('========================');

// 测试browser MCP
console.log('\n🌐 测试Browser MCP服务器...');
const browserMcp = spawn('node', ['node_modules/@browsermcp/mcp/dist/index.js'], {
    stdio: ['pipe', 'pipe', 'pipe']
});

let browserOutput = '';
browserMcp.stdout.on('data', (data) => {
    browserOutput += data.toString();
    console.log('Browser MCP输出:', data.toString().trim());
});

browserMcp.stderr.on('data', (data) => {
    console.log('Browser MCP错误:', data.toString().trim());
});

// 发送测试消息
setTimeout(() => {
    const testMessage = JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {
            protocolVersion: "2024-11-05",
            capabilities: {},
            clientInfo: {
                name: "test-client",
                version: "1.0.0"
            }
        }
    }) + '\n';
    
    console.log('发送初始化消息到Browser MCP...');
    browserMcp.stdin.write(testMessage);
}, 1000);

// 测试context7 MCP
console.log('\n📚 测试Context7 MCP服务器...');
const context7Mcp = spawn('node', ['node_modules/@upstash/context7-mcp/dist/index.js'], {
    stdio: ['pipe', 'pipe', 'pipe']
});

let context7Output = '';
context7Mcp.stdout.on('data', (data) => {
    context7Output += data.toString();
    console.log('Context7 MCP输出:', data.toString().trim());
});

context7Mcp.stderr.on('data', (data) => {
    console.log('Context7 MCP错误:', data.toString().trim());
});

// 发送测试消息
setTimeout(() => {
    const testMessage = JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {
            protocolVersion: "2024-11-05",
            capabilities: {},
            clientInfo: {
                name: "test-client",
                version: "1.0.0"
            }
        }
    }) + '\n';
    
    console.log('发送初始化消息到Context7 MCP...');
    context7Mcp.stdin.write(testMessage);
}, 2000);

// 5秒后结束测试
setTimeout(() => {
    console.log('\n📊 测试结果总结:');
    console.log('================');
    
    if (browserOutput.includes('jsonrpc') || browserOutput.includes('result')) {
        console.log('✅ Browser MCP: 通信成功');
    } else {
        console.log('❌ Browser MCP: 通信失败');
    }
    
    if (context7Output.includes('jsonrpc') || context7Output.includes('result')) {
        console.log('✅ Context7 MCP: 通信成功');
    } else {
        console.log('❌ Context7 MCP: 通信失败');
    }
    
    browserMcp.kill();
    context7Mcp.kill();
    process.exit(0);
}, 5000);