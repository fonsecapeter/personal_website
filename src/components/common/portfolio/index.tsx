// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { PortfolioItem } from './item';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Project } from '../../../content/portfolio/projects';
import '../../../assets/scss/portfolio.scss';
import { SEOTags } from '../seo';

type PortfolioProps = {
  readonly title: String,
  readonly projects: Project[],
  readonly category: string,
};

export const Portfolio = ({ title, projects, category }: PortfolioProps) => (
  <div>
    <SEOTags title={`P. Fonseca\'s ${category}`} />
    <h1 className="page-title">{ title }</h1>
    <div className="portfolio-list">
      <div className="portfolio-column">
        {projects.map(project => (
          <PortfolioItem
            project={project}
            key={project.name}
            category={category}
          />
        ))}
      </div>
      <div className="portfolio-column-desktop">
        {projects.map((project, idx) => {
          if (idx % 2 === 0) {
            return (
              <PortfolioItem
                project={project}
                key={project.name}
                category={category}
              />
            );
          }
          return '';
        })}
      </div>
      <div className="portfolio-column-desktop">
        {projects.map((project, idx) => {
          if (idx % 2 !== 0) {
            return (
              <PortfolioItem
                project={project}
                key={project.name}
                category={category}
              />
            );
          }
          return '';
        })}
      </div>
    </div>
  </div>
);

export default Portfolio; // for dynamic import
