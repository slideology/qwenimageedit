import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

/**
 * 网站顶部导航栏组件
 * 包含网站Logo、主导航菜单和移动端响应式菜单
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  
  // 导航链接数据
  const navLinks = [
    { name: t('header.home'), path: '/' },
    { name: t('header.generator'), path: '/generator' },
    { name: t('header.gallery'), path: '/gallery' },
    { name: t('header.about'), path: '/about' },
  ];
  
  // 判断当前页面链接是否激活
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // 切换移动端菜单显示状态
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo区域 */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-ghibli-blue">Ghibli AI</span>
          </Link>
          
          {/* 桌面端导航菜单 */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-ghibli-blue border-b-2 border-ghibli-blue'
                    : 'text-gray-600 hover:text-ghibli-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* 用户操作区 */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <button className="btn-secondary">{t('header.login')}</button>
            <button className="btn-primary">{t('header.signup')}</button>
          </div>
          
          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
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
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-ghibli-blue'
                      : 'text-gray-600 hover:text-ghibli-blue'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <div className="py-2">
                  <LanguageSwitcher />
                </div>
                <button className="btn-secondary">{t('header.login')}</button>
                <button className="btn-primary">{t('header.signup')}</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
