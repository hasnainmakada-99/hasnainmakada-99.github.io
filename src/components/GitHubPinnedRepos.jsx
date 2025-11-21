import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaStar, FaCodeBranch, FaCircle } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const GitHubPinnedRepos = () => {
  const { isDark } = useTheme();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const GITHUB_USERNAME = 'hasnainmakada-99';

  useEffect(() => {
    fetchPinnedRepos();
  }, []);

  const fetchPinnedRepos = async () => {
    try {
      setLoading(true);
      
      // Update this array whenever you change your pinned repos on GitHub
      // Just update the repo names here to match your new pins
      const PINNED_REPO_NAMES = [
        'project-aura',
        'Open-Source-With-Hasnain',
        'foodzaam',
        'The-Career-Audit',
        'CodeFlow'
      ];
      
      // Fetch details for each pinned repo from GitHub API
      const repoPromises = PINNED_REPO_NAMES.map(async (repoName) => {
        try {
          const repoResponse = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`
          );
          if (repoResponse.ok) {
            const repo = await repoResponse.json();
            return {
              name: repo.name,
              description: repo.description || 'No description provided',
              url: repo.html_url,
              stargazerCount: repo.stargazers_count,
              forkCount: repo.forks_count,
              primaryLanguage: {
                name: repo.language || 'Unknown',
                color: getLanguageColor(repo.language),
              },
              updatedAt: repo.updated_at,
            };
          }
          return null;
        } catch (error) {
          console.error(`Error fetching ${repoName}:`, error);
          return null;
        }
      });
      
      const repoDetails = await Promise.all(repoPromises);
      const validRepos = repoDetails.filter(repo => repo !== null);
      
      if (validRepos.length > 0) {
        setRepos(validRepos);
      } else {
        throw new Error('No repos fetched');
      }
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      // Fallback with basic data
      setRepos([
        {
          name: 'project-aura',
          description: 'Project AURA - Smart focus tracking application',
          url: `https://github.com/${GITHUB_USERNAME}/project-aura`,
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { name: 'Python', color: '#3572A5' },
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'Open-Source-With-Hasnain',
          description: 'Free beginner-friendly tech resources',
          url: `https://github.com/${GITHUB_USERNAME}/Open-Source-With-Hasnain`,
          stargazerCount: 86,
          forkCount: 77,
          primaryLanguage: { name: 'HTML', color: '#e34c26' },
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'foodzaam',
          description: 'Shazam, But for Food',
          url: `https://github.com/${GITHUB_USERNAME}/foodzaam`,
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { name: 'Dart', color: '#00B4AB' },
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'The-Career-Audit',
          description: 'AI Powered Resume Checker',
          url: `https://github.com/${GITHUB_USERNAME}/The-Career-Audit`,
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { name: 'HTML', color: '#e34c26' },
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'CodeFlow',
          description: 'Platform to learn tech',
          url: `https://github.com/${GITHUB_USERNAME}/CodeFlow`,
          stargazerCount: 0,
          forkCount: 0,
          primaryLanguage: { name: 'Dart', color: '#00B4AB' },
          updatedAt: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Dart: '#00B4AB',
      Go: '#00ADD8',
      Rust: '#dea584',
      'C++': '#f34b7d',
      C: '#555555',
      PHP: '#4F5D95',
      Shell: '#89e051',
    };
    return colors[language] || '#858585';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="works"
      ref={ref}
      className={`relative min-h-screen py-24 px-4 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-[#1a1f2e] via-[#0f1420] to-[#1a1f2e]'
          : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-green-500/10' : 'bg-green-400/8'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '20%', right: '-5%' }}
        />
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-yellow-500/10' : 'bg-yellow-400/8'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '20%', left: '-5%' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
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
            <FaGithub className="text-gray-400" />
            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Featured Projects
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text animate-gradient-shift">
              The Actual Work
            </span>
          </h2>

          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Featured projects and open source repositories showcasing real-world applications
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full"
            />
          </div>
        )}

        {/* Repositories Grid */}
        {!loading && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {repos.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <div className="h-full glass-card rounded-2xl p-6 hover-lift flex flex-col">
                  {/* Repo Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FaGithub className="text-3xl text-gray-400 group-hover:text-yellow-400 transition-colors" />
                      <h3 className={`text-xl font-bold line-clamp-1 group-hover:gradient-text transition-all ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {repo.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm mb-6 flex-grow line-clamp-3 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {repo.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                    {/* Language */}
                    <div className="flex items-center gap-2">
                      <FaCircle 
                        className="text-xs" 
                        style={{ color: repo.primaryLanguage.color }}
                      />
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {repo.primaryLanguage.name}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400 text-sm" />
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {repo.stargazerCount}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCodeBranch className="text-yellow-400 text-sm" />
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {repo.forkCount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* View All on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <FaGithub size={24} />
            <span>View All Repositories</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubPinnedRepos;
