import React from 'react';
import { PortfolioItem } from './portfolio_item';
import { PROJECTS } from '../../content/projects';

export const Portfolio: React.SFC = () => (
  <div>
    <h1 className="portfolio-title">Personal Projects</h1>
    <div className="portfolio-list">
      <div className="portfolio-column">
        {PROJECTS.map(project => (
          <PortfolioItem project={project} key={project.name} />
        ))}
      </div>
      <div className="portfolio-column-desktop">
        {PROJECTS.map((project, idx) => {
          if (idx % 2 === 0) {
            return <PortfolioItem project={project} key={project.name} />;
          }
          return '';
        })}
      </div>
      <div className="portfolio-column-desktop">
        {PROJECTS.map((project, idx) => {
          if (idx % 2 !== 0) {
            return <PortfolioItem project={project} key={project.name} />;
          }
          return '';
        })}
      </div>
    </div>
  </div>
);

export default Portfolio; // for dynamic import
