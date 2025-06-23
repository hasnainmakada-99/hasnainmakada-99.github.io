import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-6 right-6 z-[60] p-3 rounded-full transition-all duration-300 ease-in-out
        ${isDark 
          ? 'bg-slate-800/80 hover:bg-slate-700/80 text-yellow-400' 
          : 'bg-white/80 hover:bg-gray-100/80 text-slate-700'
        }
        backdrop-blur-md border shadow-lg hover:shadow-xl
        ${isDark ? 'border-slate-600/50' : 'border-gray-200/50'}
        hover:scale-110 active:scale-95
        group
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6 overflow-hidden">
        {/* Sun Icon */}
        <svg
          className={`
            absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out
            ${isDark 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
            }
          `}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`
            absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out
            ${isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-0'
            }
          `}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Tooltip */}
      <div className={`
        absolute -bottom-12 left-1/2 transform -translate-x-1/2
        px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        pointer-events-none
        ${isDark 
          ? 'bg-slate-700 text-white' 
          : 'bg-gray-800 text-white'
        }
      `}>
        {isDark ? 'Light mode' : 'Dark mode'}
        <div className={`
          absolute -top-1 left-1/2 transform -translate-x-1/2
          w-2 h-2 rotate-45
          ${isDark ? 'bg-slate-700' : 'bg-gray-800'}
        `} />
      </div>
    </button>
  );
};

export default ThemeToggle;