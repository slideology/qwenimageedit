import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AdBanner from '../components/AdBanner';
import GoogleAdSenseBanner from '../components/GoogleAdSenseBanner';

// Mock gallery data
const mockImages = [
  {
    id: 1,
    title: 'Totoro in the Forest',
    author: 'Miyazaki Fan',
    imageUrl: '/images/ghibli/2.jpeg',
    style: 'My Neighbor Totoro',
    likes: 120,
    createdAt: '2023-04-15'
  },
  {
    id: 2,
    title: 'Castle in the Sky',
    author: 'Ghibli Enthusiast',
    imageUrl: '/images/ghibli/3.jpeg',
    style: 'Castle in the Sky',
    likes: 98,
    createdAt: '2023-04-14'
  },
  {
    id: 3,
    title: 'World of Spirited Away',
    author: 'Animation Creator',
    imageUrl: '/images/ghibli/4.jpeg',
    style: 'Spirited Away',
    likes: 156,
    createdAt: '2023-04-13'
  },
  {
    id: 4,
    title: "Howl's Moving Castle",
    author: 'Fantasy Artist',
    imageUrl: '/images/ghibli/5.jpeg',
    style: "Howl's Moving Castle",
    likes: 87,
    createdAt: '2023-04-12'
  },
  {
    id: 5,
    title: 'Porco Rosso Flying',
    author: 'Aviation Fan',
    imageUrl: '/images/ghibli/6.jpeg',
    style: 'Porco Rosso',
    likes: 65,
    createdAt: '2023-04-11'
  },
  {
    id: 6,
    title: 'Ponyo on the Cliff',
    author: 'Ocean Enthusiast',
    imageUrl: '/images/ghibli/7.jpeg',
    style: 'Ponyo',
    likes: 110,
    createdAt: '2023-04-10'
  }
];

// Filter options
const styleOptions = ['All', 'My Neighbor Totoro', 'Castle in the Sky', 'Spirited Away', "Howl's Moving Castle", 'Porco Rosso', 'Ponyo'];
const sortOptions = ['Newest', 'Most Popular', 'Oldest'];

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and sort images
  const filteredImages = mockImages
    .filter(image => 
      (selectedStyle === 'All' || image.style === selectedStyle) &&
      (image.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       image.author.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'Newest') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else if (sortBy === 'Most Popular') {
        return b.likes - a.likes;
      } else {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
    });

  return (
    <>
      {/* Google 广告位 */}
      <GoogleAdSenseBanner />
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">{t('galleryPage.title')}</h1>
        <p className="text-lg text-gray-600">{t('galleryPage.description')}</p>
      </div>

      {/* Search and Filter Area */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search Box */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder={t('galleryPage.searchPlaceholder')}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Style Filter */}
          <div className="w-full md:w-1/3">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
            >
              {styleOptions.map((style) => (
                <option key={style} value={style}>
                  {t(`galleryPage.styleOption.${style.toLowerCase().replace(/[' ]/g, '')}`)}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div className="w-full md:w-1/3">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {t(`galleryPage.sortOption.${option.toLowerCase().replace(/[ ]/g, '')}`)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 广告横幅 */}
      <AdBanner />
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative pb-2/3">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{image.title}</h3>
                <p className="text-gray-600 mb-2">{t('galleryPage.createdBy')}: {image.author}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                    {image.style}
                  </span>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-red-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-600">{image.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">{t('galleryPage.noResults')}</h3>
            <p className="mt-1 text-gray-500">{t('galleryPage.tryDifferent')}</p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center">
          <button className="px-3 py-1 rounded-md mr-2 bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white">
            {t('galleryPage.pagination.previous')}
          </button>
          <button className="px-3 py-1 rounded-md bg-blue-500 text-white mr-2">1</button>
          <button className="px-3 py-1 rounded-md mr-2 bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white">
            2
          </button>
          <button className="px-3 py-1 rounded-md mr-2 bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white">
            3
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white">
            {t('galleryPage.pagination.next')}
          </button>
        </nav>
      </div>
    </div>
  );
};

    </>
  );

export default GalleryPage;
