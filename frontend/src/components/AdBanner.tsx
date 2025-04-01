import React, { useEffect, useRef } from 'react';

/**
 * AdBanner组件 - 用于在页面中嵌入第三方广告
 * 
 * 这个组件会在挂载时加载广告脚本，并提供一个容器用于显示广告内容
 * 广告脚本会自动将内容注入到指定ID的容器中
 */
const AdBanner: React.FC = () => {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef<boolean>(false);

  useEffect(() => {
    // 避免重复加载脚本
    if (scriptLoaded.current) return;
    
    // 创建广告脚本元素
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl26268265.effectiveratecpm.com/1ab4dfad6c3ca77c5a53383982f92cc3/invoke.js';
    
    // 脚本加载完成后标记为已加载
    script.onload = () => {
      scriptLoaded.current = true;
      console.log('广告脚本加载完成');
    };
    
    // 脚本加载失败时的处理
    script.onerror = (error) => {
      console.error('广告脚本加载失败:', error);
    };
    
    // 将脚本添加到文档中
    document.head.appendChild(script);
    
    // 组件卸载时清理
    return () => {
      // 如果需要，可以在这里移除脚本
      // 但通常广告脚本一旦加载就会保留在页面中
    };
  }, []);

  return (
    <div className="ad-banner-container my-8">
      {/* 广告容器，ID必须与广告脚本中指定的ID匹配 */}
      <div id="container-1ab4dfad6c3ca77c5a53383982f92cc3" ref={adContainerRef}></div>
    </div>
  );
};

export default AdBanner;
