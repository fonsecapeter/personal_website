// eslint-disable-next-line no-unused-vars
import React, { Component, KeyboardEvent } from 'react';
// eslint-disable-next-line no-unused-vars
import { Project } from '../../../content/portfolio/projects';

interface DigitalWorkProps {
  project: Project,
  tabIndex: number,
}
interface DigitalWorkState {
  hidden: boolean,
  expandClass: string,
}

const initialState: DigitalWorkState = {
  hidden: true,
  expandClass: 'hidden',
};
const expandState: DigitalWorkState = {
  hidden: false,
  expandClass: '',
};
const hideState: DigitalWorkState = {
  hidden: true,
  expandClass: 'hidden',
};

export class PortfolioItem extends Component<DigitalWorkProps, DigitalWorkState> {
  readonly state = initialState

  constructor(props: DigitalWorkProps) {
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

  private toggleDropOnEnter(event: KeyboardEvent) {
    const code = event.keyCode || event.charCode;
    if (code === 13) {
      event.preventDefault();
      event.stopPropagation();
      this.toggleDrop();
    }
  }

  public render() {
    const { project, tabIndex } = this.props;
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
      <div
        className="portfolio-item"
        onClick={this.toggleDrop}
        onKeyDown={this.toggleDropOnEnter}
        role="button"
        tabIndex={tabIndex}
      >
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
