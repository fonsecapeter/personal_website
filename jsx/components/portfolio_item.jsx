const React = require('react');

const PortfolioItem = React.createClass({
  getInitialState() {
    return ({
      arrowClass: 'arrow drop-down',
      expandClass: 'hidden',
    });
  },

  expand() {
    this.setState({
      arrowClass: 'arrow pull-up',
      expandClass: 'portfolio-item-description',
    });
  },

  hide() {
    this.setState({
      arrowClass: 'arrow drop-down',
      expandClass: 'hidden',
    });
  },

  toggleDrop() {
    if (this.props.portfolio.description) {
      if (this.state.arrowClass === 'arrow drop-down') {
        this.expand();
      } else {
        this.hide();
      }
    }
  },

  render() {
    const linkClass = 'portfolio-item-link';
    let links = null;
    if (this.props.portfolio.links.length === 2) {
      links = (
        <span>
          <a
            href={this.props.portfolio.links[0].url}
            className={linkClass}
            target="blank"
          >
            {this.props.portfolio.links[0].text}
          </a>
          <span className="portfolio-item-dot">·</span>
          <a
            href={this.props.portfolio.links[1].url}
            className={linkClass}
            target="blank"
          >
            {this.props.portfolio.links[1].text}
          </a>
        </span>
      );
    } else {
      links = (
        <a
          href={this.props.portfolio.links[0].url}
          className={linkClass}
          target="blank"
        >
          {this.props.portfolio.links[0].text}
        </a>
      );
    }

    let iconImageClass = 'portfolio-item-icon-image';
    if (this.props.portfolio.icon.small) {
      iconImageClass += ' portfolio-item-icon-image-small';
    }

    return (
      <div className="portfolio-item">
        <div className="portfolio-item-icon">
          <img
            className={iconImageClass}
            src={this.props.portfolio.icon.src}
            alt="portfolio icon"
          />
        </div>
        <div className="portfolio-item-content">
          <h3 className="portfolio-item-title" onClick={this.toggleDrop}>
            { this.props.portfolio.name }
            <span className="portfolio-item-dot">·</span>
            { links }
            <img
              className={this.state.arrowClass}
              src="public/img/icons/arrow.svg"
              alt="V"
            />
          </h3>
          <div className={this.state.expandClass}>
            <div>
              <span className="portfolio-item-date">{this.props.portfolio.date}</span>
              <a
                className="portfolio-item-org"
                href={this.props.portfolio.org.link}
                target="blank"
              >
                {this.props.portfolio.org.name}
              </a>
              <p className="portfolio-item-keywords">{this.props.portfolio.keywords}</p>
            </div>
            <p>{this.props.portfolio.description}</p>
            <ul className="portfolio-item-bullets">
              {
                this.props.portfolio.bullets.map((bullet, idx) => {
                  return (
                    <li key={idx}>{bullet}</li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = PortfolioItem;
