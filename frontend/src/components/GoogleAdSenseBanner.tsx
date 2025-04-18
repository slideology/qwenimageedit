import React from 'react';

/**
 * Google AdSense 自动广告模式组件
 * 自动广告无需渲染任何标签，AdSense 会自动在页面合适位置插入广告。
 * 只需确保 public/index.html 已正确引入自动广告脚本。
 */
const GoogleAdSenseBanner: React.FC = () => {
  // 自动广告模式下，返回 null，不渲染任何内容
  return null;
};

export default GoogleAdSenseBanner;
