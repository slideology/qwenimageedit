# KIE.AI Veo3 API 文档分析

## 📋 基本信息
- **获取时间**: 2025-07-25T09:53:37.900Z
- **分析工具**: MCP Context7 + Axios
- **数据来源**: https://docs.kie.ai/veo3-api/quickstart

## 🔗 API配置
- **基础URL**: 未找到
- **认证方式**: \
- **速率限制**: 未找到

## 📍 API端点
- started
- started
- started
- started
- Veo3
- Veo3
- 1080P
- 1080P
- Your
- HD
- started
- started
- Your
- results
- HD
- the
- 1080P
- better
- 1080P
- Details
- started
- /api/v1/veo/generate
- /api/v1/veo/record-info
- Veo3
- /api/v1/veo/get-1080p-video
- 1080P
- the
- started
- /api/v1/generate
- /api/v1/generate/extend
- /api/v1/generate/upload-cover
- style
- /api/v1/generate/upload-extend
- Music
- /api/v1/generate/record-info
- Timestamped
- /api/v1/generate/get-timestamped-lyrics
- /api/v1/style/generate
- /api/v1/lyrics
- Lyrics
- /api/v1/lyrics/record-info
- /api/v1/wav/generate
- WAV
- /api/v1/wav/record-info
- /api/v1/vocal-removal/generate
- Vocal
- /api/v1/vocal-removal/record-info
- /api/v1/mp4/generate
- request
- Music
- /api/v1/mp4/record-info
- started
- 4o
- /api/v1/gpt4o-image/generate
- request
- 4o
- /api/v1/gpt4o-image/record-info
- Direct
- Direct
- /api/v1/gpt4o-image/download-url
- started
- /api/v1/flux/kontext/generate
- request
- Image
- /api/v1/flux/kontext/record-info
- started
- /api/v1/mj/generate
- request
- Midjourney
- /api/v1/mj/record-info
- /api/v1/mj/generateUpscale
- /api/v1/mj/generateVary
- started
- /api/v1/runway/generate
- request
- AI
- /api/v1/runway/record-detail
- /api/v1/runway/extend
- started
- /api/file-base64-upload
- /api/file-stream-upload
- /api/file-url-upload
- /api/v1/chat/credit
- Remaining
- /api/v1/veo/generate
- /api/v1/veo/record-info
- /api/v1/veo/get-1080p-video
- /api/v1/generate
- /api/v1/generate/extend
- /api/v1/generate/upload-cover
- /api/v1/generate/upload-extend
- /api/v1/generate/record-info
- /api/v1/generate/get-timestamped-lyrics
- /api/v1/style/generate
- /api/v1/lyrics
- /api/v1/lyrics/record-info
- /api/v1/wav/generate
- /api/v1/wav/record-info
- /api/v1/vocal-removal/generate
- /api/v1/vocal-removal/record-info
- /api/v1/mp4/generate
- /api/v1/mp4/record-info
- /api/v1/gpt4o-image/generate
- /api/v1/gpt4o-image/record-info
- /api/v1/gpt4o-image/download-url
- /api/v1/flux/kontext/generate
- /api/v1/flux/kontext/record-info
- /api/v1/mj/generate
- /api/v1/mj/record-info
- /api/v1/mj/generateUpscale
- /api/v1/mj/generateVary
- /api/v1/runway/generate
- /api/v1/runway/record-detail
- /api/v1/runway/extend
- /api/file-base64-upload
- /api/file-stream-upload
- /api/file-url-upload
- /api/v1/chat/credit
- started
- started
- Your
- results
- HD
- the
- 1080P
- 1080P
- better
- 1080P
- Details
- started
- Your
- results
- HD
- the
- 1080P
- 1080P
- better
- 1080P
- Details
- started
- started
- Your
- HD
- started
- started
- started
- started
- started
- started

## 💡 使用建议
基于MCP Context7提供的Axios最佳实践：

```javascript
const axios = require('axios');

const kieAIClient = axios.create({
  baseURL: 'https://api.kie.ai/v3',
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
```

## 🔧 集成到EarthZoomAI项目
1. 安装依赖: `npm install axios`
2. 配置环境变量: `KIE_AI_API_KEY=your-key`
3. 使用上述客户端代码
4. 集成到React组件中

---
*本文档基于MCP工具分析生成，建议与官方文档对比验证*
