// eslint-disable-next-line no-unused-vars
import React, { Component, KeyboardEvent } from 'react';
// eslint-disable-next-line no-unused-vars
import { Experience } from '../../content/experiences';

interface ExperienceProps {
  experience: Experience,
}
interface ExperienceState {
  hidden: boolean,
  expandClass: string,
}

const initialState: ExperienceState = {
  hidden: false,
  expandClass: '',
};
const expandState: ExperienceState = {
  hidden: false,
  expandClass: 'experience-item-bullets',
};
const hideState: ExperienceState = {
  hidden: true,
  expandClass: 'hidden',
};

export class ExperienceItem extends Component<ExperienceProps, ExperienceState> {
  readonly state = initialState

  constructor(props: ExperienceProps) {
    super(props);
    this.expand = this.expand.bind(this);
    this.hide = this.hide.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
    this.toggleDropOnEnter = this.toggleDropOnEnter.bind(this);
  }

  private expand() {
    this.setState(expandState);
  }

  private hide() {
    this.setState(hideState);
  }

  private toggleDrop() {
    const { experience } = this.props;
    const { hidden } = this.state;
    if (experience.bullets.length > 0) {
      if (hidden) {
        this.expand();
      } else {
        this.hide();
      }
    }
  }

  private toggleDropOnEnter(event: KeyboardEvent) {
    const code = event.keyCode || event.charCode;
    if (code === 13) {
      event.preventDefault();
      event.stopPropagation();
      this.toggleDrop();
    }
  }

  public render() {
    const { experience } = this.props;
    const { expandClass } = this.state;
    let primary = null;
    if (experience.primary) {
      primary = <p>{experience.primary}</p>;
    }

    let action = null;
    let actionOnEnter = null;
    let experienceItemClassName = 'experience-item';
    let tabIndex = -1;
    if (experience.bullets.length > 0) {
      action = this.toggleDrop;
      actionOnEnter = this.toggleDropOnEnter;
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
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: bullet }}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
