import React from 'react';
import { useContent } from '../contexts/ContentContext';

const Footer2026 = () => {
  const { footer } = useContent();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)]">
      <div className="max-w-2xl mx-auto px-6 py-8 text-sm text-[var(--text-muted)] font-['JetBrains_Mono']">
        <p>
          <span className="prompt-symbol">$</span> © {currentYear} {footer.copyrightName}
          <span className="cursor-blink text-[var(--text-primary)]">&nbsp;</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer2026;
