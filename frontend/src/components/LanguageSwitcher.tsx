import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * 语言切换组件
 * 暂时只显示英文
 */
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  // 暂时不需要切换语言
  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <div className="flex space-x-2">
      <button
        className="px-2 py-1 rounded text-sm bg-ghibli-blue text-white"
        disabled
        aria-label="English"
      >
        EN
      </button>
      {/* 暂时移除中文选项
      <button
        className={`px-2 py-1 rounded text-sm ${i18n.language === 'zh' ? 'bg-ghibli-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        onClick={() => changeLanguage('zh')}
        aria-label="切换到中文"
      >
        中文
      </button>
      */}
    </div>
  );
};

export default LanguageSwitcher;
