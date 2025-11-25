import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiHashnode, SiDevdotto } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

const Footer2026 = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/hasnainmakada-99', label: 'GitHub' },
    { icon: <FaTwitter size={20} />, href: 'https://x.com/Hasnain_Makada', label: 'Twitter' },
    { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/hasnainmakada-99', label: 'LinkedIn' },
    { icon: <SiHashnode size={20} />, href: 'https://hasnainm.hashnode.dev', label: 'Hashnode' },
    { icon: <SiDevdotto size={20} />, href: 'https://dev.to/hasnainmakada', label: 'Dev.to' },
    { icon: <FaEnvelope size={20} />, href: 'mailto:hasnainmakada@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#works' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-[var(--bg-secondary)]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-[var(--accent-primary)]/5" style={{ top: '0%', left: '10%' }} />
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-[var(--accent-secondary)]/5" style={{ bottom: '0%', right: '10%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                <span className="gradient-text">Hasnain Makada</span>
              </h3>
              <p className="text-base sm:text-lg max-w-md text-[var(--text-secondary)]">
                Full Stack Developer passionate about building innovative solutions
                and sharing knowledge with the tech community.
              </p>
            </motion.div>

            {/* Built With */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="text-sm text-[var(--text-muted)]">
                Built with React + Vite
              </span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-6 text-[var(--text-primary)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block transition-all duration-300 hover:translate-x-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-6 text-[var(--text-primary)]">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg glass-card transition-all duration-300 text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t my-8 border-[var(--border-color)]" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-center sm:text-left text-[var(--text-muted)]">
            © {currentYear} Hasnain Makada. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[var(--text-muted)]">
              Made with
            </span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span className="text-[var(--text-muted)]">
              and
            </span>
            <span className="gradient-text font-semibold">React</span>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-8 right-8 p-4 theme-gradient rounded-full text-[var(--bg-primary)] shadow-lg hover:shadow-2xl transition-all duration-300 z-40"
              aria-label="Scroll to top"
            >
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
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer2026;
