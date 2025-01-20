import React, { useState } from 'react';

const Blogs = ({ content }) => {
  // State for hover effects and animations
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Fallback blog data if content is not provided
  const defaultBlogs = [
    {
      blog_title: "The Future of AI Development",
      blog_cover: "/api/placeholder/800/400",
      blog_url: "#",
      blog_excerpt: "Exploring the latest trends in artificial intelligence and machine learning",
      blog_date: "2025-01-15",
      reading_time: "5 min read"
    },
    {
      blog_title: "Quantum Computing for Developers",
      blog_cover: "/api/placeholder/800/400",
      blog_url: "#",
      blog_excerpt: "Understanding the basics of quantum computing from a developer's perspective",
      blog_date: "2025-01-10",
      reading_time: "7 min read"
    }
  ];

  // Use provided content or fallback to default
  const blogs = content?.fields.blog || defaultBlogs;

  return (
    <div
      id="blogs"
      className="relative min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 bg-gradient-to-b from-slate-900 to-slate-950 py-24 px-4"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-1/4 -right-48" />
        <div className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl bottom-1/4 -left-48" />
      </div>

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of technology, innovation, and development
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <a
              href={blog.blog_url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:scale-102 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Image container */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={blog.blog_cover}
                    alt={blog.blog_title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content container */}
                <div className="p-6 space-y-4">
                  {/* Meta information */}
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {blog.blog_date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {blog.reading_time}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                    {blog.blog_title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 line-clamp-2">
                    {blog.blog_excerpt}
                  </p>

                  {/* Read more link */}
                  <div className="pt-4 flex items-center text-blue-400 group-hover:text-blue-300">
                    <span className="font-medium">Read article</span>
                    <svg 
                      className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View all blogs CTA */}
        <div className="mt-16 text-center">
          <a
            href="#all-blogs"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;