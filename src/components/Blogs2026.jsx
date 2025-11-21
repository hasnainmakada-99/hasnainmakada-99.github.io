import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHashtag, FaArrowRight, FaClock, FaHeart, FaComment, FaRss } from 'react-icons/fa';
import { SiHashnode, SiDevdotto } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

const Blogs2026 = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [devToBlogs, setDevToBlogs] = useState([]);
  const [hashnodeBlogs, setHashnodeBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  const DEV_TO_USERNAME = 'hasnainmakada99';
  const HASHNODE_BLOG_URL = 'hasnainm.hashnode.dev';

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      // Fetch Dev.to RSS Feed
      try {
        const devToResponse = await fetch(`https://dev.to/feed/${DEV_TO_USERNAME}`);
        const devToText = await devToResponse.text();
        const devToParser = new DOMParser();
        const devToXml = devToParser.parseFromString(devToText, 'text/xml');
        const devToItems = devToXml.querySelectorAll('item');
        
        const devToPosts = Array.from(devToItems).slice(0, 6).map(item => {
          const getTextContent = (tagName) => {
            const element = item.querySelector(tagName);
            return element ? element.textContent : '';
          };

          const description = getTextContent('description');
          
          return {
            id: getTextContent('guid') || getTextContent('link'),
            title: getTextContent('title'),
            description: description.replace(/<[^>]*>/g, '').substring(0, 200),
            url: getTextContent('link'),
            cover_image: null,
            published_at: getTextContent('pubDate'),
            reading_time_minutes: calculateReadingTime(description),
            source: 'devto',
          };
        });
        
        setDevToBlogs(devToPosts);
      } catch (error) {
        console.error('Error fetching Dev.to RSS:', error);
      }

      // Fetch Hashnode RSS Feed
      try {
        // Use Hashnode's public API instead of RSS feed (more reliable)
        const hashnodeResponse = await fetch('https://gql.hashnode.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                publication(host: "${HASHNODE_BLOG_URL}") {
                  posts(first: 6) {
                    edges {
                      node {
                        id
                        title
                        brief
                        slug
                        url
                        coverImage {
                          url
                        }
                        publishedAt
                        readTimeInMinutes
                      }
                    }
                  }
                }
              }
            `,
          }),
        });

        const hashnodeData = await hashnodeResponse.json();
        const hashnodePosts = hashnodeData?.data?.publication?.posts?.edges || [];
        
        console.log('Hashnode posts found:', hashnodePosts.length);
        
        const formattedHashnodePosts = hashnodePosts.map(({ node }) => ({
          id: node.id,
          title: node.title,
          description: node.brief || '',
          url: node.url,
          cover_image: node.coverImage?.url || null,
          published_at: node.publishedAt,
          reading_time_minutes: node.readTimeInMinutes || 5,
          source: 'hashnode',
        }));
        
        setHashnodeBlogs(formattedHashnodePosts);
      } catch (error) {
        console.error('Error fetching Hashnode RSS:', error);
      }

    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const extractImageFromContent = (content) => {
    if (!content) return null;
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : null;
  };

  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes || 5;
  };

  const allBlogs = [...devToBlogs, ...hashnodeBlogs].sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  );

  const filteredBlogs =
    activeTab === 'all'
      ? allBlogs
      : activeTab === 'devto'
      ? devToBlogs
      : hashnodeBlogs;

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
    <div
      id="blogs"
      className={`relative min-h-screen py-24 px-4 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-[#0f1420] via-[#1a1f2e] to-[#0f1420]'
          : 'bg-gradient-to-b from-gray-50 via-white to-yellow-50'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-yellow-500/10' : 'bg-yellow-400/5'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '20%', right: '-10%' }}
        />
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-amber-500/10' : 'bg-amber-400/5'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '20%', left: '-10%' }}
        />
      </div>

      {/* Main Content */}
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
          >
            <FaHashtag className="text-yellow-400" />
            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Latest Articles
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text animate-gradient-shift">
              My Blog Posts
            </span>
          </h2>

          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Sharing insights on web development, AI, cloud technologies, and modern software engineering
          </p>
        </motion.div>

        {/* Platform Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { id: 'all', label: 'All Posts', icon: <FaHashtag /> },
            { id: 'devto', label: 'Dev.to', icon: <SiDevdotto /> },
            { id: 'hashnode', label: 'Hashnode', icon: <SiHashnode /> },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-black shadow-lg'
                  : isDark
                  ? 'glass-card text-gray-300 hover:text-white'
                  : 'glass-card text-gray-700 hover:text-gray-900'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </motion.button>
          ))}
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

        {/* Blogs Grid */}
        {!loading && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id || index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="h-full glass-card rounded-2xl overflow-hidden hover-lift flex flex-col">
                    {/* Image for Hashnode or Gradient Header for Dev.to */}
                    {blog.cover_image ? (
                      <div className="relative overflow-hidden aspect-video">
                        <motion.img
                          src={blog.cover_image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ) : (
                      /* Gradient header for Dev.to blogs without images */
                      <div className="relative overflow-hidden h-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              <SiDevdotto className="text-white text-6xl opacity-20" />
                            </div>
                          </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-xl" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-xl" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                      {/* Source Badge and Reading Time */}
                      <div className="flex items-center justify-between">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium ${
                          blog.source === 'devto'
                            ? 'bg-gray-900 text-white'
                            : isDark ? 'bg-yellow-900/50 text-yellow-300' : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {blog.source === 'devto' ? (
                            <>
                              <SiDevdotto size={14} />
                              <span>Dev.to</span>
                            </>
                          ) : (
                            <>
                              <SiHashnode size={14} />
                              <span>Hashnode</span>
                            </>
                          )}
                        </div>
                        <div className={`flex items-center gap-1 text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <FaClock />
                          <span>{blog.reading_time_minutes || 5} min</span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-xl font-bold line-clamp-2 group-hover:gradient-text transition-all duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {blog.title}
                      </h3>

                      {/* Description */}
                      <p className={`line-clamp-3 text-sm flex-1 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {blog.description || blog.brief || 'Click to read more...'}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-yellow-400 font-medium text-sm mt-auto pt-2">
                        <span>Read article</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <FaArrowRight size={14} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center space-y-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://dev.to/hasnainmakada"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <SiDevdotto size={20} />
              View on Dev.to
              <FaArrowRight />
            </motion.a>

            <motion.a
              href="https://hasnainm.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-amber-700 rounded-full text-black font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <SiHashnode size={20} />
              View on Hashnode
              <FaArrowRight />
            </motion.a>
          </div>

          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            Follow me on these platforms for more content on web development, cloud technologies, and AI
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs2026;
