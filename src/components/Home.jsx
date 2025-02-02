import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import me from '../assets/Portfolio_Image.png';
const Home = ({ content }) => {
  // Animation states
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle initial load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      name="home"
      className="relative min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950  overflow-hidden  bg-gradient-to-b from-slate-950 to-slate-900 bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100 py-24 px-4  bg-gradient-to-b from-slate-900 to-slate-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse" 
          style={{
            transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`,
          }}
        />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative container max-w-7xl mx-auto min-h-screen px-4 py-20 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24">
        
        {/* Left content - Text and CTA */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          

          {/* Main heading with rotation animation */}
          <h1 className={`text-4xl sm:text-6xl xl:text-7xl font-bold transition-all duration-1000 ${
            loaded ? 'opacity-100 rotate-0' : 'opacity-0 rotate-[45deg]'
          }`}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {content?.fields.landing_caption || "Building Digital"}
            </span>
            
          </h1>

          {/* Description with fade animation */}
          <p className={`text-lg sm:text-xl text-gray-400 max-w-xl transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Crafting responsive and engaging digital solutions through innovative web and mobile development.
          </p>

          {/* CTA buttons */}
          <div className={`flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Link
              to="about"
              smooth
              duration={500}
              className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore My Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <HiArrowNarrowRight size={20} />
              </span>
            </Link>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-gray-300 font-medium border border-slate-700/50 hover:bg-slate-800 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right content - Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className={`relative transition-all duration-1000 ${
            loaded ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-[-45deg]'
          }`}>
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping" />
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-pulse" />
            
            {/* Profile image container */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-1">
              <img
                src={content?.fields?.profile_image || me}
                alt="Profile"
                className="rounded-2xl w-64 h-64 sm:w-80 sm:h-80 object-cover object-center transform transition-transform duration-500 hover:scale-105"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;