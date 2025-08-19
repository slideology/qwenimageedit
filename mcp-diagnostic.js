#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 MCP 诊断工具');
console.log('================');

// 读取MCP配置
const mcpConfigPath = '.cursor/mcp.json';
if (!fs.existsSync(mcpConfigPath)) {
    console.log('❌ 未找到 MCP 配置文件:', mcpConfigPath);
    process.exit(1);
}

const mcpConfig = JSON.parse(fs.readFileSync(mcpConfigPath, 'utf8'));
console.log('📋 MCP 配置:');
console.log(JSON.stringify(mcpConfig, null, 2));

// 测试每个MCP服务器
async function testMcpServer(name, config) {
    console.log(`\n🧪 测试 MCP 服务器: ${name}`);
    console.log(`命令: ${config.command} ${config.args.join(' ')}`);
    
    return new Promise((resolve) => {
        const child = spawn(config.command, config.args, {
            env: { ...process.env, ...config.env },
            stdio: ['pipe', 'pipe', 'pipe']
        });
        
        let stdout = '';
        let stderr = '';
        
        child.stdout.on('data', (data) => {
            stdout += data.toString();
        });
        
        child.stderr.on('data', (data) => {
            stderr += data.toString();
        });
        
        const timeout = setTimeout(() => {
            child.kill();
            console.log(`⏰ ${name} 超时 (5秒)`);
            resolve({ success: false, reason: 'timeout' });
        }, 5000);
        
        child.on('close', (code) => {
            clearTimeout(timeout);
            if (code === 0) {
                console.log(`✅ ${name} 启动成功`);
                resolve({ success: true, stdout, stderr });
            } else {
                console.log(`❌ ${name} 启动失败 (退出码: ${code})`);
                console.log('STDOUT:', stdout);
                console.log('STDERR:', stderr);
                resolve({ success: false, code, stdout, stderr });
            }
        });
        
        child.on('error', (error) => {
            clearTimeout(timeout);
            console.log(`❌ ${name} 启动错误:`, error.message);
            resolve({ success: false, error: error.message });
        });
    });
}

async function main() {
    const results = {};
    
    for (const [name, config] of Object.entries(mcpConfig.mcpServers)) {
        results[name] = await testMcpServer(name, config);
    }
    
    console.log('\n📊 测试结果汇总:');
    console.log('==================');
    
    for (const [name, result] of Object.entries(results)) {
        if (result.success) {
            console.log(`✅ ${name}: 可用`);
        } else {
            console.log(`❌ ${name}: 不可用 (${result.reason || result.error || '未知错误'})`);
        }
    }
    
    const successCount = Object.values(results).filter(r => r.success).length;
    const totalCount = Object.keys(results).length;
    
    console.log(`\n🎯 总结: ${successCount}/${totalCount} 个 MCP 服务器可用`);
    
    if (successCount === 0) {
        console.log('\n💡 建议:');
        console.log('1. 检查网络连接');
        console.log('2. 确保 Node.js 和 npm 已正确安装');
        console.log('3. 尝试手动安装 MCP 包:');
        console.log('   npm install -g @browsermcp/mcp');
        console.log('   npm install -g @upstash/context7-mcp');
    }
}

main().catch(console.error);