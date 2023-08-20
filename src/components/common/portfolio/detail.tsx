// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';
import { useParams } from 'react-router-dom';
import { ALL_PROJECTS } from '../../../content/portfolio/all';
import { NotFound } from '../not_found';

const notFoundMsg = "I haven't made that project.... yet";


export const PortfolioDetail: FunctionalComponent = () => {
  const { projectKey } = useParams();
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
  if (project.links.length === 2) {
    links = (
      <span>
        <a href={project.links[0].url} className={linkClass} target="blank">
          {project.links[0].text}
        </a>
        <span className="portfolio-detail-dot">·</span>
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

  let iconImageClass = 'portfolio-detail-icon-image';
  if (project.icon.small) {
    iconImageClass += ' portfolio-detail-icon-image-small';
  }

  return (
    <div
      className="portfolio-detail"
    >
      <div className="portfolio-detail-icon">
        <img
          className={iconImageClass}
          src={project.icon.src}
          alt="portfolio icon"
        />
      </div>
      <div>
        <h1 className="portfolio-detail-title">
          {project.name}
        </h1>
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
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail; // for dynamic import
