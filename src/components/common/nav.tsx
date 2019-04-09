import React from 'react';
import { Link } from 'react-router-dom';

interface NavProps {}
const LINK_CLASS = 'nav-link';
const ACTIVE_LINK_CLASS = 'nav-link-active';

const initialClasses = {
  navClass: 'nav-about',
  aboutClass: LINK_CLASS,
  experienceClass: LINK_CLASS,
  portfolioClass: LINK_CLASS,
  contactClass: LINK_CLASS,
};

const initialLinks = {
  aboutTo: 'about',
  experienceTo: 'experience',
  portfolioTo: 'portfolio',
  contactTo: 'contact',
};

const initialState = {
  classes: initialClasses,
  links: initialLinks,
};
type State = Readonly<typeof initialState>;

const activateAbout = () => ({
  classes: {
    ...initialClasses,
    navClass: 'nav-about',
    aboutClass: ACTIVE_LINK_CLASS,
  },
  links: {
    ...initialLinks,
    aboutTo: '',
  }
});

const activateExperience = () => ({
  classes: {
    ...initialClasses,
    navClass: 'nav-experience',
    experienceClass: ACTIVE_LINK_CLASS,
  },
  links: {
    ...initialLinks,
    experienceTo: '',
  }
});

const activatePortfolio = () => ({
  classes: {
    ...initialClasses,
    navClass: 'nav-portfolio',
    portfolioClass: ACTIVE_LINK_CLASS,
  },
  links: {
    ...initialLinks,
    portfolioTo: '',
  }
});

const activateContact = () => ({
  classes: {
    ...initialClasses,
    navClass: 'nav-contact',
    contactClass: ACTIVE_LINK_CLASS,
  },
  links: {
    ...initialLinks,
    contactTo: '',
  }
});

export class Nav extends React.Component<NavProps, State> {
  readonly state: State = initialState

  constructor({ classes, links }) {
    super({ classes, links });
    this.selectAbout = this.selectAbout.bind(this);
    this.selectExperience = this.selectExperience.bind(this);
    this.selectPortfolio = this.selectPortfolio.bind(this);
    this.selectContact = this.selectContact.bind(this);
  }

  public componentDidMount() {
    const path = window.location.hash.replace('#', '');
    if (path === '/' || path === '/about') {
      this.selectAbout();
    } else if (path === '/experience') {
      this.selectExperience();
    } else if (path === '/portfolio') {
      this.selectPortfolio();
    } else if (path === '/contact') {
      this.selectContact();
    }
  }

  private selectAbout() {
    this.setState(activateAbout());
  }

  private selectExperience() {
    this.setState(activateExperience());
  }

  private selectPortfolio() {
    this.setState(activatePortfolio());
  }

  private selectContact() {
    this.setState(activateContact());
  }

  public render() {
    const { classes, links } = this.state;
    return (
      <div>
        <nav id="nav" className={classes.navClass}>
          <Link
            className={classes.aboutClass}
            to={links.aboutTo}
            onClick={this.selectAbout}
          >
            About
          </Link>
          <Link
            className={classes.experienceClass}
            to={links.experienceTo}
            onClick={this.selectExperience}
          >
            Experience
          </Link>
          <Link
            className={classes.portfolioClass}
            to={links.portfolioTo}
            onClick={this.selectPortfolio}
          >
            Portfolio
          </Link>
          <Link
            className={classes.contactClass}
            to={links.contactTo}
            onClick={this.selectContact}
          >
            Contact
          </Link>
        </nav>
        <div className="nav-underlay" />
      </div>
    );
  }
}
