import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import PromptHeading from './PromptHeading';
import { useContent } from '../contexts/ContentContext';

const Home2026 = () => {
  const { profile } = useContent();
  const typeSequence = profile.roles.flatMap((role) => [role, 2000]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section name="home" id="home" className="max-w-2xl mx-auto px-6 py-6">
      <p className="font-['JetBrains_Mono'] text-xs text-[var(--text-muted)] mb-1">
        ~/portfolio
      </p>
      <PromptHeading cmd="whoami" branch="root" className="text-sm mb-4" />

      <div className="flex items-start gap-5">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="flex-shrink-0 rounded-full cursor-zoom-in"
          aria-label={`View larger photo of ${profile.name}`}
        >
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border border-[var(--border-color)] hover:opacity-80 transition-opacity duration-200"
          />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            {profile.name}
          </h1>
          <p className="text-[var(--text-secondary)] mt-1 font-['JetBrains_Mono'] text-sm">
            <span className="text-[var(--text-muted)]">// </span>
            <TypeAnimation
              sequence={typeSequence}
              wrapper="span"
              speed={50}
              className="text-[var(--text-primary)]"
              repeat={Infinity}
            />
          </p>
        </div>
      </div>

      <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
        {profile.intro}
      </p>

      <p className="mt-4 text-sm text-[var(--text-muted)] font-['JetBrains_Mono']">
        {profile.statsLine} ·{' '}
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline underline-offset-4"
        >
          resume.pdf
        </a>
      </p>

      {lightboxOpen && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setLightboxOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setLightboxOpen(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 cursor-zoom-out"
        >
          <img
            src={profile.avatar}
            alt={profile.name}
            className="max-w-full max-h-full rounded-lg border border-[var(--border-color)]"
          />
        </div>
      )}
    </section>
  );
};

export default Home2026;
