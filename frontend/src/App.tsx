import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AffiliateBanner from './components/AffiliateBanner';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

// Earth Zoom AI 页面引入
import ConceptPage from './pages/ConceptPage';
import ApplicationsPage from './pages/ApplicationsPage';
import TechnologyPage from './pages/TechnologyPage';
import ResourcesPage from './pages/ResourcesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AffiliateBanner />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Earth Zoom AI 页面路由 */}
          <Route path="/concept" element={<ConceptPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
