import React from 'react';
import PromptHeading from './PromptHeading';
import Reveal from './Reveal';
import { useContent } from '../contexts/ContentContext';

const Skills2026 = () => {
  const { skills } = useContent();
  return (
    <Reveal as="section" id="skills" className="max-w-2xl mx-auto px-6 py-10">
      <PromptHeading cmd={skills.heading} branch="mid" />
      <p className="text-[var(--text-secondary)] leading-relaxed font-['JetBrains_Mono'] text-sm">
        {skills.skills.join('  ·  ')}
      </p>

      <p className="text-[var(--text-muted)] mt-6 mb-2 font-['JetBrains_Mono'] text-sm">
        {skills.learningHeading}
      </p>
      <p className="text-[var(--text-secondary)] leading-relaxed font-['JetBrains_Mono'] text-sm">
        {skills.learning.join('  ·  ')}
      </p>
    </Reveal>
  );
};

export default Skills2026;
