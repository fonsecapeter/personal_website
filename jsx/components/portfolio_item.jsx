"use strict";

const React = require('react');
const Link = require('react-router').Link;

const PortfolioItem = React.createClass({
  getInitialState () {
    return ({
      portfolioDropClass: 'arrow drop-down',
      portfolioDescriptionExpandClass: 'hidden'
    })
  },

  expand () {
    this.setState({
      portfolioDropClass: 'arrow pull-up',
      portfolioDescriptiontExpandClass: 'portfolio-item-bullets'
    })
  },

  hide () {
    this.setState({
      portfolioDropClass: 'arrow drop-down',
      portfolioDescriptionExpandClass: 'hidden'
    })
  },

  toggleDrop () {
    if (this.props.portfolio.description) {
      if (this.state.portfolioDropClass === 'arrow drop-down') {
        this.expand();
      } else {
        this.hide();
      }
    }
  },

  render () {
    const linkClass = 'portfolio-item-link';
    let links = null;
    if (this.props.portfolio.links.length === 2) {
      links = (
        <span>
          <a href={ this.props.portfolio.links[0].url } className={ linkClass }>{ this.props.portfolio.links[0].text }</a> · <a href={ this.props.portfolio.links[1].url } className={ linkClass }>{ this.props.portfolio.links[1].text }</a>
        </span>
      );
    } else {
      links = <a href={ this.props.portfolio.links[0].url }>{ this.props.portfolio.links[0].text }</a>;
    }

    return (
      <div className="portfolio-item">
        <div className="portfolio-item-content">
          <h1>{ this.props.portfolio.name } · { links }</h1>
          <p>
            <span className="portfolio-item-date">{ this.props.portfolio.date }</span> &nbsp;
            <a href={ this.props.portfolio.org.link } target="blank">{ this.props.portfolio.org.name }</a>
            <p className="portfolio-item-keywords">{ this.props.portfolio.keywords }</p>
          </p>
          <img src={ this.props.portfolio.icon.src } className="portfolio-item-screenshot" width={this.props.portfolio.icon.width}></img>
          <p>{ this.props.portfolio.description }</p>
          <ul className="portfolio-item-bullets">
            {
              this.props.portfolio.bullets.map( (bullet, idx) => {
                return (
                  <li key={ idx }>{ bullet }</li>
                );
              })
            }
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = PortfolioItem;
