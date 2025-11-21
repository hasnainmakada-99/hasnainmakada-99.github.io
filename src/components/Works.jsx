import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from '../contexts/ThemeContext';

const Works = () => {
  const { isDark } = useTheme();
  
  // Default projects array - replace with your actual projects
  const projects = [
    {
      work_title: "AI-Powered Portfolio",
      work_description: "Modern portfolio with AI-driven animations and interactive elements",
      work_tech_stack: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
      work_links: "https://github.com/hasnainmakada-99",
    },
    {
      work_title: "E-Commerce Platform",
      work_description: "Full-stack e-commerce solution with payment integration",
      work_tech_stack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      work_links: "https://github.com/hasnainmakada-99",
    },
    {
      work_title: "Real-time Chat App",
      work_description: "WebSocket-based chat application with real-time messaging",
      work_tech_stack: ["React", "Socket.io", "Express", "Redis"],
      work_links: "https://github.com/hasnainmakada-99",
    },
  ];
  
  // Animation variants for staggered card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Custom card component for better organization
  const ProjectCard = ({ work, index }) => (
    <motion.div
      variants={cardVariants}
      className={`group relative flex flex-col h-full backdrop-blur-sm rounded-xl overflow-hidden border ${
        isDark 
          ? 'bg-slate-800/50 border-slate-700/50' 
          : 'bg-white/50 border-gray-300/50'
      }`}
    >
      {/* Project Header with Gradient Accent */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 group-hover:opacity-0 transition-opacity duration-300" />
        <div className="p-6">
          <h3 className={`text-xl sm:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {work.work_title}
          </h3>
          {/* Project number indicator */}
          <div className={`absolute top-4 right-4 text-sm font-mono ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="flex-grow p-6 pt-0">
        <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-white' : 'text-gray-800'}`}>
          <br />
          {work.work_description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 flex items-center justify-between">
        <a
          href={work.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          <Github className="w-5 h-5" />
          <span>View Code</span>
        </a>
      </div>

      {/* Interactive Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );

  return (
    <section
      id="works"
      className={`relative min-h-screen w-full py-20 px-4 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-950 to-slate-900 text-gray-300' 
          : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
      }`}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500"
          >
            The Actual Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-4 text-lg sm:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            A showcase of my recent work and side projects exploring various
            technologies and solutions.
          </motion.p>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((work, index) => (
            <ProjectCard key={index} work={work} index={index} />
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/hasnainmakada-99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-slate-800/50 text-white rounded-lg border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
