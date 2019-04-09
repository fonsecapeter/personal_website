import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Experience } from '../../content/experiences';

interface ExperienceProps {
  experience: Experience,
}

export class ExperienceItem extends React.Component<ExperienceProps> {
  state = {
    hidden: false,
    experienceBulletExpandClass: '',
  };

  constructor({ experience }) {
    super({ experience });
    this.expand = this.expand.bind(this);
    this.hide = this.hide.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
  }

  expand() {
    this.setState({
      hidden: false,
      experienceBulletExpandClass: 'experience-item-bullets',
    });
  }

  hide() {
    this.setState({
      hidden: true,
      experienceBulletExpandClass: 'hidden',
    });
  }

  toggleDrop() {
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

  public render() {
    const { experience } = this.props;
    const { experienceBulletExpandClass } = this.state;
    let primary = null;
    if (experience.primary) {
      primary = <p>{experience.primary}</p>;
    }

    let action = null;
    let experienceItemClassName = 'experience-item';
    if (experience.bullets.length > 0) {
      action = this.toggleDrop;
      experienceItemClassName += '-interactive';
    }

    return (
      <div className={experienceItemClassName} onClick={action}>
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
              <ul className={experienceBulletExpandClass}>
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
