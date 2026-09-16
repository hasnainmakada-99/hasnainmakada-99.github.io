import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';
import { SiHashnode, SiDevdotto } from 'react-icons/si';
import PromptHeading from './PromptHeading';
import Reveal from './Reveal';
import { useContent } from '../contexts/ContentContext';

const Blogs2026 = () => {
  const { blogsSettings: blogsConfig } = useContent();
  const [devToBlogs, setDevToBlogs] = useState([]);
  const [hashnodeBlogs, setHashnodeBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  const DEV_TO_USERNAME = blogsConfig.devToUsername;
  const HASHNODE_BLOG_URL = blogsConfig.hashnodeHost;

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

  return (
    <Reveal as="section" id="blogs" className="max-w-2xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
        <PromptHeading cmd={blogsConfig.heading} branch="mid" className="mb-0" />
        <div className="flex gap-3 text-xs font-['JetBrains_Mono']">
          {[
            { id: 'all', label: 'All' },
            { id: 'devto', label: 'Dev.to' },
            { id: 'hashnode', label: 'Hashnode' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={
                activeTab === tab.id
                  ? 'text-[var(--text-primary)] underline underline-offset-4'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <p className="text-sm text-[var(--text-muted)]">Loading articles…</p>
      )}

      {!loading && (
        <ul className="space-y-5 font-['JetBrains_Mono'] text-sm">
          {filteredBlogs.map((blog, index) => (
            <li key={blog.id || index}>
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--text-primary)] hover:opacity-70 underline underline-offset-4"
              >
                {blog.title}
              </a>
              <div className="flex items-center gap-3 mt-1 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  {blog.source === 'devto' ? <SiDevdotto /> : <SiHashnode />}
                  {blog.source === 'devto' ? 'Dev.to' : 'Hashnode'}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock /> {blog.reading_time_minutes || 5} min
                </span>
              </div>
              {(blog.description || blog.brief) && (
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {blog.description || blog.brief}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-6 text-sm text-[var(--text-muted)]">
        More on{' '}
        <a
          href={blogsConfig.devToUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline underline-offset-4"
        >
          Dev.to
        </a>{' '}
        and{' '}
        <a
          href={blogsConfig.hashnodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline underline-offset-4"
        >
          Hashnode
        </a>
        .
      </p>
    </Reveal>
  );
};

export default Blogs2026;
