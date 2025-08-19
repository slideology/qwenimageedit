/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Qwen Image Edit AI图像编辑主题配色方案  
        'qwen-purple': '#7c3aed',     // 主色调 - AI智能紫
        'qwen-blue': '#3b82f6',       // 辅助色 - 科技蓝
        'qwen-cyan': '#06b6d4',       // 强调色 - 创新青
        'qwen-dark': '#0f172a',       // 背景色 - 深色主题
        'qwen-gray': '#1e293b',       // 卡片背景 - 深灰
        'qwen-light': '#f8fafc',      // 文字白色
        'qwen-orange': '#f97316',     // 按钮橙色 - CTA
        'qwen-green': '#10b981',      // 成功绿色
        'qwen-red': '#ef4444',        // 错误红色
        'qwen-yellow': '#fbbf24',     // 警告黄色
        
        // 保留原有颜色以兼容现有组件
        'earth-blue': '#1e40af',      
        'space-dark': '#0f172a',      
        'cosmic-purple': '#7c3aed',   
        'solar-gold': '#f59e0b',      
        'stellar-silver': '#e5e7eb',  
        'ocean-blue': '#0ea5e9',      
        'earth-green': '#059669',     
        'atmosphere': '#3b82f6',      
        'nebula': '#8b5cf6',          
        'starlight': '#f8fafc',       
        'meteor': '#ef4444',          
        'satellite': '#6b7280',       
        'horizon': '#fbbf24',
        
        // 嵌套定义保持兼容性
        earth: {
          blue: '#1e40af',
          'space-dark': '#0f172a',
          'cosmic-purple': '#7c3aed',
          'solar-gold': '#f59e0b',
          'ocean-blue': '#0ea5e9',
          'earth-green': '#059669',
          'atmosphere': '#3b82f6',
          'nebula': '#8b5cf6',
          'starlight': '#f8fafc',
          'meteor': '#ef4444',
          'satellite': '#6b7280',
          'horizon': '#fbbf24',
        },
        
        // 保留一些通用颜色用于兼容性
        primary: '#1e40af',
        secondary: '#7c3aed', 
        accent: '#f59e0b',
        background: '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        // Qwen Image Edit 渐变背景
        'qwen-hero': 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%)',
        'qwen-card': 'linear-gradient(135deg, #1e293b 0%, #374151 100%)',
        'qwen-button': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'qwen-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        
        // 保留原有背景图片
        'earth-hero': "url('/src/assets/earth-hero-bg.jpg')",
        'space-pattern': "url('/src/assets/space-pattern.jpg')",
        'stars-texture': "url('/src/assets/stars-texture.png')",
        'earth-gradient': 'linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #0f172a 100%)',
        'cosmic-gradient': 'linear-gradient(45deg, #0f172a 0%, #7c3aed 35%, #1e40af 70%, #f59e0b 100%)',
        'zoom-gradient': 'radial-gradient(circle at center, #1e40af 0%, #7c3aed 50%, #0f172a 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'zoom-pulse': 'zoomPulse 4s ease-in-out infinite',
        'orbit': 'orbit 15s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        zoomPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
        },
        twinkle: {
          '0%': { opacity: '0.3', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1.2)' },
        }
      },
    },
  },
  plugins: [],
}
