import React from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaCircle } from 'react-icons/fa';
import PromptHeading from './PromptHeading';
import Reveal from './Reveal';
import { useContent } from '../contexts/ContentContext';

const GitHubPinnedRepos = () => {
  const { projectsSettings, projects } = useContent();
  return (
    <Reveal as="section" id="works" className="max-w-2xl mx-auto px-6 py-10">
      <PromptHeading cmd={projectsSettings.heading} branch="mid" />

      <ul className="space-y-5 font-['JetBrains_Mono'] text-sm">
        {projects.map((repo) => (
          <li key={repo.name}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--text-primary)] hover:opacity-70 underline underline-offset-4"
            >
              {repo.name}
            </a>
            <span className="text-[var(--text-secondary)]"> — {repo.description}</span>
            <div className="flex items-center gap-3 mt-1 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1">
                <FaCircle style={{ color: repo.languageColor }} />
                {repo.language}
              </span>
              <span className="flex items-center gap-1">
                <FaStar /> {repo.stars}
              </span>
              <span className="flex items-center gap-1">
                <FaCodeBranch /> {repo.forks}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <a
        href={`${projectsSettings.githubProfileUrl}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-6 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline underline-offset-4"
      >
        <FaGithub /> view all repositories
      </a>
    </Reveal>
  );
};

export default GitHubPinnedRepos;
