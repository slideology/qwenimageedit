import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';

/**
 * ZOOM EARTH AI 单页应用导航栏组件
 * 适配单页应用，包含锚点导航和固定导航栏效果
 * 支持AffiliateBanner的动态高度调整
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [bannerHeight, setBannerHeight] = useState(0);
  
  // 导航链接数据 - 改为锚点导航
  const navLinks = [
    { name: 'Features', path: '#features' },
    { name: 'Showcase', path: '#showcase' },
    { name: 'Reviews', path: '#reviews' },
    { name: 'FAQ', path: '#faq' },
  ];
  
  // 监听滚动事件和Banner高度变化
  useEffect(() => {
    const updateBannerHeight = () => {
      const bannerElement = document.querySelector('[class*="bg-gradient-to-r from-indigo-500"]');
      setBannerHeight(bannerElement ? bannerElement.clientHeight : 0);
    };
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      // 检测当前激活的区块
      const sections = ['showcase', 'features', 'reviews', 'faq'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };

    // 初始化Banner高度
    updateBannerHeight();
    
    // 监听窗口大小变化和滚动
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateBannerHeight);
    
    // 使用MutationObserver监听Banner的显示/隐藏
    const observer = new MutationObserver(updateBannerHeight);
    const targetNode = document.body;
    observer.observe(targetNode, { childList: true, subtree: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateBannerHeight);
      observer.disconnect();
    };
  }, []);
  
  // 判断当前导航链接是否激活
  const isActive = (path: string) => {
    const section = path.replace('#', '');
    return activeSection === section;
  };
  
  // 切换移动端菜单显示状态
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 平滑滚动到指定区块
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      style={{ top: `${bannerHeight}px` }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo区域 */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-2xl font-bold text-white">ZOOM EARTH AI</span>
          </Link>
          
          {/* 桌面端导航菜单 */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => scrollToSection(link.path.replace('#', ''))}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          {/* 用户操作区 */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <button 
              onClick={() => scrollToSection('features')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Try Now
            </button>
          </div>
          
          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => scrollToSection(link.path.replace('#', ''))}
                  className={`font-medium transition-colors duration-200 text-left ${
                    isActive(link.path)
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <div className="py-2">
                  <LanguageSwitcher />
                </div>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-left"
                >
                  Try Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
