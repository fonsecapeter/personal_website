// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, KeyboardEvent } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Experience } from '../../content/experiences';

type ExperienceProps = {
  readonly experience: Experience,
};

export const ExperienceItem = ({ experience }: ExperienceProps) => {
  const [hidden, setHidden] = useState(false);

  const toggleDrop = () => {
    if (experience.bullets.length > 0) {
      if (hidden) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    }
  };

  const toggleDropOnEnter = (event: KeyboardEvent) => {
    const code = event.keyCode || event.charCode;
    if (code === 13) {
      event.preventDefault();
      event.stopPropagation();
      toggleDrop();
    }
  };

  const expandClass = hidden ? 'hidden' : 'experience-item-bullets';
  let primary = null;
  if (experience.primary) {
    primary = <p>{experience.primary}</p>;
  }

  let action: (() => void) | null = null;
  let actionOnEnter: ((event: KeyboardEvent) => void) | null = null;
  let experienceItemClassName = 'experience-item';
  let tabIndex = -1;
  if (experience.bullets.length > 0) {
    action = () => toggleDrop();
    actionOnEnter = (event) => toggleDropOnEnter(event);
    experienceItemClassName += '-interactive';
    tabIndex = 0;
  }

  return (
    <div
      className={experienceItemClassName}
      onClick={action}
      onKeyDown={actionOnEnter}
      role="button"
      tabIndex={tabIndex}
    >
      <div className="experience-item-content">
        <div className="experience-item-left">
          <img
            src={experience.icon}
            className="experience-item-icon"
            alt="icon"
          />
        </div>
        <div className="experience-item-right">
          <h3 className="experience-item-title">
            {experience.title}
          </h3>
          <p>
            <span className="experience-item-date">
              {experience.date}
            </span>
            <span className="experience-item-dot">·</span>
            <a
              className="experience-item-org"
              href={experience.link}
              target="blank"
              rel="noopener noreferrer"
            >
              {experience.org}
            </a>
          </p>
          {primary}
          <div>
            <ul className={expandClass}>
              {experience.bullets.map(bullet => (
                <li
                  key={bullet}
                  dangerouslySetInnerHTML={{ __html: bullet }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
