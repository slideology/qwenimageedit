import React, { useState } from 'react';
import { analytics } from '../utils/analytics';

interface NewsletterSubscribeProps {
  className?: string;
  title?: string;
  description?: string;
}

export const NewsletterSubscribe: React.FC<NewsletterSubscribeProps> = ({
  className = '',
  title = '订阅我们的最新动态',
  description = '及时获取Earth Zoom AI的最新功能、教程和使用技巧。'
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // 记录分析事件
      analytics.event({
        category: 'Newsletter',
        action: 'Subscribe',
        label: email
      });

      // TODO: 实现实际的订阅逻辑
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error('订阅失败，请稍后重试');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '订阅失败，请稍后重试');
    }
  };

  return (
    <div className={`bg-gray-900 rounded-lg shadow-xl p-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400 mb-6">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="输入您的邮箱地址"
            required
            className="flex-1 rounded-md border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`px-6 py-2 rounded-md text-white font-medium transition-colors duration-200 ${
              status === 'submitting'
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {status === 'submitting' ? '订阅中...' : '订阅'}
          </button>
        </div>

        {status === 'success' && (
          <div className="mt-4 p-4 rounded-md bg-green-50">
            <p className="text-sm text-green-800">
              订阅成功！感谢您的关注。
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 p-4 rounded-md bg-red-50">
            <p className="text-sm text-red-800">
              {errorMessage}
            </p>
          </div>
        )}

        <p className="mt-4 text-sm text-gray-400 text-center">
          我们尊重您的隐私，您可以随时取消订阅。
          查看我们的
          <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 ml-1">
            隐私政策
          </a>
          。
        </p>
      </form>
    </div>
  );
};

export default NewsletterSubscribe; 