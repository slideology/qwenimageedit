import React from 'react';
import ContactForm from '../components/ContactForm';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import SEOHead from '../components/SEOHead';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="联系我们 - Earth Zoom AI"
        description="有任何问题或建议？请随时联系我们。我们的团队将竭诚为您服务。"
        type="website"
      />
      
      <div className="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">联系我们</h1>
            <p className="text-gray-400 text-lg">
              有任何问题或建议？请随时联系我们。我们的团队将竭诚为您服务。
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg shadow-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">联系方式</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">邮箱</h3>
                    <p className="mt-2 text-gray-400">
                      <a href="mailto:contact@earthzoomai.org" className="hover:text-white">
                        contact@earthzoomai.org
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">社交媒体</h3>
                    <div className="mt-2 space-y-2 text-gray-400">
                      <p>
                        <a href="https://twitter.com/EarthZoomAI" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                          Twitter: @EarthZoomAI
                        </a>
                      </p>
                      <p>
                        <a href="https://discord.gg/earthzoomai" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                          Discord: Earth Zoom AI Community
                        </a>
                      </p>
                      <p>
                        <a href="https://linkedin.com/company/earthzoomai" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                          LinkedIn: Earth Zoom AI
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-300">工作时间</h3>
                    <p className="mt-2 text-gray-400">
                      周一至周五: 9:00 - 18:00<br />
                      周六至周日: 10:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">发送消息</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <NewsletterSubscribe 
              title="订阅更新"
              description="订阅我们的邮件列表，获取最新的产品更新、使用技巧和独家优惠。"
            />
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">常见问题</h2>
            <p className="text-gray-400 mb-8">
              在联系我们之前，您可以查看我们的
              <a href="/faq" className="text-blue-400 hover:text-blue-300 ml-1">
                常见问题
              </a>
              ，可能已经有您想要的答案。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage; 