import React from 'react';
import { useTranslation } from 'react-i18next';
import GradioApiGenerator from '../components/GradioApiGenerator';
import AdBanner from '../components/AdBanner';

/**
 * 图像生成页面组件
 * 使用API生成吉卜力风格图像
 */
const ImageGeneratorPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-12 bg-ghibli-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('generatorPage.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('generatorPage.description')}
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <GradioApiGenerator />
        </div>

        {/* 页面底部广告 */}
        <div className="mt-16">
          <AdBanner />
        </div>
      </div>
    </div>
  );
};

export default ImageGeneratorPage;
