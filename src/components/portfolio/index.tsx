import * as React from 'react';
import PortfolioItem from './portfolio_item';
import projects from '../../content/projects';

class Portfolio extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h1 className="portfolio-title">Personal Projects</h1>
        <div className="portfolio-list">
          <div className="portfolio-column">
            {projects.map((portfolioItem, idx) => {
              if (idx % 2 === 0) {
                return <PortfolioItem portfolio={portfolioItem} key={idx} />;
              }
            })}
          </div>
          <div className="portfolio-column">
            {projects.map((portfolioItem, idx) => {
              if (idx % 2 !== 0) {
                return <PortfolioItem portfolio={portfolioItem} key={idx} />;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
