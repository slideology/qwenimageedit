const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const KIE_API_KEY = process.env.KIE_API_KEY;
const KIE_BASE_URL = 'https://kieai.erweima.ai';

// 健康检查端点
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Kie.ai test server is running' });
});

// 测试图片生成
app.post('/test-generate', async (req, res) => {
  try {
    console.log('Starting image generation test...');
    console.log('API Key:', KIE_API_KEY ? 'Configured' : 'Missing');
    
    const response = await axios.post(
      `${KIE_BASE_URL}/api/v1/gpt4o-image/generate`,
      {
        prompt: "A peaceful countryside scene in Ghibli style with rolling hills",
        size: "1:1"
      },
      {
        headers: {
          'Authorization': `Bearer ${KIE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );
    
    console.log('Generation response:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Generation error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: error.message,
      details: error.response?.data || 'Unknown error'
    });
  }
});

// 查询任务状态
app.get('/test-status/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params;
    console.log('Checking status for task:', taskId);
    
    const response = await axios.get(
      `${KIE_BASE_URL}/api/v1/gpt4o-image/record-info`,
      {
        params: { taskId },
        headers: {
          'Authorization': `Bearer ${KIE_API_KEY}`
        },
        timeout: 15000
      }
    );
    
    console.log('Status response:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Status error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: error.message,
      details: error.response?.data || 'Unknown error'
    });
  }
});

// 获取下载URL
app.post('/test-download', async (req, res) => {
  try {
    const { taskId, imageUrl, imgUrl } = req.body;
    const finalImageUrl = imageUrl || imgUrl;
    console.log('Getting download URL for:', finalImageUrl);
    console.log('Task ID:', taskId);
    
    const response = await axios.post(
      `${KIE_BASE_URL}/api/v1/gpt4o-image/download-url`,
      { taskId, imgUrl: finalImageUrl },
      {
        headers: {
          'Authorization': `Bearer ${KIE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 15000
      }
    );
    
    console.log('Download response:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Download error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: error.message,
      details: error.response?.data || 'Unknown error'
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Kie.ai test server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`🔑 API Key: ${KIE_API_KEY ? 'Configured ✅' : 'Missing ❌'}`);
}); 