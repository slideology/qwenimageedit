import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Qwen Image Edit Privacy Policy Page
 * 详细的隐私政策页面，说明数据收集、使用、存储和保护政策
 */
const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 页面标题区域 */}
      <section className="relative bg-gradient-to-br from-earth-blue via-cosmic-purple to-stellar-silver py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stars opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
              <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent block">
                Your Privacy Matters
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We are committed to protecting your privacy and ensuring the security of your personal information.
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <div className="text-white/80 text-sm">
              <p>Last Updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 主要内容区域 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction - 介绍部分 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">Introduction</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="mb-6">
                  Qwen Image Edit ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our website 
                  and tell you about your privacy rights and how the law protects you.
                </p>
                <p className="mb-6">
                  This privacy policy applies to all users of our AI image editing platform and website services.
                </p>
              </div>
            </div>

            {/* Information We Collect - 收集的信息 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">Information We Collect</h2>
              
              <div className="space-y-8">
                {/* Personal Information */}
                <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-space-dark mb-4 flex items-center">
                    <svg className="w-6 h-6 text-earth-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Personal Information
                  </h3>
                  <ul className="text-gray-600 space-y-2 ml-9">
                    <li>• Email address (when you contact us or subscribe to updates)</li>
                    <li>• Name and contact information (when provided voluntarily)</li>
                    <li>• User preferences and settings</li>
                    <li>• Communication history with our support team</li>
                  </ul>
                </div>

                {/* Usage Data */}
                <div className="bg-gradient-to-br from-cosmic-purple/5 to-solar-gold/5 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-space-dark mb-4 flex items-center">
                    <svg className="w-6 h-6 text-cosmic-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Usage Data
                  </h3>
                  <ul className="text-gray-600 space-y-2 ml-9">
                    <li>• Website usage patterns and navigation behavior</li>
                    <li>• Device information (browser type, operating system)</li>
                    <li>• IP address and location data (anonymized)</li>
                    <li>• Performance metrics and error logs</li>
                    <li>• Feature usage statistics</li>
                  </ul>
                </div>

                {/* Image Data */}
                <div className="bg-gradient-to-br from-solar-gold/5 to-stellar-silver/5 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-space-dark mb-4 flex items-center">
                    <svg className="w-6 h-6 text-solar-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Image and Content Data
                  </h3>
                  <ul className="text-gray-600 space-y-2 ml-9">
                    <li>• Images uploaded for AI processing (temporarily stored)</li>
                    <li>• Generated content and editing results</li>
                    <li>• User-created projects and saved work</li>
                    <li>• Metadata associated with uploaded content</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information - 如何使用信息 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">How We Use Your Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-earth-blue/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-space-dark mb-2">Service Provision</h3>
                      <p className="text-gray-600 text-sm">To provide and maintain our AI image editing services</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cosmic-purple/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-space-dark mb-2">Improvement</h3>
                      <p className="text-gray-600 text-sm">To improve our algorithms and user experience</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-solar-gold/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-space-dark mb-2">Communication</h3>
                      <p className="text-gray-600 text-sm">To respond to inquiries and provide customer support</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-stellar-silver/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-stellar-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-space-dark mb-2">Analytics</h3>
                      <p className="text-gray-600 text-sm">To analyze usage patterns and optimize performance</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-earth-blue/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-space-dark mb-2">Security</h3>
                      <p className="text-gray-600 text-sm">To maintain security and prevent misuse of our services</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cosmic-purple/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-space-dark mb-2">Legal Compliance</h3>
                      <p className="text-gray-600 text-sm">To comply with legal obligations and regulations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Protection - 数据保护 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">Data Protection & Security</h2>
              
              <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-space-dark mb-4">Security Measures</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-earth-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        End-to-end encryption for data transmission
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-earth-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Secure cloud storage with access controls
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-earth-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Regular security audits and monitoring
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-space-dark mb-4">Data Retention</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-cosmic-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Images processed temporarily (24-48 hours)
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-cosmic-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Automatic deletion of processed content
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-cosmic-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Analytics data anonymized and aggregated
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights - 用户权利 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">Your Privacy Rights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-earth-blue/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-space-dark mb-2">Access</h3>
                  <p className="text-gray-600 text-sm">Request access to your personal data we hold</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-space-dark mb-2">Rectification</h3>
                  <p className="text-gray-600 text-sm">Correct inaccurate or incomplete data</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-solar-gold/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-space-dark mb-2">Erasure</h3>
                  <p className="text-gray-600 text-sm">Request deletion of your personal data</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-stellar-silver/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-stellar-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-space-dark mb-2">Portability</h3>
                  <p className="text-gray-600 text-sm">Receive your data in a portable format</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-earth-blue/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L12 12m6.364 6.364L12 12m0 0L5.636 5.636M12 12l6.364-6.364M12 12l-6.364 6.364" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-space-dark mb-2">Object</h3>
                  <p className="text-gray-600 text-sm">Object to processing of your data</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-space-dark mb-2">Withdraw Consent</h3>
                  <p className="text-gray-600 text-sm">Withdraw consent for data processing</p>
                </div>
              </div>
            </div>

            {/* Cookies - Cookie政策 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">Cookies & Tracking</h2>
              
              <div className="bg-gradient-to-br from-solar-gold/5 to-stellar-silver/5 rounded-2xl p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We use cookies and similar tracking technologies to improve your browsing experience, 
                  analyze site traffic, and understand where our visitors are coming from.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-earth-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-space-dark mb-2">Essential Cookies</h3>
                    <p className="text-gray-600 text-sm">Required for basic site functionality</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-space-dark mb-2">Analytics Cookies</h3>
                    <p className="text-gray-600 text-sm">Help us understand site usage</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-solar-gold/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-space-dark mb-2">Preference Cookies</h3>
                    <p className="text-gray-600 text-sm">Remember your preferences</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information - 联系信息 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">Contact Us</h2>
              
              <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please don't hesitate to contact us:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-space-dark mb-4">Privacy Officer</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-earth-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-600">privacy@qwenimageedit.art</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-earth-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-600">Global Operations</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-space-dark mb-4">Response Time</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-cosmic-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Privacy inquiries: 48 hours</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-cosmic-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Data requests: 30 days</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-center text-gray-600">
                    For general inquiries, please visit our <Link to="/contact" className="text-earth-blue hover:text-cosmic-purple transition-colors">Contact Page</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Updates - 更新说明 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">Policy Updates</h2>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, 
                  technology, legal requirements, or other factors. We will notify you of any material changes 
                  by posting the updated policy on our website and updating the "Last Updated" date.
                </p>
                
                <div className="flex items-center justify-between bg-gradient-to-r from-earth-blue/5 to-cosmic-purple/5 rounded-xl p-6">
                  <div>
                    <h3 className="font-bold text-space-dark mb-2">Stay Informed</h3>
                    <p className="text-gray-600 text-sm">We recommend reviewing this policy periodically</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-earth-blue">v1.0</div>
                    <div className="text-sm text-gray-600">Current Version</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action - 行动号召 */}
      <section className="py-16 bg-gradient-to-br from-earth-blue via-cosmic-purple to-stellar-silver">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is here to help you understand how we protect your data and respect your privacy rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-earth-blue px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Privacy Team
              </Link>
              <Link 
                to="/terms-of-service" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-earth-blue transition-colors"
              >
                View Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;