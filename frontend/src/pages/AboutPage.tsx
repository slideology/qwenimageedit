import React from 'react';
import { useTranslation } from 'react-i18next';
import AdBanner from '../components/AdBanner';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">{t('aboutPage.title')}</h1>
        <p className="text-lg text-gray-600">{t('aboutPage.description')}</p>
      </div>



      {/* Our Mission */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('aboutPage.ourMission.title')}</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-4">
            {t('aboutPage.ourMission.content')}
          </p>
          <p className="text-gray-600">
            {t('aboutPage.ourMission.believe')}
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
            <li>{t('aboutPage.ourMission.point1')}</li>
            <li>{t('aboutPage.ourMission.point2')}</li>
            <li>{t('aboutPage.ourMission.point3')}</li>
            <li>{t('aboutPage.ourMission.point4')}</li>
          </ul>
        </div>
      </div>

      {/* Technology & Innovation */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('aboutPage.technology.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white mb-4">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('aboutPage.technology.feature1.title')}</h3>
            <p className="text-gray-600">
              {t('aboutPage.technology.feature1.description')}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-purple-500 text-white mb-4">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('aboutPage.technology.feature2.title')}</h3>
            <p className="text-gray-600">
              {t('aboutPage.technology.feature2.description')}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-500 text-white mb-4">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('aboutPage.technology.feature3.title')}</h3>
            <p className="text-gray-600">
              {t('aboutPage.technology.feature3.description')}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-red-500 text-white mb-4">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('aboutPage.technology.feature4.title')}</h3>
            <p className="text-gray-600">
              {t('aboutPage.technology.feature4.description')}
            </p>
          </div>
        </div>
      </div>

      {/* 广告横幅 */}
      <div className="max-w-4xl mx-auto mb-12">
        <AdBanner />
      </div>
    </div>
  );
};

export default AboutPage;
