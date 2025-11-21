import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaCode, FaBrain, FaCloud } from 'react-icons/fa';
import { SiHashnode, SiDevdotto, SiGithub, SiLinkedin } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

const About2026 = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skills = [
    { icon: <FaCode />, title: 'Full Stack Development', desc: 'React, Node.js, Flutter & Modern Frameworks' },
    { icon: <FaBrain />, title: 'AI & Machine Learning', desc: 'Generative AI, NLP & Data Science' },
    { icon: <FaCloud />, title: 'Cloud & DevOps', desc: 'AWS, Azure, Docker & Kubernetes' },
    { icon: <FaRocket />, title: 'Innovation', desc: 'Web3, Blockchain & Emerging Tech' },
  ];

  const stats = [
    { label: 'Years Experience', value: '2+', color: 'from-yellow-500 to-amber-500' },
    { label: 'Projects Completed', value: '50+', color: 'from-purple-500 to-pink-500' },
    { label: 'Blog Articles', value: '40+', color: 'from-green-500 to-teal-500' },
    { label: 'Code Commits', value: '1000+', color: 'from-orange-500 to-red-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div
      id="about"
      className={`relative min-h-screen py-24 px-4 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-[#1a1f2e] via-[#0f1420] to-[#1a1f2e]'
          : 'bg-gradient-to-b from-purple-50 via-white to-blue-50'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-amber-500/10' : 'bg-amber-400/8'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '-10%' }}
        />
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-yellow-500/10' : 'bg-yellow-400/8'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '10%', right: '-10%' }}
        />
      </div>

      {/* Main Content */}
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
          >
            <FaRocket className="text-yellow-400" />
            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              About Me
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text animate-gradient-shift">
              Building the Future,
            </span>
            <br />
            <span className={isDark ? 'text-white' : 'text-gray-900'}>
              One Line at a Time
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Who Am I?
              </h3>
              <div className={`text-lg leading-relaxed space-y-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p>
                  I'm a passionate Full Stack Developer with a keen interest in building scalable, user-centric applications. My journey in tech began with a curiosity for how things work, and has evolved into a career dedicated to creating innovative solutions.
                </p>
                <p>
                  With expertise spanning across modern web frameworks, mobile development, cloud computing, and AI/ML, I bring a holistic approach to software development. I believe in writing clean, maintainable code and staying updated with the latest industry trends.
                </p>
                <p>
                  When I'm not coding, you'll find me writing technical articles on Dev.to and Hashnode, contributing to open-source projects, or exploring new technologies that can make a difference in people's lives.
                </p>
              </div>
            </div>

            {/* Blog Links */}
            <div className="space-y-4 pt-4">
              <h4 className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Find my thoughts on:
              </h4>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://hasnainm.hashnode.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-6 py-3 glass-card rounded-xl hover-lift"
                >
                  <SiHashnode className="text-yellow-500 text-xl" />
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Hashnode
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Technical Deep Dives
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://dev.to/hasnainmakada"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-6 py-3 glass-card rounded-xl hover-lift"
                >
                  <SiDevdotto className="text-gray-900 dark:text-white text-xl" />
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Dev.to
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Tutorials & Guides
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="glass-card p-6 rounded-2xl hover-lift group"
              >
                <div className="text-4xl mb-4 gradient-text">{skill.icon}</div>
                <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {skill.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl text-center hover-lift"
            >
              <motion.div
                className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#works"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 rounded-full text-black font-semibold shadow-lg shadow-amber-500/30 hover:shadow-2xl transition-all duration-300"
          >
            <span>View My Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About2026;
