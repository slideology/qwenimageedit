import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// 声明全局twttr类型，避免TypeScript错误
interface TwitterWidgets {
  load: () => void;
}

interface TwitterObject {
  widgets: TwitterWidgets;
}

// 扩展Window接口
declare global {
  interface Window {
    twttr?: TwitterObject;
  }
}

/**
 * TwitterEmbeds组件 - 使用X.com官方嵌入方式展示推文
 * 
 * 功能：
 * 1. 使用X官方的嵌入脚本加载推文
 * 2. 支持深色/浅色主题
 * 3. 支持国际化
 * 4. 响应式布局
 * 5. 支持动态加载更多推文
 * 6. 使用数据驱动方式管理推文
 */
const TwitterEmbeds: React.FC = () => {
  const { t } = useTranslation();
  const [visibleTweets, setVisibleTweets] = useState(6); // 初始显示6条推文

  // 推文数据数组 - 每次添加新推文只需在此数组中添加新项
  const tweets = [
    // 格式: { id: "推文ID", username: "用户名" }
    { id: "1904948645809574283", username: "nomadicmina" },
    { id: "1904908802929156372", username: "gvrizzo" },
    { id: "1905161541907087739", username: "theo" },
    { id: "1904965670414200922", username: "TrungTPhan" },
    { id: "1905250321837719579", username: "GoodVibesJohn" },
    { id: "1904915503505670246", username: "venturetwins" },
    { id: "1905123418787242412", username: "dabit3" },
    { id: "1904891940522647662", username: "heyBarsee" },
    { id: "1905292033649934704", username: "boneGPT" },
    // 添加新推文时，只需在此处添加新的对象
  ];

  // 推文加载相关配置

  // 加载更多推文
  const loadMoreTweets = () => {
    setVisibleTweets(prev => Math.min(prev + 4, tweets.length));
    
    // 当新的推文元素添加到DOM后，需要手动触发Twitter widgets加载
    setTimeout(() => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    }, 100);
  };

  useEffect(() => {

    // 加载X嵌入脚本
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    // 清理函数
    return () => {
      // 检查script是否仍然存在于DOM中
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          {t('twitterFeedback.title', 'Spread the Word About Ghibli AI')}
        </h2>
        <p className="text-center text-gray-300 mb-12">
          {t('twitterFeedback.subtitle', 'Love using Ghibli AI? See what our users are saying on Twitter with #GhibliAI!')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 左侧推文 - 显示一半的可见推文 */}
          <div className="space-y-6">
            {tweets.slice(0, Math.ceil(visibleTweets/2)).map(tweet => (
              <div key={tweet.id} className="tweet-container">
                <blockquote className="twitter-tweet" data-theme="dark">
                  <a href={`https://twitter.com/${tweet.username}/status/${tweet.id}`}></a>
                </blockquote>
              </div>
            ))}
          </div>

          {/* 右侧推文 - 显示另一半的可见推文 */}
          <div className="space-y-6">
            {tweets.slice(Math.ceil(visibleTweets/2), visibleTweets).map(tweet => (
              <div key={tweet.id} className="tweet-container">
                <blockquote className="twitter-tweet" data-theme="dark">
                  <a href={`https://twitter.com/${tweet.username}/status/${tweet.id}`}></a>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* 加载更多按钮 - 仅当还有更多推文可加载时显示 */}
        {visibleTweets < tweets.length && (
          <div className="text-center mt-10">
            <button 
              onClick={loadMoreTweets}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
            >
              {t('twitterFeedback.loadMore', 'Load More Tweets')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TwitterEmbeds;
