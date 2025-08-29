import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Qwen Image Edit Terms of Service Page
 * 详细的服务条款页面，说明使用条件、用户责任和服务限制
 */
const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 页面标题区域 */}
      <section className="relative bg-gradient-to-br from-cosmic-purple via-solar-gold to-earth-blue py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stars opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
              <span className="text-gradient bg-gradient-to-r from-stellar-silver to-solar-gold bg-clip-text text-transparent block">
                Fair & Transparent
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              These terms govern your use of Qwen Image Edit services. By using our platform, 
              you agree to these terms and conditions.
            </p>
            <div className="text-white/80 text-sm">
              <p>Last Updated: January 2025 | Effective Date: January 1, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 主要内容区域 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Acceptance of Terms - 条款接受 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">1. Acceptance of Terms</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="mb-6">
                  By accessing or using Qwen Image Edit ("the Service"), you agree to be bound by these Terms of Service 
                  ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                </p>
                <p className="mb-6">
                  These Terms apply to all visitors, users, and others who access or use the Service, 
                  including but not limited to users who contribute content, information, and other materials or services.
                </p>
              </div>
            </div>

            {/* Service Description - 服务描述 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">2. Service Description</h2>
              
              <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-space-dark mb-4">What We Provide</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Qwen Image Edit is an AI-powered image editing platform that provides advanced artificial intelligence 
                  tools for image manipulation, enhancement, and creative editing.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-earth-blue/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg className="w-4 h-4 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-space-dark mb-1">AI Image Processing</h4>
                        <p className="text-gray-600 text-sm">Advanced algorithms for image enhancement and manipulation</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-cosmic-purple/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg className="w-4 h-4 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-space-dark mb-1">Creative Tools</h4>
                        <p className="text-gray-600 text-sm">Professional-grade editing capabilities</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-solar-gold/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg className="w-4 h-4 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-space-dark mb-1">Cloud Processing</h4>
                        <p className="text-gray-600 text-sm">Secure cloud-based image processing infrastructure</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-stellar-silver/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg className="w-4 h-4 text-stellar-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-space-dark mb-1">API Access</h4>
                        <p className="text-gray-600 text-sm">Developer-friendly API for integration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities - 用户责任 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">3. User Responsibilities</h2>
              
              <div className="space-y-8">
                {/* Account Security */}
                <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-space-dark mb-4 flex items-center">
                    <svg className="w-6 h-6 text-earth-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Account Security
                  </h3>
                  <ul className="text-gray-600 space-y-2 ml-9">
                    <li>• Maintain the confidentiality of your account credentials</li>
                    <li>• Notify us immediately of any unauthorized access</li>
                    <li>• Use strong, unique passwords for your account</li>
                    <li>• Take responsibility for all activities under your account</li>
                  </ul>
                </div>

                {/* Content Guidelines */}
                <div className="bg-gradient-to-br from-cosmic-purple/5 to-solar-gold/5 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-space-dark mb-4 flex items-center">
                    <svg className="w-6 h-6 text-cosmic-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Content Guidelines
                  </h3>
                  <ul className="text-gray-600 space-y-2 ml-9">
                    <li>• Only upload content you own or have permission to use</li>
                    <li>• Respect intellectual property rights of others</li>
                    <li>• Do not upload illegal, harmful, or offensive content</li>
                    <li>• Comply with applicable laws and regulations</li>
                    <li>• Respect privacy rights of individuals in images</li>
                  </ul>
                </div>

                {/* Prohibited Uses */}
                <div className="bg-gradient-to-br from-solar-gold/5 to-stellar-silver/5 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-space-dark mb-4 flex items-center">
                    <svg className="w-6 h-6 text-solar-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L12 12m6.364 6.364L12 12m0 0L5.636 5.636M12 12l6.364-6.364M12 12l-6.364 6.364" />
                    </svg>
                    Prohibited Uses
                  </h3>
                  <ul className="text-gray-600 space-y-2 ml-9">
                    <li>• Creating deepfakes or misleading content</li>
                    <li>• Generating content that violates others' rights</li>
                    <li>• Attempting to reverse engineer our algorithms</li>
                    <li>• Using the service for illegal activities</li>
                    <li>• Circumventing usage limits or security measures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intellectual Property - 知识产权 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">4. Intellectual Property Rights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="w-12 h-12 bg-earth-blue/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-space-dark mb-3">Our Rights</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>• Platform technology and algorithms</li>
                    <li>• Service marks and trademarks</li>
                    <li>• Website design and content</li>
                    <li>• AI models and training data</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="w-12 h-12 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-space-dark mb-3">Your Rights</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>• Ownership of your original content</li>
                    <li>• Rights to processed images</li>
                    <li>• License to use our service</li>
                    <li>• Control over your data</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-space-dark mb-4">Content License</h3>
                <p className="text-gray-600 leading-relaxed">
                  You retain ownership of any intellectual property rights in content you upload. 
                  By uploading content, you grant us a limited, non-exclusive license to process, 
                  store, and return the edited content to you. We do not claim ownership of your content 
                  and will not use it for any purpose other than providing our services.
                </p>
              </div>
            </div>

            {/* Service Availability - 服务可用性 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">5. Service Availability & Limitations</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-solar-gold/5 to-stellar-silver/5 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-space-dark mb-4">Service Level</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-earth-blue mb-2">99.9%</div>
                      <div className="text-gray-600 text-sm">Target Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cosmic-purple mb-2">24/7</div>
                      <div className="text-gray-600 text-sm">Monitoring</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-solar-gold mb-2">&lt; 2s</div>
                      <div className="text-gray-600 text-sm">Response Time</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-space-dark mb-4 flex items-center">
                      <svg className="w-5 h-5 text-earth-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Usage Limits
                    </h3>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• Processing time limits per request</li>
                      <li>• File size restrictions</li>
                      <li>• Daily usage quotas</li>
                      <li>• Concurrent request limits</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-space-dark mb-4 flex items-center">
                      <svg className="w-5 h-5 text-cosmic-purple mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Service Interruptions
                    </h3>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• Scheduled maintenance windows</li>
                      <li>• Emergency system updates</li>
                      <li>• Third-party service dependencies</li>
                      <li>• Force majeure events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Data - 隐私与数据 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">6. Privacy & Data Handling</h2>
              
              <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-space-dark mb-4">Data Processing</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-earth-blue mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Images processed temporarily for editing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-earth-blue mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Automatic deletion after processing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-earth-blue mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>No permanent storage of user content</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-space-dark mb-4">Privacy Protection</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cosmic-purple mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>End-to-end encryption in transit</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cosmic-purple mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Secure processing environments</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-cosmic-purple mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Compliance with privacy regulations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-center text-gray-600">
                    For detailed information about data handling, please review our 
                    <Link to="/privacy-policy" className="text-earth-blue hover:text-cosmic-purple transition-colors ml-1">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimers - 免责声明 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">7. Disclaimers & Limitations</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-solar-gold/5 to-stellar-silver/5 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-space-dark mb-4">Service Disclaimer</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The Service is provided "as is" and "as available" without warranties of any kind, 
                    either express or implied. We do not warrant that the Service will be uninterrupted, 
                    error-free, or completely secure.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-space-dark mb-2">No Warranty For:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Accuracy of AI processing results</li>
                        <li>• Compatibility with all devices</li>
                        <li>• Uninterrupted service availability</li>
                        <li>• Third-party integrations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-space-dark mb-2">Limitation of Liability:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Indirect or consequential damages</li>
                        <li>• Loss of data or profits</li>
                        <li>• Business interruption</li>
                        <li>• Damages exceeding service fees</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-space-dark mb-4 flex items-center">
                    <svg className="w-6 h-6 text-solar-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    AI Technology Limitations
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    AI technology is continuously evolving. Results may vary based on input quality, 
                    complexity, and current model capabilities. Users should review and validate 
                    all AI-generated content before use.
                  </p>
                </div>
              </div>
            </div>

            {/* Termination - 终止条款 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">8. Termination</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-space-dark mb-4">By You</h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-earth-blue mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Stop using the Service at any time</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-earth-blue mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Request account deletion</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-earth-blue mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No penalties for termination</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cosmic-purple/5 to-solar-gold/5 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-space-dark mb-4">By Us</h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cosmic-purple mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Violation of these Terms</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cosmic-purple mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Illegal or harmful activities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-cosmic-purple mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Service discontinuation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Governing Law - 适用法律 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">9. Governing Law & Disputes</h2>
              
              <div className="bg-gradient-to-br from-stellar-silver/5 to-earth-blue/5 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-space-dark mb-4">Applicable Law</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      These Terms are governed by and construed in accordance with applicable 
                      international laws and regulations governing digital services and AI technology.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• International data protection laws</li>
                      <li>• Digital services regulations</li>
                      <li>• AI ethics guidelines</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-space-dark mb-4">Dispute Resolution</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      We encourage resolving disputes through direct communication. 
                      For formal disputes, we support mediation and arbitration processes.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• Direct negotiation preferred</li>
                      <li>• Mediation services available</li>
                      <li>• Arbitration as final resort</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Terms - 条款变更 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">10. Changes to Terms</h2>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-earth-blue/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-space-dark mb-3">Updates & Notifications</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We may update these Terms from time to time to reflect changes in our services, 
                      legal requirements, or business practices. We will notify users of material changes 
                      through our website and other appropriate channels.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-earth-blue/5 rounded-xl">
                    <div className="text-2xl font-bold text-earth-blue mb-2">30 Days</div>
                    <div className="text-gray-600 text-sm">Advance Notice</div>
                  </div>
                  <div className="text-center p-4 bg-cosmic-purple/5 rounded-xl">
                    <div className="text-2xl font-bold text-cosmic-purple mb-2">Email</div>
                    <div className="text-gray-600 text-sm">Notification Method</div>
                  </div>
                  <div className="text-center p-4 bg-solar-gold/5 rounded-xl">
                    <div className="text-2xl font-bold text-solar-gold mb-2">Website</div>
                    <div className="text-gray-600 text-sm">Posted Updates</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information - 联系信息 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-space-dark mb-6">11. Contact Information</h2>
              
              <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  If you have questions about these Terms of Service or need assistance with our platform, 
                  please contact us through the following channels:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-space-dark mb-4">Legal & Terms</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-earth-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-600">legal@qwenimageedit.art</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-earth-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Response within 48 hours</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-space-dark mb-4">General Support</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-cosmic-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Visit our Contact Page</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-cosmic-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-600">Online support portal</span>
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

          </div>
        </div>
      </section>

      {/* Call to Action - 行动号召 */}
      <section className="py-16 bg-gradient-to-br from-cosmic-purple via-solar-gold to-earth-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Creating?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              By using our service, you agree to these terms. Start exploring the power of AI image editing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="bg-white text-cosmic-purple px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Start Editing
              </Link>
              <Link 
                to="/privacy-policy" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-cosmic-purple transition-colors"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;