/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 吉卜力风格的配色方案
        ghibli: {
          blue: '#6AABD2',     // 天空蓝
          green: '#7BB661',    // 自然绿
          brown: '#B78D5C',    // 大地棕
          cream: '#F7E9D4',    // 米黄色
          pink: '#EFB3CB',     // 樱花粉
          purple: '#9C89B8',   // 薰衣草紫
          orange: '#F4A261',   // 暖橙色
          gray: '#949BA0',     // 中性灰
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
        'texture': "url('/src/assets/paper-texture.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
