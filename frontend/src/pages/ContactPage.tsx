import React from 'react';
import ContactForm from '../components/ContactForm';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import SEOHead from '../components/SEOHead';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Contact Us - Qwen Image Edit"
        description="Have questions or suggestions? Feel free to contact us. Our team is here to help."
        type="website"
      />
      
      <div className="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-400 text-lg">
              Have questions or suggestions? Feel free to contact us. Our team is here to help.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg shadow-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Email</h3>
                    <p className="mt-2 text-gray-400">
                      <a href="mailto:contact@qwenimageedit.com" className="hover:text-white">
                        contact@qwenimageedit.com
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Social Media</h3>
                    <div className="mt-2 space-y-2 text-gray-400">
                      <p>
                                <a href="https://twitter.com/QwenImageEdit" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          Twitter: @QwenImageEdit
                        </a>
                      </p>
                      <p>
                                <a href="https://discord.gg/qwenimageedit" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          Discord: Qwen Image Edit Community
                        </a>
                      </p>
                      <p>
                                <a href="https://linkedin.com/company/qwenimageedit" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          LinkedIn: Qwen Image Edit
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Business Hours</h3>
                    <p className="mt-2 text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <NewsletterSubscribe 
              title="Subscribe to Updates"
              description="Subscribe to our newsletter for the latest product updates, tips, and exclusive offers."
            />
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 mb-8">
              Before contacting us, you might find your answer in our
              <a href="/faq" className="text-blue-400 hover:text-blue-300 ml-1">
                FAQ section
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage; 