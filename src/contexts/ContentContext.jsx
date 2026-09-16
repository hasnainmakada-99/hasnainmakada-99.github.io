import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchAllContent } from '../lib/sanity';

const ContentContext = createContext();

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllContent()
      .then(setContent)
      .catch((err) => {
        console.error('Failed to fetch content from Sanity:', err);
        setError(err);
      });
  }, []);

  if (error) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
        Failed to load content. Please refresh the page.
      </div>
    );
  }

  if (!content) {
    return null;
  }

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
};
