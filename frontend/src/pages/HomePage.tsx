import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * 网站首页组件
 * 参考 ghibliai.app 设计的吉卜力风格AI图像生成器首页
 * 包含Hero区域、核心优势、使用流程、高级功能、用户评价和号召性用语
 */
const HomePage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      {/* Hero区域 */}
      <section className="relative bg-gradient-to-r from-ghibli-blue via-ghibli-purple to-ghibli-pink py-20 overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {t('hero.title').split(' ').slice(0, 2).join(' ')}<br />
                <span className="text-ghibli-cream">{t('hero.title').split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-lg">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/generator" className="btn-primary bg-white text-ghibli-blue hover:bg-ghibli-cream">
                  {t('hero.startCreating')}
                </Link>
                <Link to="/gallery" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                  {t('hero.browseGallery')}
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 float-animation">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl"></div>
                <img 
                  src="/src/assets/hero-image.png" 
                  alt={t('hero.title')} 
                  className="relative z-10 rounded-xl shadow-2xl max-w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholders/placeholder-600x400.svg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 装饰元素 */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-ghibli-cream to-transparent"></div>
      </section>
      
      {/* 为什么选择吉卜力AI */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t('features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 优势卡片1 */}
            <div className="card p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <div className="w-16 h-16 bg-ghibli-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-ghibli-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{t('features.feature1.title')}</h3>
              <p className="text-gray-600 text-center">
                {t('features.feature1.description')}
              </p>
            </div>
            
            {/* 优势卡片2 */}
            <div className="card p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <div className="w-16 h-16 bg-ghibli-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-ghibli-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{t('features.feature2.title')}</h3>
              <p className="text-gray-600 text-center">
                {t('features.feature2.description')}
              </p>
            </div>
            
            {/* 优势卡片3 */}
            <div className="card p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <div className="w-16 h-16 bg-ghibli-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-ghibli-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{t('features.feature3.title')}</h3>
              <p className="text-gray-600 text-center">
                {t('features.feature3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 开始使用吉卜力AI */}
      <section className="py-20 bg-ghibli-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t('howToUse.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('howToUse.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 步骤1 */}
            <div className="card p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-ghibli-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="w-16 h-16 bg-ghibli-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-ghibli-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{t('howToUse.step1.title')}</h3>
              <p className="text-gray-600 text-center">
                {t('howToUse.step1.description')}
              </p>
            </div>
            
            {/* 步骤2 */}
            <div className="card p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-ghibli-purple rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="w-16 h-16 bg-ghibli-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-ghibli-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{t('howToUse.step2.title')}</h3>
              <p className="text-gray-600 text-center">
                {t('howToUse.step2.description')}
              </p>
            </div>
            
            {/* 步骤3 */}
            <div className="card p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-ghibli-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="w-16 h-16 bg-ghibli-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-ghibli-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{t('howToUse.step3.title')}</h3>
              <p className="text-gray-600 text-center">
                {t('howToUse.step3.description')}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/generator" className="btn-primary bg-ghibli-blue text-white hover:bg-ghibli-blue/90 px-8 py-3 rounded-full font-medium">
              {t('howToUse.startButton')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* 吉卜力AI高级功能 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t('advancedFeatures.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('advancedFeatures.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 高级功能1 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-ghibli-blue/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-ghibli-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('advancedFeatures.feature1.title')}</h3>
              <p className="text-gray-600">
                {t('advancedFeatures.feature1.description')}
              </p>
            </div>
            
            {/* 高级功能2 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-ghibli-purple/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-ghibli-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('advancedFeatures.feature2.title')}</h3>
              <p className="text-gray-600">
                {t('advancedFeatures.feature2.description')}
              </p>
            </div>
            
            {/* 高级功能3 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-ghibli-green/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-ghibli-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('advancedFeatures.feature3.title')}</h3>
              <p className="text-gray-600">
                {t('advancedFeatures.feature3.description')}
              </p>
            </div>
            
            {/* 高级功能4 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-ghibli-blue/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-ghibli-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('advancedFeatures.feature4.title')}</h3>
              <p className="text-gray-600">
                {t('advancedFeatures.feature4.description')}
              </p>
            </div>
            
            {/* 高级功能5 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-ghibli-purple/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-ghibli-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('advancedFeatures.feature5.title')}</h3>
              <p className="text-gray-600">
                {t('advancedFeatures.feature5.description')}
              </p>
            </div>
            
            {/* 高级功能6 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-ghibli-green/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-ghibli-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('advancedFeatures.feature6.title')}</h3>
              <p className="text-gray-600">
                {t('advancedFeatures.feature6.description')}
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/generator" className="btn-secondary bg-transparent border border-ghibli-blue text-ghibli-blue hover:bg-ghibli-blue/10 px-8 py-3 rounded-full font-medium">
              {t('advancedFeatures.exploreButton')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* 常见问题 */}
      <section className="py-20 bg-ghibli-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t('faq.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('faq.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ问题1 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{t('faq.q1.question')}</h3>
              <p className="text-gray-600">
                {t('faq.q1.answer')}
              </p>
            </div>
            
            {/* FAQ问题2 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{t('faq.q2.question')}</h3>
              <p className="text-gray-600">
                {t('faq.q2.answer')}
              </p>
            </div>
            
            {/* FAQ问题3 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{t('faq.q3.question')}</h3>
              <p className="text-gray-600">
                {t('faq.q3.answer')}
              </p>
            </div>
            
            {/* FAQ问题4 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{t('faq.q4.question')}</h3>
              <p className="text-gray-600">
                {t('faq.q4.answer')}
              </p>
            </div>
            
            {/* FAQ问题5 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{t('faq.q5.question')}</h3>
              <p className="text-gray-600">
                {t('faq.q5.answer')}
              </p>
            </div>
            
            {/* FAQ问题6 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{t('faq.q6.question')}</h3>
              <p className="text-gray-600">
                {t('faq.q6.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 号召性用语 */}
      <section className="py-20 bg-gradient-to-r from-ghibli-blue to-ghibli-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Link to="/generator" className="btn-primary bg-white text-ghibli-blue hover:bg-ghibli-cream px-8 py-3 rounded-full font-medium">
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
