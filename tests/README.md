# Earth Zoom AI 测试套件

这是 Earth Zoom AI 项目的完整测试套件，使用 Playwright 进行端到端测试，确保网站的功能性、性能和用户体验。

## 📁 测试结构

```
tests/
├── fixtures/                 # 测试夹具和工具
│   ├── page-objects.ts       # 页面对象模型
│   ├── test-data.ts          # 测试数据
│   ├── global-setup.ts       # 全局设置
│   └── global-teardown.ts    # 全局清理
├── unit/                     # 单元测试
│   └── homepage.spec.ts      # 首页功能测试
├── integration/              # 集成测试
│   └── integration.spec.ts   # 组件交互测试
├── e2e/                      # 端到端测试
│   └── e2e.spec.ts          # 完整用户流程测试
├── visual-regression/        # 视觉回归测试
│   └── visual-regression.spec.ts
├── performance/              # 性能测试
│   └── performance.spec.ts
├── accessibility/            # 可访问性测试
│   └── accessibility.spec.ts
├── seo/                      # SEO测试
│   └── seo.spec.ts
├── responsive/               # 响应式测试
│   └── responsive.spec.ts
├── navigation/               # 导航测试
│   └── navigation.spec.ts
├── scripts/                  # 测试脚本
│   └── run-tests.sh         # 测试运行脚本
└── playwright.config.ts      # Playwright配置
```

## 🚀 快速开始

### 1. 安装依赖

```bash
# 安装 Playwright
npm install @playwright/test

# 安装浏览器
npx playwright install
```

### 2. 运行测试

```bash
# 运行所有测试
npm run test

# 或使用测试脚本
./tests/scripts/run-tests.sh all

# 运行特定类型的测试
./tests/scripts/run-tests.sh e2e
./tests/scripts/run-tests.sh performance
./tests/scripts/run-tests.sh accessibility
```

### 3. 查看测试报告

```bash
# 生成并查看HTML报告
npx playwright show-report
```

## 📋 测试类型详解

### 🏠 首页测试 (Homepage)
- **文件**: `unit/homepage.spec.ts`
- **覆盖范围**:
  - 页面基本元素加载
  - Hero区域交互
  - 特色标签显示
  - 功能展示区域
  - 用户评价区域
  - FAQ交互
  - Newsletter订阅
  - 滚动行为
  - 外部链接验证
  - 性能检查
  - 错误处理

### 🧭 导航测试 (Navigation)
- **文件**: `navigation/navigation.spec.ts`
- **覆盖范围**:
  - Header导航
  - 锚点导航
  - 滚动时Header状态
  - 移动端菜单
  - Footer导航
  - 跨设备一致性
  - 导航性能

### 📱 响应式测试 (Responsive)
- **文件**: `responsive/responsive.spec.ts`
- **覆盖范围**:
  - 移动端显示
  - 平板端显示
  - 桌面端显示
  - 断点切换
  - 移动端交互
  - 图片适配
  - 性能测试

### ⚡ 性能测试 (Performance)
- **文件**: `performance/performance.spec.ts`
- **覆盖范围**:
  - 页面加载性能
  - 运行时性能
  - 网络性能
  - 移动端性能
  - Core Web Vitals

### 🔍 SEO测试 (SEO)
- **文件**: `seo/seo.spec.ts`
- **覆盖范围**:
  - Meta标签
  - Open Graph
  - Twitter Cards
  - 结构化数据
  - HTML语义化
  - 页面性能SEO
  - 内容SEO

### ♿ 可访问性测试 (Accessibility)
- **文件**: `accessibility/accessibility.spec.ts`
- **覆盖范围**:
  - 键盘导航
  - ARIA属性
  - 颜色对比度
  - 表单可访问性
  - 焦点管理
  - 屏幕阅读器支持
  - 移动端可访问性

### 🎨 视觉回归测试 (Visual Regression)
- **文件**: `visual-regression/visual-regression.spec.ts`
- **覆盖范围**:
  - 页面截图对比
  - 组件截图对比
  - 响应式截图
  - 交互状态截图
  - 主题变化截图
  - 跨浏览器对比

### 🔗 集成测试 (Integration)
- **文件**: `integration/integration.spec.ts`
- **覆盖范围**:
  - 组件间交互
  - 表单与反馈
  - 响应式交互
  - 性能与用户体验
  - 错误处理与恢复
  - 数据流与状态管理

