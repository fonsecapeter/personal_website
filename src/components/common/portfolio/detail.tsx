// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ALL_PROJECTS } from '../../../content/portfolio/all';
import { NotFound } from '../not_found';

const notFoundMsg = "I haven't made that project.... yet";

interface MatchParams {
  projectKey: string;
}

interface PortfolioDetailProps extends RouteComponentProps<MatchParams> {}


export class PortfolioDetail extends Component<PortfolioDetailProps> {
  constructor(props: PortfolioDetailProps) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  private goBack(category: string) {
    const { history } = this.props;
    return () => {
      history.push(`/${category}`);
    };
  }

  public render() {
    const { match } = this.props;
    const { projectKey } = match.params;  //
    const [category, projectId] = projectKey.split('.');
    if (!(category in ALL_PROJECTS)) {
      return (<NotFound msg={notFoundMsg} />);
    }
    const project = ALL_PROJECTS[category].find(proj => proj.id === projectId);
    if (project === undefined) {
      return (<NotFound msg={notFoundMsg} />);
    }

    const linkClass = 'portfolio-detail-link';
    let links = null;
    if (project.links.length > 0) {
      links = (
        <span>
          <a href={project.links[0].url} className={linkClass} target="blank">
            {project.links[0].text}
          </a>
          {project.links.slice(1).map(projectLink => (
            <span>
              <span className="portfolio-detail-dot">·</span>
              <a href={projectLink.url} className={linkClass} target="blank">
                {projectLink.text}
              </a>
            </span>
          ))}
        </span>
      );
    }

    let iconImageClass = 'portfolio-detail-image-img';
    if (project.icon.small) {
      iconImageClass += ' portfolio-detail-image-img-small';
    }
    let media;
    if (project.video) {
      media = <iframe width="560" height="315" src={project.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>;
    } else {
      media = (
        <img
          className={iconImageClass}
          src={project.icon.src}
          alt="portfolio icon"
        />
      );
    }

    return (
      <div
        className="portfolio-detail"
      >
        <h1 className="portfolio-detail-title">
          {project.name}
        </h1>
        <div className="portfolio-detail-image">
          {media}
        </div>
        <div>
          <div>
            <div>
              {links}
            </div>
            <div className="portfolio-detail-info">
              <span className="portfolio-detail-date">{project.date}</span>
              {project.org ? (
                <a
                  className="portfolio-detail-org"
                  href={project.org.link}
                  target="blank"
                >
                  {project.org.name}
                </a>
              ) : null}
              <p className="portfolio-detail-keywords">{project.keywords}</p>
            </div>
            <p className="portfolio-detail-description">{project.description}</p>
            <ul className="portfolio-detail-bullets">
              {project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
            </ul>
            <button
              className="portfolio-detail-back-button"
              type="button"
              onClick={this.goBack(category)}
            >
              ← BACK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PortfolioDetail); // for dynamic import
