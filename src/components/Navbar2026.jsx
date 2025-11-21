import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaTwitter, FaSun, FaMoon, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiHashnode, SiDevdotto } from 'react-icons/si';
import { Link } from 'react-scroll';
import { useTheme } from '../contexts/ThemeContext';

const Navbar2026 = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const navigationItems = [
    { title: 'Home', path: 'home' },
    { title: 'About', path: 'about' },
    { title: 'Skills', path: 'skills' },
    { title: 'Projects', path: 'works' },
    { title: 'Blogs', path: 'blogs' },
    { title: 'Contact', path: 'contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/hasnainmakada-99', icon: <FaGithub size={18} />, label: 'GitHub' },
    { href: 'https://x.com/Hasnain_Makada', icon: <FaTwitter size={18} />, label: 'Twitter' },
    { href: 'https://linkedin.com/in/hasnainmakada-99', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
    { href: 'https://hasnainm.hashnode.dev', icon: <SiHashnode size={18} />, label: 'Hashnode' },
    { href: 'https://dev.to/hasnainmakada', icon: <SiDevdotto size={18} />, label: 'Dev.to' },
  ];

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (timeoutId) window.cancelAnimationFrame(timeoutId);

      timeoutId = window.requestAnimationFrame(() => {
        setHasScrolled(window.scrollY > 20);
        const currentPosition = window.scrollY + 100;

        let detectedSection = 'home';
        navigationItems.forEach(({ path }) => {
          const section = document.getElementById(path);
          if (section) {
            const { top, bottom } = section.getBoundingClientRect();
            if (top <= 100 && bottom >= 100) {
              detectedSection = path;
            }
          }
        });

        setCurrentSection(detectedSection);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) window.cancelAnimationFrame(timeoutId);
    };
  }, [navigationItems]);

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hasScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`relative rounded-2xl transition-all duration-500 ${
              hasScrolled
                ? 'glass-card shadow-2xl'
                : 'bg-transparent'
            }`}
          >
            <div className="flex items-center justify-between h-16 px-6">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Link
                  to="home"
                  smooth
                  duration={500}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 rounded-lg blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 via-amber-500 to-yellow-600 flex items-center justify-center font-bold text-black text-xl">
                        H
                      </div>
                    </div>
                    <span className={`hidden sm:block text-xl font-bold gradient-text whitespace-nowrap`}>
                      Hasnain Makada
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navigationItems.map(({ title, path }) => (
                  <Link
                    key={path}
                    to={path}
                    smooth
                    duration={500}
                    offset={-80}
                    spy
                    className="cursor-pointer relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        currentSection === path
                          ? 'gradient-text'
                          : isDark
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {title}
                      {currentSection === path && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-600/10 rounded-xl -z-10"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-3">
                {/* Social Links */}
                <div className="flex items-center gap-2">
                  {socialLinks.slice(0, 3).map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-lg glass-card transition-all duration-300 ${
                        isDark
                          ? 'text-gray-300 hover:text-yellow-400'
                          : 'text-gray-700 hover:text-yellow-600'
                      }`}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>

                {/* Theme Toggle */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-lg glass-card transition-all duration-300"
                  aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                >
                  <AnimatePresence mode="wait">
                    {isDark ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaSun size={18} className="text-yellow-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaMoon size={18} className="text-yellow-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center gap-2">
                {/* Mobile Theme Toggle */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-3 rounded-lg glass-card"
                  aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                >
                  {isDark ? (
                    <FaSun size={20} className="text-yellow-400" />
                  ) : (
                    <FaMoon size={20} className="text-yellow-500" />
                  )}
                </motion.button>

                {/* Hamburger Menu */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-3 rounded-lg glass-card"
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                      >
                        <FaTimes size={24} className={isDark ? 'text-gray-300' : 'text-gray-700'} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                      >
                        <FaBars size={24} className={isDark ? 'text-gray-300' : 'text-gray-700'} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed inset-0 z-40 lg:hidden ${
                isDark ? 'bg-black/80' : 'bg-white/80'
              } backdrop-blur-md`}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed right-0 top-0 bottom-0 w-80 max-w-full z-50 ${
                isDark ? 'bg-[#0f1420]' : 'bg-white'
              } shadow-2xl overflow-y-auto`}
            >
              <div className="p-6 space-y-8">
                {/* Close Button */}
                <div className="flex justify-end">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg glass-card"
                  >
                    <FaTimes size={24} className={isDark ? 'text-gray-300' : 'text-gray-700'} />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-2">
                  {navigationItems.map(({ title, path }, index) => (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={path}
                        smooth
                        duration={500}
                        offset={-80}
                        onClick={() => setIsMenuOpen(false)}
                        className="cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ x: 10 }}
                          className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                            currentSection === path
                              ? 'glass-card gradient-text'
                              : isDark
                              ? 'text-gray-300 hover:text-white'
                              : 'text-gray-700 hover:text-gray-900'
                          }`}
                        >
                          {title}
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className={`text-sm font-semibold uppercase tracking-wider ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Connect With Me
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 rounded-xl glass-card flex flex-col items-center gap-2 text-center transition-all duration-300"
                        aria-label={link.label}
                      >
                        <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                          {link.icon}
                        </span>
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {link.label}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar2026;