### 🎯 端到端测试 (E2E)
- **文件**: `e2e/e2e.spec.ts`
- **覆盖范围**:
  - 完整用户流程
  - 真实场景模拟
  - 错误恢复场景
  - 性能压力测试

## 🛠️ 测试脚本使用

### 基本用法

```bash
# 给脚本执行权限
chmod +x tests/scripts/run-tests.sh

# 运行所有测试
./tests/scripts/run-tests.sh all

# 运行特定测试
./tests/scripts/run-tests.sh e2e
./tests/scripts/run-tests.sh performance
./tests/scripts/run-tests.sh accessibility
```

### 高级选项

```bash
# 指定浏览器
./tests/scripts/run-tests.sh e2e --browser chromium

# 有头模式运行
./tests/scripts/run-tests.sh visual --headed

# 启用追踪和视频录制
./tests/scripts/run-tests.sh e2e --trace --video

# 调试模式
./tests/scripts/run-tests.sh integration --debug

# UI模式
./tests/scripts/run-tests.sh all --ui

# 指定并行工作进程
./tests/scripts/run-tests.sh all --workers 4
```

## 📊 测试报告

### HTML报告
测试完成后会自动生成HTML报告，包含：
- 测试结果概览
- 失败测试详情
- 截图和视频
- 追踪信息
- 性能指标

### JSON报告
结构化的测试结果数据，用于CI/CD集成：
```bash
test-results/results.json
```

### JUnit报告
兼容CI/CD系统的XML格式报告：
```bash
test-results/results.xml
```

## 🔧 配置说明

### Playwright配置
主要配置文件：`playwright.config.ts`

```typescript
// 主要配置项
{
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
}
```

### 浏览器项目
- **Desktop Chrome** - 主要测试浏览器
- **Desktop Firefox** - 跨浏览器兼容性
- **Desktop Safari** - macOS/iOS兼容性
- **Mobile Chrome** - 移动端测试
- **Mobile Safari** - iOS移动端测试

## 📝 编写测试

### 页面对象模型
使用页面对象模式组织测试代码：

```typescript
// 示例：HomePage类
class HomePage {
  constructor(private page: Page) {}
  
  async goto() {
    await this.page.goto('/');
  }
  
  get heroTitle() {
    return this.page.locator('h1').first();
  }
}
```

### 测试数据
集中管理测试数据：

```typescript
// test-data.ts
export const testData = {
  validEmails: ['test@example.com'],
  invalidEmails: ['invalid-email'],
  // ...
};
```

### 测试结构

```typescript
test.describe('功能模块', () => {
  test.beforeEach(async ({ page }) => {
    // 测试前置条件
  });
  
  test('具体测试用例', async ({ page }) => {
    // 测试步骤
    // 断言验证
  });
});
```

## 🚨 故障排除

### 常见问题

1. **浏览器未安装**
   ```bash
   npx playwright install
   ```

2. **开发服务器未启动**
   ```bash
   npm run dev
   ```

3. **端口冲突**
   - 检查端口3000是否被占用
   - 修改配置中的baseURL

4. **测试超时**
   - 增加timeout配置
   - 检查网络连接
   - 优化测试代码

### 调试技巧

1. **使用调试模式**
   ```bash
   ./tests/scripts/run-tests.sh e2e --debug
   ```

2. **启用追踪**
   ```bash
   ./tests/scripts/run-tests.sh e2e --trace
   ```

3. **有头模式运行**
   ```bash
   ./tests/scripts/run-tests.sh e2e --headed
   ```

4. **查看控制台日志**
   ```typescript
   page.on('console', msg => console.log(msg.text()));
   ```

## 🔄 CI/CD集成

### GitHub Actions示例

```yaml
name: E2E Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run build
      - run: npm run test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: test-results/
```

## 📈 最佳实践

### 测试编写
1. **使用描述性的测试名称**
2. **保持测试独立性**
3. **使用页面对象模式**
4. **合理使用等待策略**
5. **添加有意义的断言**

### 性能优化
1. **并行运行测试**
2. **合理设置重试次数**
3. **优化选择器**
4. **避免不必要的等待**

### 维护性
1. **定期更新依赖**
2. **重构重复代码**
3. **保持测试数据最新**
4. **监控测试执行时间**

## 📞 支持

如果遇到问题或需要帮助：

1. 查看 [Playwright官方文档](https://playwright.dev/)
2. 检查项目的GitHub Issues
3. 联系开发团队

---

**注意**: 确保在运行测试前启动开发服务器，测试脚本会自动检查并启动服务器。