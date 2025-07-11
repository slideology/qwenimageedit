import axios from 'axios';

const API_BASE_URL = '/api';

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);
  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (response.data && response.data.data.url) {
      return response.data.data.url;
    }
    throw new Error('服务器返回的图片URL格式不正确');
  } catch (error) {
    console.error('图片上传失败:', error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || '图片上传时发生未知服务器错误');
    }
    throw new Error('图片上传失败，请检查网络连接');
  }
};

export const generateImageWithUploadedFile = async (
  imageUrl: string,
  prompt: string,
  params: { [key: string]: any }
): Promise<{ taskId: string }> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate-with-image`, {
      imageUrl,
      prompt,
      size: params.aspectRatio,
      // style_strength: params.styleStrength // 如果API支持，可以取消注释
    });
    if (response.data && response.data.data.taskId) {
      return { taskId: response.data.data.taskId };
    }
    throw new Error('服务器未能成功启动生成任务');
  } catch (error) {
    console.error('生成图片请求失败:', error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || '请求生成图片时发生未知服务器错误');
    }
    throw new Error('请求生成图片失败，请检查网络连接');
  }
};

export const getTaskStatus = async (taskId: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/status/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`获取任务 ${taskId} 状态失败:`, error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || `获取任务状态时发生未知服务器错误`);
    }
    throw new Error('获取任务状态失败');
  }
}; 