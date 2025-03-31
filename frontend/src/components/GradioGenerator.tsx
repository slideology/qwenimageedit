import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Gradio生成器组件
 * 通过iframe嵌入Hugging Face上的Gradio应用
 */
const GradioGenerator: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  
  // Gradio应用的URL - 可以替换为其他吉卜力风格模型的URL
  // 使用备选的Gradio应用URL
  const gradioAppUrls = [
    "https://llmhacker-strangerzonehf-flux-ghibli-art-lora-forgbai.hf.space",
    "https://strangerzonehf-flux-ghibli-art-lora.hf.space",
    "https://huggingface.co/spaces/strangerzonehf/flux-ghibli-art-lora",
    "https://huggingface.co/spaces/akhaliq/AnimeGANv2"
  ];
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const gradioAppUrl = gradioAppUrls[currentUrlIndex];
  
  // Handle iframe load completion event
  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };
  
  // Handle iframe load error
  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  
  // Retry loading
  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    setRetryCount(retryCount + 1);
  };
  
  // Try next URL
  const tryNextUrl = () => {
    if (currentUrlIndex < gradioAppUrls.length - 1) {
      setCurrentUrlIndex(currentUrlIndex + 1);
      setIsLoading(true);
      setHasError(false);
      setRetryCount(0);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };
  
  // Set loading timeout
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        // If still loading, try the next URL
        tryNextUrl();
      }
    }, 15000); // 15 seconds timeout
    
    return () => clearTimeout(timeoutId);
  }, [isLoading, currentUrlIndex]);

  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-2">{t('generatorPage.gradioTitle', 'Ghibli Style AI Generator')}</h2>
        <p className="text-gray-600">
          {t('generatorPage.gradioDescription', 'Transform your ideas into beautiful Ghibli-style artwork using our AI model.')}
        </p>
      </div>
      
      {/* Usage Tips */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">{t('generatorPage.usageTips', 'Usage Tips')}</h3>
            <div className="mt-2 text-sm text-blue-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Enter a detailed description in the text box, e.g. "A mountain cabin in Miyazaki style with forest and stream"</li>
                <li>Click the "Submit" button to generate the image</li>
                <li>Generation may take a few minutes, please be patient</li>
                <li>If you encounter issues, click the "Clear" button to start over</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex flex-col justify-center items-center h-96 bg-gray-100 rounded-lg">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mb-4"></div>
          <p className="text-gray-600">Loading Gradio generator, please wait... ({currentUrlIndex + 1}/{gradioAppUrls.length})</p>
          <p className="text-sm text-gray-500 mt-2">First load may take longer</p>
          <p className="text-xs text-gray-500 mt-1">If loading takes too long, we'll automatically try backup services</p>
          {currentUrlIndex > 0 && (
            <p className="text-xs text-blue-600 mt-4">Trying backup service #{currentUrlIndex + 1}</p>
          )}
        </div>
      )}
      
      {/* Error State */}
      {hasError && (
        <div className="flex flex-col justify-center items-center h-96 bg-red-50 rounded-lg border border-red-200">
          <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-red-800">Loading Failed</h3>
          <p className="mt-2 text-red-600 text-center px-4">Unable to load Gradio generator. This may be due to network issues or the service being temporarily unavailable.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button 
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              onClick={handleRetry}
            >
              Retry Current Service
            </button>
            {currentUrlIndex < gradioAppUrls.length - 1 && (
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={tryNextUrl}
              >
                Try Backup Service
              </button>
            )}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-md">
            <h4 className="font-medium text-yellow-800">Tip</h4>
            <p className="text-sm text-yellow-700 mt-1">If you're accessing from mainland China, you may need to use a VPN to connect to Hugging Face services.</p>
          </div>
        </div>
      )}
      
      {/* Gradio iframe */}
      {!hasError && (
        <div className={`rounded-lg overflow-hidden shadow-xl ${isLoading ? 'hidden' : 'block'}`}>
          <iframe
            key={`gradio-frame-${retryCount}`}
            src={gradioAppUrl}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            title="Ghibli Style AI Generator"
            width="100%"
            height="800px"
            className="border-0"
            allow="camera"
            loading="lazy"
          ></iframe>
        </div>
      )}
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>{t('generatorPage.gradioDisclaimer', 'This generator is powered by Hugging Face and Gradio. Results may vary based on your inputs.')}</p>
        <p className="mt-2 text-xs text-gray-400">Current service: {gradioAppUrl}</p>
      </div>
    </div>
  );
};

export default GradioGenerator;
