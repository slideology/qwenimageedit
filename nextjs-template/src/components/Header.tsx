import React, { useState } from 'react';
import Link from 'next/link';
import { useSiteConfig } from '@/lib/useSiteConfig';

export default function Header() {
  const config = useSiteConfig();
  const [menuOpen, setMenuOpen] = useState(false);
  if (!config) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src={config.logo}
            alt={config.siteName + ' Logo'}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-2xl font-bold text-white">{config.siteName}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {config.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={config.hero.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            {config.hero.ctaText}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-900/95 px-4 pb-4">
          <div className="flex flex-col space-y-4 mt-2">
            {config.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={config.hero.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-center"
              onClick={() => setMenuOpen(false)}
            >
              {config.hero.ctaText}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
} 