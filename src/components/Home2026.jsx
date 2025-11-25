import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { HiArrowNarrowRight, HiSparkles } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from './ParticleBackground';

const Home2026 = () => {
  const { isDark } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 50]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      name="home"
      className="relative min-h-screen w-full overflow-hidden transition-all duration-700 bg-[var(--bg-primary)]"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-blob bg-[var(--accent-primary)]/10"
          style={{
            top: '-10%',
            right: '-10%',
            transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-blob bg-[var(--accent-secondary)]/10"
          style={{
            bottom: '-10%',
            left: '-10%',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl animate-blob bg-[var(--accent-tertiary)]/10"
          style={{
            top: '40%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative container max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-20 sm:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16"
      >
        {/* Left Content - Text and CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 space-y-8 text-center lg:text-left z-10"
        >
          <br />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            <span className="gradient-text animate-gradient-shift inline-block">
              Hey Everyone,
            </span>
            <br />
            <span className="text-[var(--text-primary)]">
              I'm{' '}
              <span className="relative inline-block">
                <TypeAnimation
                  sequence={[
                    'Hasnain Makada',
                    2000,
                    'a Developer',
                    2000,
                    'a Creator',
                    2000,
                    'an Innovator',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="gradient-text animate-gradient-shift"
                  repeat={Infinity}
                />
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--accent-gradient)] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0 text-[var(--text-secondary)]"
          >
            Full Stack Developer & Tech Innovator crafting next-generation digital experiences with{' '}
            <span className="gradient-text font-semibold">AI</span>,{' '}
            <span className="gradient-text font-semibold">Web3</span>, and{' '}
            <span className="gradient-text font-semibold">Cloud</span> technologies
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {['React', 'Node.js', 'Flutter', 'AI/ML', 'DevOps'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium hover-lift text-[var(--text-secondary)]"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="works"
                smooth
                duration={800}
                className="group relative inline-flex items-center gap-2 px-8 py-4 theme-gradient rounded-full text-[var(--bg-primary)] font-semibold shadow-lg shadow-[var(--shadow-color)] hover:shadow-2xl hover:shadow-[var(--accent-primary)]/40 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  <HiArrowNarrowRight size={20} />
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-semibold border-2 transition-all duration-300 hover-lift text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/50"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-3 gap-4 pt-8"
          >
            {[
              { label: 'Projects', value: '50+' },
              { label: 'Blogs', value: '40+' },
              { label: 'Experience', value: '2+ Yrs' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2 flex justify-center items-center z-10"
        >
          <div className="relative group">
            {/* Rotating rings */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-[var(--accent-primary)]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border-2 border-[var(--accent-secondary)]/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />

            {/* Image container with 3D effect */}
            <motion.div
              className="profile-image-container relative"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://ik.imagekit.io/1cw2zpbjy/CodeSphere%20Work/portfolio%20image.jpg"
                  alt="Hasnain Makada - Full Stack Developer"
                  className="profile-image-responsive object-cover object-top shadow-2xl"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-primary)]/30 via-transparent to-[var(--accent-secondary)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--accent-gradient)] rounded-full blur-xl opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--accent-gradient)] rounded-full blur-xl opacity-60"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.8, 0.6, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-[var(--text-muted)]"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home2026;
