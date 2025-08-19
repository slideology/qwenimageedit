#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');

console.log('🔍 MCP修复验证工具');
console.log('==================');

// 检查所有配置文件
const configs = [
    '.cursor/mcp.json',
    '.cursor/mcp-fixed.json', 
    '.cursor/mcp-scripts.json',
    '../../Library/Application Support/CodeBuddy/User/globalStorage/tencent.planning-genie/settings/codebuddy_mcp_settings.json'
];

console.log('📋 检查配置文件:');
configs.forEach(config => {
    if (fs.existsSync(config)) {
        console.log(`✅ ${config} - 存在`);
        try {
            const content = JSON.parse(fs.readFileSync(config, 'utf8'));
            const serverCount = Object.keys(content.mcpServers || {}).length;
            console.log(`   配置了 ${serverCount} 个MCP服务器`);
        } catch (e) {
            console.log(`   ❌ JSON格式错误: ${e.message}`);
        }
    } else {
        console.log(`❌ ${config} - 不存在`);
    }
});

// 检查MCP包
console.log('\n📦 检查MCP包:');
const packages = [
    'node_modules/@browsermcp/mcp/dist/index.js',
    'node_modules/@upstash/context7-mcp/dist/index.js'
];

packages.forEach(pkg => {
    if (fs.existsSync(pkg)) {
        console.log(`✅ ${pkg} - 存在`);
    } else {
        console.log(`❌ ${pkg} - 不存在`);
    }
});

// 检查启动脚本
console.log('\n🚀 检查启动脚本:');
const scripts = [
    'scripts/start-mcp-browser.js',
    'scripts/start-mcp-context7.js'
];

scripts.forEach(script => {
    if (fs.existsSync(script)) {
        console.log(`✅ ${script} - 存在`);
    } else {
        console.log(`❌ ${script} - 不存在`);
    }
});

console.log('\n🎯 修复状态总结:');
console.log('================');

const allConfigsExist = configs.every(c => fs.existsSync(c));
const allPackagesExist = packages.every(p => fs.existsSync(p));
const allScriptsExist = scripts.every(s => fs.existsSync(s));

if (allConfigsExist && allPackagesExist && allScriptsExist) {
    console.log('✅ MCP修复完成！');
    console.log('');
    console.log('📝 下一步操作:');
    console.log('1. 重启CodeBuddy以重新加载MCP配置');
    console.log('2. 检查CodeBuddy是否显示MCP服务器已连接');
    console.log('3. 如果仍有问题，可以尝试不同的配置文件');
} else {
    console.log('❌ MCP修复未完成，存在缺失文件');
}