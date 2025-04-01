import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * AffiliateBanner组件 - 显示联盟计划推广横幅
 * 
 * 功能：
 * 1. 显示视频AI生成服务的推广信息
 * 2. 提供"免费试用"按钮链接到合作伙伴网站
 * 3. 支持关闭功能，并在localStorage中保存用户偏好
 * 4. 7天后自动重置用户偏好，再次显示横幅
 * 5. 完全响应式，在移动端和桌面端都有良好表现
 */
const AffiliateBanner: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 检查横幅是否之前被关闭
    const bannerClosed = localStorage.getItem('affiliate_banner_closed');
    
    // 如果之前没有关闭，则显示横幅
    if (bannerClosed !== 'true') {
      setIsVisible(true);
    }
  }, []);

  // 处理关闭横幅
  const handleClose = () => {
    setIsVisible(false);
    // 在localStorage中存储用户偏好
    localStorage.setItem('affiliate_banner_closed', 'true');
    
    // 7天后重置用户偏好
    setTimeout(() => {
      localStorage.removeItem('affiliate_banner_closed');
    }, 7 * 24 * 60 * 60 * 1000);
  };

  // 如果横幅不可见，则不渲染任何内容
  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 px-4 shadow-md relative">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* 横幅内容 */}
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video">
            <path d="m22 8-6 4 6 4V8Z"/>
            <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
          </svg>
          <p className="font-medium">{t('affiliateBanner.message', 'Free to Generate AI Video Online Now')}</p>
        </div>
        
        {/* 行动号召按钮 */}
        <a 
          href="https://pollo.ai?ref=ytayndd" 
          className="bg-white text-purple-600 hover:bg-gray-100 transition-colors duration-300 px-4 py-1.5 rounded-full font-medium text-sm shadow-sm"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t('affiliateBanner.cta', 'Try it Free')}
        </a>
        
        {/* 关闭按钮 */}
        <button 
          onClick={handleClose}
          className="absolute top-1 right-2 text-white hover:text-gray-200 transition-colors duration-300"
          aria-label={t('affiliateBanner.close', 'Close banner')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AffiliateBanner;
