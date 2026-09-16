import React from 'react';
import PromptHeading from './PromptHeading';
import Reveal from './Reveal';
import { useContent } from '../contexts/ContentContext';

const About2026 = () => {
  const { about } = useContent();
  return (
    <Reveal as="section" id="about" className="max-w-2xl mx-auto px-6 py-10">
      <PromptHeading cmd={about.heading} branch="mid" />
      <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p>{about.platformsNote}</p>
      </div>
    </Reveal>
  );
};

export default About2026;
