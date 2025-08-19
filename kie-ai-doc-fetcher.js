#!/usr/bin/env node

const axios = require('axios');
const fs = require('fs');

console.log('🔍 KIE.AI Veo3 API文档获取器');
console.log('基于MCP Context7获取的Axios技术文档构建');
console.log('================================\n');

// 基于Context7 MCP获取的Axios最佳实践配置
const httpClient = axios.create({
  timeout: 30000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1'
  },
  maxRedirects: 5,
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  }
});

// 添加请求拦截器
httpClient.interceptors.request.use(
  (config) => {
    console.log(`🚀 发送请求: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ 请求错误:', error.message);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
httpClient.interceptors.response.use(
  (response) => {
    console.log(`✅ 响应成功: ${response.status} ${response.config.url}`);
    console.log(`📊 内容长度: ${response.data.length} 字符`);
    return response;
  },
  (error) => {
    console.error('❌ 响应错误:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

async function fetchKieAIDocumentation() {
  const targetUrl = 'https://docs.kie.ai/veo3-api/quickstart';
  
  try {
    console.log(`🌐 正在获取KIE.AI Veo3文档: ${targetUrl}`);
    
    const response = await httpClient.get(targetUrl);
    
    // 保存原始HTML
    const htmlContent = response.data;
    fs.writeFileSync('kie-ai-veo3-raw.html', htmlContent);
    console.log('💾 原始HTML已保存到: kie-ai-veo3-raw.html');
    
    // 提取关键信息
    const apiInfo = extractAPIInfo(htmlContent);
    
    // 生成结构化文档
    const structuredDoc = generateStructuredDoc(apiInfo);
    fs.writeFileSync('kie-ai-veo3-structured.md', structuredDoc);
    console.log('📄 结构化文档已保存到: kie-ai-veo3-structured.md');
    
    return apiInfo;
    
  } catch (error) {
    console.error('❌ 获取文档失败:', error.message);
    
    // 尝试备用方法
    console.log('🔄 尝试备用获取方法...');
    return await tryAlternativeMethods(targetUrl);
  }
}

function extractAPIInfo(htmlContent) {
  console.log('🔍 提取API信息...');
  
  const apiInfo = {
    baseUrl: '',
    endpoints: [],
    authentication: '',
    parameters: [],
    examples: [],
    rateLimit: '',
    errors: []
  };
  
  // 使用正则表达式提取关键信息
  const patterns = {
    baseUrl: /(?:base[_\s]*url|api[_\s]*endpoint)[:\s]*['"](https?:\/\/[^'"]+)['"]/gi,
    endpoints: /(?:POST|GET|PUT|DELETE)\s+([\/\w\-{}]+)/gi,
    apiKey: /(?:api[_\s]*key|authorization|bearer)[:\s]*['"']([^'"']+)['"']/gi,
    rateLimit: /(?:rate[_\s]*limit|requests?[_\s]*per)[:\s]*(\d+[^<\n]*)/gi
  };
  
  // 提取基础URL
  let match;
  while ((match = patterns.baseUrl.exec(htmlContent)) !== null) {
    apiInfo.baseUrl = match[1];
    console.log('🔗 发现API基础URL:', match[1]);
  }
  
  // 提取端点
  while ((match = patterns.endpoints.exec(htmlContent)) !== null) {
    apiInfo.endpoints.push(match[1]);
    console.log('📍 发现API端点:', match[1]);
  }
  
  // 提取认证信息
  while ((match = patterns.apiKey.exec(htmlContent)) !== null) {
    apiInfo.authentication = match[1];
    console.log('🔐 发现认证信息');
  }
  
  // 提取速率限制
  while ((match = patterns.rateLimit.exec(htmlContent)) !== null) {
    apiInfo.rateLimit = match[1];
    console.log('⏱️ 发现速率限制:', match[1]);
  }
  
  return apiInfo;
}

function generateStructuredDoc(apiInfo) {
  return `# KIE.AI Veo3 API 文档分析

## 📋 基本信息
- **获取时间**: ${new Date().toISOString()}
- **分析工具**: MCP Context7 + Axios
- **数据来源**: https://docs.kie.ai/veo3-api/quickstart

## 🔗 API配置
${apiInfo.baseUrl ? `- **基础URL**: ${apiInfo.baseUrl}` : '- **基础URL**: 未找到'}
${apiInfo.authentication ? `- **认证方式**: ${apiInfo.authentication}` : '- **认证方式**: 未找到'}
${apiInfo.rateLimit ? `- **速率限制**: ${apiInfo.rateLimit}` : '- **速率限制**: 未找到'}

## 📍 API端点
${apiInfo.endpoints.length > 0 ? 
  apiInfo.endpoints.map(endpoint => `- ${endpoint}`).join('\n') : 
  '- 未找到具体端点信息'}

## 💡 使用建议
基于MCP Context7提供的Axios最佳实践：

\`\`\`javascript
const axios = require('axios');

const kieAIClient = axios.create({
  baseURL: '${apiInfo.baseUrl || 'https://api.kie.ai/v3'}',
  timeout: 30000,
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

// 文本生成视频示例
async function generateVideo(prompt) {
  try {
    const response = await kieAIClient.post('/veo3/text-to-video', {
      prompt: prompt,
      duration: 10,
      quality: 'high'
    });
    return response.data;
  } catch (error) {
    console.error('生成失败:', error.response?.data || error.message);
    throw error;
  }
}
\`\`\`

## 🔧 集成到EarthZoomAI项目
1. 安装依赖: \`npm install axios\`
2. 配置环境变量: \`KIE_AI_API_KEY=your-key\`
3. 使用上述客户端代码
4. 集成到React组件中

---
*本文档基于MCP工具分析生成，建议与官方文档对比验证*
`;
}

async function tryAlternativeMethods(url) {
  console.log('🔄 尝试其他获取方法...');
  
  const alternatives = [
    // 方法1: 使用curl
    async () => {
      const { spawn } = require('child_process');
      return new Promise((resolve, reject) => {
        const curl = spawn('curl', ['-L', '-A', 'Mozilla/5.0', url]);
        let data = '';
        
        curl.stdout.on('data', (chunk) => {
          data += chunk;
        });
        
        curl.on('close', (code) => {
          if (code === 0) {
            resolve(data);
          } else {
            reject(new Error(`curl failed with code ${code}`));
          }
        });
      });
    },
    
    // 方法2: 使用不同的User-Agent
    async () => {
      return await httpClient.get(url, {
        headers: {
          'User-Agent': 'curl/7.68.0'
        }
      });
    }
  ];
  
  for (let i = 0; i < alternatives.length; i++) {
    try {
      console.log(`🔄 尝试方法 ${i + 1}...`);
      const result = await alternatives[i]();
      console.log('✅ 备用方法成功!');
      return typeof result === 'string' ? extractAPIInfo(result) : extractAPIInfo(result.data);
    } catch (error) {
      console.log(`❌ 方法 ${i + 1} 失败:`, error.message);
    }
  }
  
  throw new Error('所有获取方法都失败了');
}

// 主函数
async function main() {
  try {
    const apiInfo = await fetchKieAIDocumentation();
    
    console.log('\n🎉 文档获取完成!');
    console.log('📊 提取的信息:');
    console.log('- 基础URL:', apiInfo.baseUrl || '未找到');
    console.log('- 端点数量:', apiInfo.endpoints.length);
    console.log('- 认证信息:', apiInfo.authentication ? '已找到' : '未找到');
    console.log('- 速率限制:', apiInfo.rateLimit || '未找到');
    
  } catch (error) {
    console.error('💥 程序执行失败:', error.message);
    process.exit(1);
  }
}

// 运行程序
if (require.main === module) {
  main();
}

module.exports = { fetchKieAIDocumentation, extractAPIInfo };