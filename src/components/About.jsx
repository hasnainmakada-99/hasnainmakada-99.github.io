import React from 'react';
import { motion } from 'framer-motion';

const About = ({ content }) => {
  // Animation variants for scroll-triggered animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div 
      id="about" 
      className="relative min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100 py-24 px-4  bg-gradient-to-b from-slate-900 to-slate-950"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48" />
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48" />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Myself
              </h2>
              <p className="text-xl text-gray-300 font-medium">
                {content?.fields.about_caption || "Pushing the Boundaries of Technology"}
              </p>
            </div>

            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed">
                {content?.fields.about_details ||
                  "As a forward-thinking technologist in 2025, I specialize in creating seamless digital experiences using cutting-edge tools and frameworks. My expertise spans across AI-enhanced development, quantum-ready applications, and sustainable tech solutions."}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3">
              
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">
                DevOps
              </span>
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">
                Flutter
              </span>
            </div>

            {/* Blog Links */}
            <div className="space-y-4">
              <p className="text-gray-400">Find my thoughts on:</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://hasnainm.hashnode.dev"
                  className="group flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all"
                >
                  <span className="text-blue-400">Hashnode</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="https://showwcase.com/hasnainmakada-99"
                  className="group flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all"
                >
                  <span className="text-purple-400">Showwcase</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Achievements */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">0-1</div>
              <div className="text-gray-400 mt-2">Years of Experience</div>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400">5+</div>
              <div className="text-gray-400 mt-2">Projects Completed</div>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400">40+</div>
              <div className="text-gray-400 mt-2">Blog Posts</div>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-teal-400">100k+</div>
              <div className="text-gray-400 mt-2">Lines of Code</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#works"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View My Work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;