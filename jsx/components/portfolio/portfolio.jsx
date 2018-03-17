"use strict";

const React = require('react');
const PortfolioItem = require('./portfolio_item');
const content = require('./content');

const Portfolio = React.createClass({
  render () {

    return (
      <div>
        <h1 className="portfolio-title">Personal Projects</h1>
        <div className="portfolio-list">
          <div className="portfolio-column">
            {
              content.projects.map( (portfolioItem, idx) => {
                if (idx % 2 === 0) {
                  return (
                    <PortfolioItem portfolio={ portfolioItem } key={ idx } />
                  )
                }
              })
            }
          </div>
          <div className="portfolio-column">
            {
              content.projects.map( (portfolioItem, idx) => {
                if (idx % 2 !== 0) {
                  return (
                    <PortfolioItem portfolio={ portfolioItem } key={ idx } />
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;
