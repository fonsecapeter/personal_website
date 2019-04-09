import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { Project } from '../../content/projects';
import '../../assets/scss/portfolio.scss';

interface PortfolioProps {
  project: Project
}

const initialState = {
  hidden: true,
  expandClass: 'hidden',
};
type State = Readonly<typeof initialState>;

const expandItem = () => ({
  hidden: false,
  expandClass: '',
});

const hideItem = () => ({
  hidden: true,
  expandClass: 'hidden',
});

export class PortfolioItem extends Component<PortfolioProps, State> {
  readonly state: State = initialState

  constructor({ project }) {
    super({ project });
    this.expand = this.expand.bind(this);
    this.hide = this.hide.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
  }

  private expand() {
    this.setState(expandItem);
  }

  private hide() {
    this.setState(hideItem);
  }

  private toggleDrop() {
    const { project } = this.props;
    const { hidden } = this.state;

    if (project.description) {
      if (hidden) {
        this.expand();
      } else {
        this.hide();
      }
    }
  }

  public render() {
    const { project } = this.props;
    const { expandClass } = this.state;
    const linkClass = 'portfolio-item-link';
    let links = null;
    if (project.links.length === 2) {
      links = (
        <span>
          <a href={project.links[0].url} className={linkClass} target="blank">
            {project.links[0].text}
          </a>
          <span className="portfolio-item-dot">·</span>
          <a href={project.links[1].url} className={linkClass} target="blank">
            {project.links[1].text}
          </a>
        </span>
      );
    } else {
      links = (
        <a href={project.links[0].url} className={linkClass} target="blank">
          {project.links[0].text}
        </a>
      );
    }

    let iconImageClass = 'portfolio-item-icon-image';
    if (project.icon.small) {
      iconImageClass += ' portfolio-item-icon-image-small';
    }

    return (
      <div className="portfolio-item" onClick={this.toggleDrop}>
        <div className="portfolio-item-icon">
          <img
            className={iconImageClass}
            src={project.icon.src}
            alt="portfolio icon"
          />
        </div>
        <div className="portfolio-item-content">
          <h3 className="portfolio-item-title">
            {project.name}
            <span className="portfolio-item-dot">·</span>
            {links}
          </h3>
          <div className={`portfolio-item-description ${expandClass}`}>
            <div>
              <span className="portfolio-item-date">{project.date}</span>
              {project.org ? (
                <a
                  className="portfolio-item-org"
                  href={project.org.link}
                  target="blank"
                >
                  {project.org.name}
                </a>
              ) : null}
              <p className="portfolio-item-keywords">{project.keywords}</p>
            </div>
            <p>{project.description}</p>
            <ul className="portfolio-item-bullets">
              {project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
