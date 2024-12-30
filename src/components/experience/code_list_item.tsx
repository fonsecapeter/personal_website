// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Language } from '../../content/languages';

interface CodeListItemProps {
  readonly language: Language;
}

const CodeListItem = ({ language }: CodeListItemProps) => {
  let frameworks = [];
  if (language.frameworks.length > 0) {
    frameworks = language.frameworks.map((framework, idx) => (
      <span key={framework.name}>
        {idx > 0 && ', '}
        <a href={framework.link} target="_blank" rel="noopener noreferrer">
          {framework.name}
        </a>
      </span>
    ));
  }

  return (
    <div className="experience-code-list-item">
      <div className="experience-code-list-item-icon">
        <img
          src={language.icon}
          className="experience-code-list-item-icon-image"
          alt={language.name}
        />
      </div>
      <div>
        <p>
          <span className="experience-code-list-item-name">
            {language.name}
          </span>
          {frameworks.length >= 1 && frameworks}
        </p>
      </div>
    </div>
  );
};

export default CodeListItem;
