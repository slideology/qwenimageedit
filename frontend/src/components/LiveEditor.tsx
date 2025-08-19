import React, { useState, useEffect } from 'react';

/**
 * Qwen Image Edit在线编辑器组件
 * 集成Hugging Face Gradio界面，提供实时AI图像编辑功能
 */
const LiveEditor = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  // iframe加载状态管理
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIsLoading(false);
  };

  // 自适应iframe高度
  useEffect(() => {
    const handleResize = () => {
      const iframe = document.getElementById('qwen-editor-iframe') as HTMLIFrameElement;
      if (iframe && window.innerWidth < 768) {
        iframe.style.height = '600px'; // 移动端降低高度
      } else if (iframe) {
        iframe.style.height = '800px'; // 桌面端标准高度
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="live-editor" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Try Qwen Image Edit
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Live Editor
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the power of AI image editing directly in your browser. 
            Upload an image, describe your edits, and watch the magic happen instantly.
          </p>
        </div>

        {/* 功能特性标签 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            'Real-time Processing',
            'No Registration Required', 
            'Instant Results',
            'Professional Quality',
            'Free to Try'
          ].map((feature, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* iframe编辑器容器 */}
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 max-w-7xl mx-auto shadow-2xl">
          {/* 加载状态 */}
          {isLoading && (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400">Loading AI Editor...</p>
              </div>
            </div>
          )}

          {/* 错误状态 */}
          {iframeError && (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 mb-4">Unable to load the editor</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Reload
                </button>
              </div>
            </div>
          )}

          {/* Gradio iframe */}
          <iframe 
            id="qwen-editor-iframe"
            src="https://qwen-qwen-image-edit.hf.space/?__theme=dark"
            width="100%" 
            height="800"
            frameBorder="0"
            className={`rounded-xl w-full transition-opacity duration-300 ${isLoading || iframeError ? 'opacity-0 absolute' : 'opacity-100'}`}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            title="Qwen Image Edit Live Editor"
            sandbox="allow-scripts allow-same-origin allow-forms allow-downloads"
          />
        </div>

        {/* 底部说明 */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-gray-500 text-sm">
            <span>Powered by</span>
            <a 
              href="https://huggingface.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              Hugging Face
            </a>
            <span>•</span>
            <span>Built with</span>
            <a 
              href="https://gradio.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Gradio
            </a>
            <span>•</span>
            <span>Real-time AI Processing</span>
          </div>
        </div>

        {/* 使用提示 */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 border border-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <svg className="w-6 h-6 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How to Use
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2">📁 Upload Image</h4>
              <p className="text-sm">Click the upload area or drag and drop your image. Supports JPG, PNG, WebP formats.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">✏️ Describe Edit</h4>
              <p className="text-sm">Enter a clear description of what you want to edit in the prompt box.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">⚙️ Adjust Settings</h4>
              <p className="text-sm">Expand Advanced Settings to fine-tune parameters for better results.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">🎨 Generate & Download</h4>
              <p className="text-sm">Click Edit to process, then right-click the result to save your edited image.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEditor; 