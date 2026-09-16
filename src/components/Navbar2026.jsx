import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';

const Navbar2026 = () => {
  const { isDark, toggleTheme } = useTheme();
  const { nav, social } = useContent();

  return (
    <header className="max-w-2xl mx-auto px-6 pt-10 pb-6 font-['JetBrains_Mono']">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="text-sm leading-relaxed">
          <span className="text-[var(--text-muted)]">hasnain@portfolio:~$ </span>
          <nav className="inline">
            {nav.items.map(({ title, path }, i) => (
              <React.Fragment key={path}>
                {i > 0 && ' '}
                <Link
                  to={path}
                  smooth
                  duration={500}
                  className="cursor-pointer text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  <span className="text-[var(--text-muted)]">[</span>
                  {title.toLowerCase()}
                  <span className="text-[var(--text-muted)]">]</span>
                </Link>
              </React.Fragment>
            ))}
          </nav>
          <span className="cursor-blink text-[var(--text-primary)]">&nbsp;</span>
        </div>

        <button
          onClick={toggleTheme}
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 flex-shrink-0"
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-[var(--text-muted)]">
        {social.links.map((link, i) => (
          <React.Fragment key={link.label}>
            {i > 0 && <span>·</span>}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              {link.label}
            </a>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
};

export default Navbar2026;
