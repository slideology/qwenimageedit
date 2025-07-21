import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ZOOM EARTH AI About Us Page
 * Introduction to ZOOM EARTH AI's mission, team and technology philosophy
 */
const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-earth-blue via-cosmic-purple to-stellar-silver py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stars opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Us
              <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent block">
                Explore Infinite Perspectives
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We are a group of passionate technology innovators, dedicated to redefining the boundaries of visual experience with AI technology,
              enabling everyone to explore the infinite world from micro to macro.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-space-dark mb-6">Our Story</h2>
              <p className="text-xl text-gray-600">
                From a bold idea to revolutionary technological breakthrough
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-space-dark mb-6">Breaking Visual Boundaries</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  ZOOM EARTH AI was born from a simple yet profound observation: human understanding of visual scale is often limited by our observation tools.
                  We imagined, if we could create a technology that allows any image to seamlessly extend to Earth and even cosmic perspectives,
                  what kind of transformation would it bring to education, art, and science?
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In 2024, our team began this challenge. By combining cutting-edge AI technology, computer vision, and deep learning algorithms,
                  we developed the world's first AI system capable of achieving true "infinite zoom."
                </p>
                <blockquote className="border-l-4 border-earth-blue pl-6 italic text-gray-600">
                  "We believe that the best technology should expand the boundaries of human perception, not just mimic reality."
                  <cite className="block mt-2 text-sm font-medium text-space-dark">- ZOOM EARTH AI Founding Team</cite>
                </blockquote>
              </div>
              
              <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
                <div className="text-center">
                  <img 
                    src="/images/earth-zoom/icons/earth-globe.svg" 
                    alt="ZOOM EARTH AI Vision" 
                    className="w-32 h-32 mx-auto mb-6 animate-float"
                  />
                  <h3 className="text-xl font-bold text-space-dark mb-4">Technology Milestones</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Proof of Concept</span>
                      <span className="text-earth-blue font-medium">March 2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Core Algorithm Breakthrough</span>
                      <span className="text-cosmic-purple font-medium">August 2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Platform Launch</span>
                      <span className="text-solar-gold font-medium">January 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-b from-earth-blue/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-space-dark mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-12">
              Revolutionizing visual experiences through AI technology, enabling everyone to explore the infinite world from micro to macro
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Mission 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-earth-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-space-dark mb-3">Educational Innovation</h3>
                <p className="text-gray-600 text-sm">Make abstract concepts visually intuitive, enhancing learning effectiveness</p>
              </div>

              {/* Mission 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-space-dark mb-3">Creative Inspiration</h3>
                <p className="text-gray-600 text-sm">Provide artists and creators with new dimensions of expression</p>
              </div>

              {/* Mission 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-solar-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V5a2 2 0 00-2 2H8a2 2 0 00-2-2V4m8 2h4l-4 7H12l4-7h4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-space-dark mb-3">Scientific Research</h3>
                <p className="text-gray-600 text-sm">Assist in innovation of scientific visualization and data presentation</p>
              </div>

              {/* Mission 4 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-stellar-silver/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-stellar-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-space-dark mb-3">Technology Democratization</h3>
                <p className="text-gray-600 text-sm">Make advanced technology accessible to more people, promoting digital equality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-space-dark mb-6">Core Team</h2>
              <p className="text-xl text-gray-600">
                Expert team from top global technology companies and research institutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-earth-blue to-cosmic-purple rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">AI</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark mb-2">AI Research Team</h3>
                <p className="text-cosmic-purple font-medium mb-3">Artificial Intelligence Experts</p>
                <p className="text-gray-600 text-sm">
                  AI researchers from top institutions like Stanford and MIT, specializing in computer vision and deep learning
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cosmic-purple to-solar-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">UX</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark mb-2">Design Team</h3>
                <p className="text-solar-gold font-medium mb-3">User Experience Experts</p>
                <p className="text-gray-600 text-sm">
                  Rich experience in internet product design, committed to making complex technology simple and easy to use
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-solar-gold to-earth-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">DEV</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark mb-2">Engineering Team</h3>
                <p className="text-earth-blue font-medium mb-3">Technical Architects</p>
                <p className="text-gray-600 text-sm">
                  Senior engineers from tech giants like Google and Apple, building stable and scalable technical architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-earth-blue/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-space-dark mb-6">Our Values</h2>
              <p className="text-xl text-gray-600">
                Core principles that guide our journey forward
              </p>
            </div>

            <div className="space-y-8">
              {/* Value 1 */}
              <div className="card p-8 flex items-start space-x-6">
                <div className="w-16 h-16 bg-earth-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-space-dark mb-3">Innovation Breakthrough</h3>
                  <p className="text-gray-600">
                    We always pursue technological breakthroughs, never settle for the status quo, and dare to challenge seemingly impossible goals.
                    Every innovation is to make technology better serve human needs.
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="card p-8 flex items-start space-x-6">
                <div className="w-16 h-16 bg-cosmic-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-space-dark mb-3">User First</h3>
                  <p className="text-gray-600">
                    We always put user needs first, committed to creating truly valuable product experiences.
                    The complexity of technology should be hidden behind simple and easy-to-use interfaces.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="card p-8 flex items-start space-x-6">
                <div className="w-16 h-16 bg-solar-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-space-dark mb-3">Open Sharing</h3>
                  <p className="text-gray-600">
                    We believe that the power of knowledge and technology lies in sharing. Through an open attitude and collaborative spirit,
                    we hope to work with developers, researchers, and creators worldwide to advance technological progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-space-dark via-cosmic-purple to-earth-blue text-stellar-silver">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our
            <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent"> Journey of Exploration</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Whether you are a developer, designer, researcher, or creator, we welcome you to join the ZOOM EARTH AI ecosystem,
            and explore the infinite possibilities of visual technology together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/resources" 
              className="btn-primary bg-gradient-to-r from-solar-gold to-earth-blue text-space-dark hover:from-solar-gold/90 hover:to-earth-blue/90 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Development Resources
            </Link>
            
            <Link 
              to="/applications" 
              className="btn-secondary bg-transparent border-2 border-stellar-silver text-stellar-silver hover:bg-stellar-silver/10 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              View Application Cases
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
