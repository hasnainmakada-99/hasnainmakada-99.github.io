import React from 'react';
import PromptHeading from './PromptHeading';
import Reveal from './Reveal';
import { useContent } from '../contexts/ContentContext';

const Agency2026 = () => {
  const { agency } = useContent();
  return (
    <Reveal as="section" id="agency" className="max-w-2xl mx-auto px-6 py-10">
      <PromptHeading cmd={agency.heading} branch="mid" />

      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
        {agency.name}
      </h3>
      <p className="text-sm text-[var(--text-muted)] mb-4 font-['JetBrains_Mono']">
        {agency.role} ·{' '}
        <a
          href={agency.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline underline-offset-4"
        >
          codesphere.agency
        </a>
      </p>

      <p className="text-[var(--text-secondary)] italic mb-4">{agency.tagline}</p>

      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
        {agency.description}
      </p>

      <div className="grid sm:grid-cols-2 gap-6 text-sm font-['JetBrains_Mono']">
        <div>
          <p className="text-[var(--text-muted)] mb-2"># services</p>
          <ul className="text-[var(--text-secondary)] space-y-1">
            {agency.services.map((service) => (
              <li key={service}>
                <span className="text-[var(--text-muted)]">- </span>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[var(--text-muted)] mb-2"># clients</p>
          <ul className="text-[var(--text-secondary)] space-y-1">
            {agency.clients.map((client) => (
              <li key={client}>
                <span className="text-[var(--text-muted)]">- </span>
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-sm text-[var(--text-muted)] font-['JetBrains_Mono']">
        {agency.metrics.join('  ·  ')}
      </p>
    </Reveal>
  );
};

export default Agency2026;
