import React from 'react';
import { useSiteConfig } from '@/lib/useSiteConfig';
import Image from "next/image";

export default function HomePage() {
  const config = useSiteConfig();
  if (!config) return <div className="text-center py-20">Loading...</div>;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-32 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          {config.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {config.hero.subtitle}
        </p>
        <a
          href={config.hero.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {config.hero.ctaText}
        </a>
      </section>

      {/* Features/Showcase Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              See It In Action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Check out these amazing transformations created with our AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.features.map((feature, idx) => (
              <div key={feature.title} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden flex items-center justify-center bg-gray-900">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
