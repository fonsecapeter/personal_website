import * as React from 'react';
import PortfolioItem from './portfolio_item';
import content from './content';

class Portfolio extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h1 className="portfolio-title">Personal Projects</h1>
        <div className="portfolio-list">
          <div className="portfolio-column">
            {content.projects.map((portfolioItem, idx) => {
              if (idx % 2 === 0) {
                return <PortfolioItem portfolio={portfolioItem} key={idx} />;
              }
            })}
          </div>
          <div className="portfolio-column">
            {content.projects.map((portfolioItem, idx) => {
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
