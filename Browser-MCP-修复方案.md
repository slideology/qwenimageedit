# Browser MCP 连接问题修复方案

## 🔍 问题诊断结果

通过对比Context7 MCP（正常工作）和Browser MCP（连接失败），发现了关键差异：

### 根本原因
1. **模块类型不兼容**：Browser MCP使用ES模块（`"type": "module"`），而当前启动脚本使用CommonJS方式
2. **启动方式错误**：直接调用`node dist/index.js`无法正确处理ES模块
3. **依赖解析问题**：ES模块需要特殊的Node.js参数支持

### 测试结果
✅ Browser MCP包本身正常工作  
✅ 可以通过`npx @browsermcp/mcp`正常启动  
❌ 当前`.cursor/mcp.json`配置无法连接  

## 🛠️ 解决方案

### 方案1: 使用npx启动（推荐）
将`.cursor/mcp.json`内容替换为：

```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": ["@browsermcp/mcp"],
      "env": {
        "NODE_ENV": "development"
      }
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"],
      "env": {
        "NODE_ENV": "development"
      }
    }
  }
}
```

### 方案2: ES模块兼容启动
如果需要使用自定义脚本，使用`scripts/start-mcp-browser-fixed.js`：

```javascript
const child = spawn('node', [
  '--experimental-modules',
  '--es-module-specifier-resolution=node',
  mcpPath
], {
  env: { 
    ...process.env, 
    NODE_OPTIONS: '--experimental-modules --es-module-specifier-resolution=node'
  }
});
```

## 📋 实施步骤

1. **备份当前配置**：
   ```bash
   cp .cursor/mcp.json .cursor/mcp-backup.json
   ```

2. **应用新配置**：
   ```bash
   cp .cursor/mcp-final.json .cursor/mcp.json
   ```

3. **重启CodeBuddy**：
   - 完全关闭CodeBuddy
   - 重新打开项目
   - 等待MCP服务器连接

4. **验证连接**：
   - 检查MCP服务器状态
   - 测试Browser MCP工具调用

## 🔧 技术原理

### Context7 vs Browser MCP 差异对比

| 特性 | Context7 MCP | Browser MCP |
|------|-------------|-------------|
| 模块类型 | CommonJS | ES Module |
| package.json type | 未设置 | "module" |
| 启动方式 | 直接node调用 | 需要ES模块支持 |
| 依赖处理 | 标准require | import/export |

### 为什么npx方式有效
- npx会自动处理ES模块兼容性
- 自动解析依赖和环境变量
- 避免了手动配置Node.js参数的复杂性

## 🎯 预期效果

修复后，Browser MCP将提供以下功能：
- `browser_navigate`: 导航到URL
- `browser_snapshot`: 捕获页面快照
- `browser_click`: 点击页面元素
- `browser_type`: 输入文本
- `browser_screenshot`: 截图
- 其他浏览器自动化功能

## 📝 注意事项

1. **重启必要性**：修改MCP配置后必须重启CodeBuddy
2. **环境兼容性**：确保Node.js版本支持ES模块（Node.js 14+）
3. **网络依赖**：npx方式需要网络连接来解析包
4. **性能考虑**：npx启动可能比直接node调用稍慢

---

*基于MCP Context7技术文档和实际测试结果生成*