import React from 'react';

const CONNECTORS = {
  root: '$',
  mid: '├──',
  last: '└──',
};

const PromptHeading = ({ cmd, level = 2, className = '', branch = 'mid' }) => {
  const Tag = `h${level}`;
  const connector = CONNECTORS[branch] || CONNECTORS.mid;

  return (
    <Tag className={`prompt-heading text-xl font-bold mb-4 ${className}`}>
      <span className="prompt-symbol">{connector}</span>
      <span className="prompt-cmd">{cmd}</span>
    </Tag>
  );
};

export default PromptHeading;
