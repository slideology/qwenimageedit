import React from 'react';

/**
 * Qwen Image Edit 4步操作流程组件
 * 展示简单的图像编辑流程
 */
const ProcessFlow = () => {
  // 4步操作流程数据
  const steps = [
    {
      step: '1',
      title: 'Upload Your Image',
      description: 'Start by uploading the image you wish to edit. Drag and drop your file or select it directly from your device.',
      icon: '📁',
      color: 'purple'
    },
    {
      step: '2', 
      title: 'Enter Your Prompt',
      description: 'Provide a detailed prompt to specify the changes you\'d like. Whether it\'s text adjustments, visual transformations, or style modifications, clear instructions ensure the best results.',
      icon: '✏️',
      color: 'blue'
    },
    {
      step: '3',
      title: 'Click "Edit"',
      description: 'Once your prompt is ready, click "Edit" to process the image. The AI will apply the specified changes and create the modified version of your image.',
      icon: '🎨',
      color: 'cyan'
    },
    {
      step: '4',
      title: 'Download and Share',
      description: 'After the editing process is complete, you can download the final image. It\'s also easy to share directly or use in various formats.',
      icon: '📥',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-400',
        border: 'border-purple-500/30',
        gradient: 'from-purple-500 to-purple-600'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-400', 
        border: 'border-blue-500/30',
        gradient: 'from-blue-500 to-blue-600'
      },
      cyan: {
        bg: 'bg-cyan-500',
        text: 'text-cyan-400',
        border: 'border-cyan-500/30', 
        gradient: 'from-cyan-500 to-cyan-600'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-400',
        border: 'border-green-500/30',
        gradient: 'from-green-500 to-green-600'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="process" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple 4-Step 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Editing Process
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Follow these simple steps to edit your images with advanced AI semantic and appearance editing capabilities
          </p>
        </div>

        {/* 流程步骤 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              return (
                <div 
                  key={step.step}
                  className="relative group"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {/* 连接线 - 桌面端 */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 z-0"></div>
                  )}

                  {/* 步骤卡片 */}
                  <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-gray-600 relative z-10">
                    {/* 步骤编号 */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {step.step}
                    </div>

                    {/* 步骤图标 */}
                    <div className="text-4xl text-center mb-4">
                      {step.icon}
                    </div>

                    {/* 步骤标题 */}
                    <h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-purple-300 transition-colors">
                      {step.title}
                    </h3>

                    {/* 步骤描述 */}
                    <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors">
                      {step.description}
                    </p>

                    {/* 悬停效果 */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-full h-1 bg-gradient-to-r ${colors.gradient} rounded-full`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 底部提示 */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 border border-purple-500/20 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-4">
                <span className="text-purple-400 font-semibold">Pro Tip:</span> For best results, use high-resolution images and provide detailed, specific prompts about the changes you want to make.
              </p>
              <a 
                href="#live-editor" 
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Try it now in our Live Editor
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow; 