import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * 图像生成页面组件
 * 实现照片到吉卜力风格转换和文字到吉卜力风格图像生成功能
 */
const ImageGeneratorPage: React.FC = () => {
  const { t } = useTranslation();
  // 状态管理
  const [activeTab, setActiveTab] = useState<'photo' | 'text'>('photo'); // 当前激活的标签页
  const [selectedStyle, setSelectedStyle] = useState<string>('spirited-away'); // 选中的风格
  const [uploadedImage, setUploadedImage] = useState<string | null>(null); // 上传的图片
  const [textPrompt, setTextPrompt] = useState<string>(''); // 文字提示词
  const [isGenerating, setIsGenerating] = useState<boolean>(false); // 是否正在生成图像
  const [generatedImage, setGeneratedImage] = useState<string | null>(null); // 生成的图片
  const fileInputRef = useRef<HTMLInputElement>(null); // 文件输入引用
  
  // Ghibli style options
  const styleOptions = [
    { id: 'spirited-away', name: t('generatorPage.styleOptions.spiritedAway'), description: t('generatorPage.styleDescriptions.spiritedAway') },
    { id: 'totoro', name: t('generatorPage.styleOptions.myNeighborTotoro'), description: t('generatorPage.styleDescriptions.myNeighborTotoro') },
    { id: 'howls-moving-castle', name: t('generatorPage.styleOptions.howlsMovingCastle'), description: t('generatorPage.styleDescriptions.howlsMovingCastle') },
    { id: 'princess-mononoke', name: t('generatorPage.styleOptions.princessMononoke'), description: t('generatorPage.styleDescriptions.princessMononoke') },
    { id: 'kiki-delivery', name: t('generatorPage.styleOptions.kikisDeliveryService'), description: t('generatorPage.styleDescriptions.kikisDeliveryService') },
    { id: 'ponyo', name: t('generatorPage.styleOptions.ponyo'), description: t('generatorPage.styleDescriptions.ponyo') },
  ];
  
  // 处理标签页切换
  const handleTabChange = (tab: 'photo' | 'text') => {
    setActiveTab(tab);
    // 切换标签页时重置生成的图像
    setGeneratedImage(null);
  };
  
  // 处理风格选择
  const handleStyleChange = (styleId: string) => {
    setSelectedStyle(styleId);
  };
  
  // 处理图片上传
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 检查文件类型
      if (!file.type.match('image.*')) {
        alert(t('generatorPage.errors.fileType'));
        return;
      }
      
      // 检查文件大小（限制为10MB）
      if (file.size > 10 * 1024 * 1024) {
        alert(t('generatorPage.errors.fileSize'));
        return;
      }
      
      // 读取并显示图片
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setGeneratedImage(null); // 清除之前生成的图像
      };
      reader.readAsDataURL(file);
    }
  };
  
  // 处理拖放上传
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      // 检查文件类型
      if (!file.type.match('image.*')) {
        alert(t('generatorPage.errors.fileType'));
        return;
      }
      
      // 检查文件大小（限制为10MB）
      if (file.size > 10 * 1024 * 1024) {
        alert(t('generatorPage.errors.fileSize'));
        return;
      }
      
      // 读取并显示图片
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setGeneratedImage(null); // 清除之前生成的图像
      };
      reader.readAsDataURL(file);
    }
  };
  
  // 触发文件选择对话框
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  
  // 处理文字提示词输入
  const handlePromptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextPrompt(event.target.value);
  };
  
  // 生成图像
  const handleGenerateImage = () => {
    // 验证输入
    if (activeTab === 'photo' && !uploadedImage) {
      alert(t('generatorPage.errors.noImage'));
      return;
    }
    
    if (activeTab === 'text' && !textPrompt.trim()) {
      alert(t('generatorPage.errors.noText'));
      return;
    }
    
    // 设置生成状态
    setIsGenerating(true);
    
    // 模拟API调用（实际项目中应替换为真实的API调用）
    setTimeout(() => {
      // 模拟生成结果
      const mockResult = '/images/placeholders/generated-800x600.svg';
      setGeneratedImage(mockResult);
      setIsGenerating(false);
    }, 3000);
    
    // 实际API调用示例（注释掉）
    /*
    const formData = new FormData();
    formData.append('style', selectedStyle);
    
    if (activeTab === 'photo' && uploadedImage) {
      // 从Data URL提取文件数据
      const base64Data = uploadedImage.split(',')[1];
      const blob = base64ToBlob(base64Data, 'image/jpeg');
      formData.append('image', blob);
    } else if (activeTab === 'text') {
      formData.append('prompt', textPrompt);
    }
    
    fetch('/api/generate', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setGeneratedImage(data.imageUrl);
        setIsGenerating(false);
      })
      .catch(error => {
        console.error('Error generating image:', error);
        alert('生成图像时出错，请重试！');
        setIsGenerating(false);
      });
    */
  };
  
  // 下载生成的图像
  const handleDownloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `ghibli-style-${new Date().getTime()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  
  // 分享生成的图像
  const handleShareImage = () => {
    if (generatedImage && navigator.share) {
      navigator.share({
        title: t('generatorPage.share.title'),
        text: t('generatorPage.share.text'),
        url: generatedImage,
      })
        .then(() => console.log(t('generatorPage.share.success')))
        .catch((error) => console.log(t('generatorPage.share.error'), error));
    } else {
      // 复制图像链接到剪贴板
      navigator.clipboard.writeText(generatedImage || '')
        .then(() => alert(t('generatorPage.share.copied')))
        .catch(() => alert(t('generatorPage.share.copyError')));
    }
  };

  return (
    <div className="min-h-screen py-12 bg-ghibli-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('generatorPage.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('generatorPage.description')}
          </p>
        </div>
        
        {/* Tab Switching */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full shadow-md p-1 inline-flex">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'photo'
                  ? 'bg-ghibli-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => handleTabChange('photo')}
            >
              {t('generatorPage.imageToImage')}
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'text'
                  ? 'bg-ghibli-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => handleTabChange('text')}
            >
              {t('generatorPage.textToImage')}
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧：输入区域 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {activeTab === 'photo' ? t('generatorPage.uploadImageLabel') : t('generatorPage.textPromptLabel')}
            </h2>
            
            {/* 照片上传区域 */}
            {activeTab === 'photo' && (
              <div className="mb-6">
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    uploadedImage ? 'border-ghibli-blue' : 'border-gray-300 hover:border-ghibli-blue/50'
                  }`}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={triggerFileInput}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  
                  {uploadedImage ? (
                    <div className="relative">
                      <img
                        src={uploadedImage}
                        alt="上传的图片"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                      <button
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUploadedImage(null);
                        }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="mt-4 text-gray-600">
                        {t('generatorPage.uploadImageDescription')}
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        {t('generatorPage.uploadImageFormat', { formats: 'JPG, PNG, WebP', size: '10MB' })}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* 文字输入区域 */}
            {activeTab === 'text' && (
              <div className="mb-6">
                <textarea
                  className="input-field h-40"
                  placeholder={t('generatorPage.textPromptPlaceholder')}
                  value={textPrompt}
                  onChange={handlePromptChange}
                ></textarea>
                <p className="mt-2 text-sm text-gray-500">
                  {t('generatorPage.textPromptTip')}
                </p>
              </div>
            )}
            
            {/* 风格选择区域 */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">{t('generatorPage.styleSelection')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {styleOptions.map((style) => (
                  <div
                    key={style.id}
                    className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                      selectedStyle === style.id
                        ? 'border-ghibli-blue bg-ghibli-blue/5'
                        : 'border-gray-200 hover:border-ghibli-blue/50'
                    }`}
                    onClick={() => handleStyleChange(style.id)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-4 h-4 rounded-full border ${
                          selectedStyle === style.id
                            ? 'border-ghibli-blue bg-ghibli-blue'
                            : 'border-gray-300'
                        }`}
                      >
                        {selectedStyle === style.id && (
                          <div className="w-2 h-2 bg-white rounded-full m-auto"></div>
                        )}
                      </div>
                      <span className="ml-2 font-medium">{style.name}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">{style.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 生成按钮 */}
            <button
              className="btn-primary w-full flex justify-center items-center"
              onClick={handleGenerateImage}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('generatorPage.generating')}
                </>
              ) : (
                t('generatorPage.generateButton')
              )}
            </button>
          </div>
          
          {/* 右侧：结果展示区域 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('generatorPage.result')}</h2>
            
            <div className="border rounded-lg p-4 h-[400px] flex items-center justify-center">
              {generatedImage ? (
                <div className="text-center">
                  <img
                    src={generatedImage}
                    alt={t('generatorPage.generatedImageAlt')}
                    className="max-h-[300px] mx-auto rounded-lg shadow-md"
                  />
                  <div className="mt-4 flex justify-center space-x-4">
                    <button
                      className="btn-secondary py-2 px-4 flex items-center"
                      onClick={handleDownloadImage}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {t('generatorPage.downloadButton')}
                    </button>
                    <button
                      className="btn-secondary py-2 px-4 flex items-center"
                      onClick={handleShareImage}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      {t('generatorPage.shareButton')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-4">
                    {t('generatorPage.resultPlaceholder')}
                  </p>
                  <p className="mt-2 text-sm">
                    {t('generatorPage.resultInstructions', { action: activeTab === 'photo' ? t('generatorPage.uploadImageLabel').toLowerCase() : t('generatorPage.textPromptLabel').toLowerCase() })}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Usage Tips */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('generatorPage.usageTips')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ghibli-blue text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">{t('generatorPage.photoTipsTitle')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('generatorPage.photoTipsContent')}
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ghibli-purple text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">{t('generatorPage.textTipsTitle')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('generatorPage.textTipsContent')}
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ghibli-green text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">{t('generatorPage.styleTipsTitle')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('generatorPage.styleTipsContent')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGeneratorPage;
