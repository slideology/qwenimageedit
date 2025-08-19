import React from 'react';

/**
 * Qwen Image Edit功能展示网格组件
 * 展示9大核心AI图像编辑功能
 */
const ShowcaseGrid = () => {
  // 9大核心功能数据
  const features = [
    {
      id: 'character-consistency',
      title: 'Character Consistency',
      description: 'The model allows for dynamic editing of your original characters and mascots. You can modify poses, change outfits, or add new elements while ensuring the core identity and key features of your IP remain consistent. This feature empowers creators to easily expand their intellectual property into new visual contexts.',
      icon: '🎭',
      gradient: 'from-purple-500 to-purple-600',
      demoText: 'Creative IP editing showcase'
    },
    {
      id: 'novel-view-generation',
      title: 'Novel View Generation',
      description: 'Seamlessly alter the perspective of objects within an image. Whether you need to rotate a product to a new angle, view a building from a different side, or shift the viewpoint in a creative scene, this feature gives you full control over the visual presentation without complex 3D software.',
      icon: '🔄',
      gradient: 'from-blue-500 to-blue-600',
      demoText: 'Perspective transformation showcase'
    },
    {
      id: 'precision-removal',
      title: 'Precision Removal',
      description: 'Instantly remove unwanted objects, people, or imperfections from your photos. The model intelligently identifies and seamlessly erases distracting elements, leaving the background looking clean and untouched. This is perfect for decluttering scenes or removing photobombers.',
      icon: '🗑️',
      gradient: 'from-red-500 to-red-600',
      demoText: 'AI object removal showcase'
    },
    {
      id: 'text-editing',
      title: 'Edit Any Text, Anywhere',
      description: 'This feature provides unparalleled accuracy in text editing. You can add, delete, or modify any text within an image, including large headlines and fine print. It supports both English and Chinese, making it a versatile tool for editing posters, signs, and other graphics.',
      icon: '✏️',
      gradient: 'from-cyan-500 to-cyan-600',
      demoText: 'Precise text editing showcase'
    },
    {
      id: 'object-addition',
      title: 'Enhance Your Scenes, Add Anything',
      description: 'Effortlessly introduce new objects into an existing image. The model intelligently integrates the new object, ensuring it looks naturally placed with appropriate lighting and shadows. This is ideal for adding props to a product shot or enriching a landscape with new elements.',
      icon: '➕',
      gradient: 'from-green-500 to-green-600',
      demoText: 'Object addition showcase'
    },
    {
      id: 'virtual-scenarios',
      title: 'Create Immersive Virtual Scenarios',
      description: 'The model helps you create realistic or imaginative virtual environments from scratch. Whether you\'re building a fantastical world for a game or designing a professional virtual showroom for a product, this feature provides the powerful editing tools needed to bring your vision to life.',
      icon: '🌍',
      gradient: 'from-indigo-500 to-indigo-600',
      demoText: 'AI inpainting restoration showcase'
    },
    {
      id: 'virtual-try-on',
      title: 'Experience Virtual Try-On',
      description: 'Easily simulate how different clothes would look on a person. This feature is perfect for fashion e-commerce and personal styling, allowing users to try on outfits virtually without the need for physical models or photoshoots.',
      icon: '👔',
      gradient: 'from-yellow-500 to-yellow-600',
      demoText: 'Virtual try-on showcase'
    },
    {
      id: 'poster-design',
      title: 'Professional Poster Design',
      description: 'A comprehensive tool for editing marketing materials and posters. You can rearrange elements, adjust text, and swap out images with ease. This provides creative flexibility for professional designers and casual users alike to create stunning visual content.',
      icon: '📊',
      gradient: 'from-orange-500 to-orange-600',
      demoText: 'Poster layout editing showcase'
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Qwen Image Edit
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Capabilities
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Unlock the powerful semantic and appearance editing features of Qwen Image Edit.
          </p>
        </div>

        {/* 功能网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 group cursor-pointer border border-gray-800 hover:border-gray-700"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* 展示图片 */}
              <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                <img 
                  src={`/images/showcase/showcase-${String(index < 6 ? index + 1 : index + 2).padStart(3, '0')}.webp`}
                  alt={`${feature.title} - ${feature.demoText}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* 功能图标和标题 */}
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white ml-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
              </div>

              {/* 功能描述 */}
              <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>

              {/* 演示标签 */}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full border border-gray-700 group-hover:bg-gray-700 group-hover:text-gray-300 transition-all">
                  {feature.demoText}
                </span>
              </div>

              {/* 悬停效果 */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部CTA */}
        <div className="text-center mt-16">
          <a 
            href="#live-editor" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <span className="mr-2">🚀</span>
            Try These Features Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseGrid; 