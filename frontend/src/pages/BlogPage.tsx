import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Earth Zoom AI Blog - AI Video Technology Insights';
  }, []);

  const blogPosts = [
    {
      id: 'ai-video-revolution',
      title: 'The AI Video Generation Revolution',
      excerpt: 'Discover how AI is transforming video creation with Earth Zoom technology.',
      date: '2024-01-15',
      category: 'Technology',
      image: '/images/earth-zoom/blog/ai-revolution.jpg'
    },
    {
      id: 'education-case-study',
      title: 'Transforming Education with AI Videos',
      excerpt: 'How universities use Earth Zoom AI to improve student engagement.',
      date: '2024-01-12',
      category: 'Education',
      image: '/images/earth-zoom/blog/education.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-earth-blue to-cosmic-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Earth Zoom AI Blog</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Latest insights on AI video technology and industry trends
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="card hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <div className="p-6">
                  <span className="text-xs font-medium text-earth-blue">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 