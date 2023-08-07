import React, { Component } from 'react';
import { NavLink } from './nav_link';

interface NavProps {}
interface NavState {
  selected: string,
}

const ABOUT = 'about';
const EXPERIENCE = 'experience';
const PORTFOLIO = 'portfolio';
const CONTACT = 'contact';

const initialState: NavState = {
  selected: ABOUT,
};
const aboutState: NavState = { selected: ABOUT };
const experienceState: NavState = { selected: EXPERIENCE };
const portfolioState: NavState = { selected: PORTFOLIO };
const contactState: NavState = { selected: CONTACT };
const scrollToTop = () => window.scrollTo(0, 0);

export class Nav extends Component<NavProps, NavState> {
  readonly state = initialState

  constructor(props: NavProps) {
    super(props);
    this.selectAbout = this.selectAbout.bind(this);
    this.selectExperience = this.selectExperience.bind(this);
    this.selectPortfolio = this.selectPortfolio.bind(this);
    this.selectContact = this.selectContact.bind(this);
  }

  public componentDidMount() {
    // Select from url hash fragment, allows direct linking
    const path = window.location.hash.replace('#/', '');
    switch (path) {
      case ABOUT:
        this.selectAbout();
        break;
      case EXPERIENCE:
        this.selectExperience();
        break;
      case PORTFOLIO:
        this.selectPortfolio();
        break;
      case CONTACT:
        this.selectContact();
        break;
      default:
        this.selectAbout();
    }
  }

  private selectAbout() {
    scrollToTop();
    this.setState(aboutState);
  }

  private selectExperience() {
    scrollToTop();
    this.setState(experienceState);
  }

  private selectPortfolio() {
    scrollToTop();
    this.setState(portfolioState);
  }

  private selectContact() {
    scrollToTop();
    this.setState(contactState);
  }

  public render() {
    const { selected } = this.state;
    const links = [
      {
        name: ABOUT,
        select: this.selectAbout,
        active: selected === ABOUT,
      },
      {
        name: EXPERIENCE,
        select: this.selectExperience,
        active: selected === EXPERIENCE,
      },
      {
        name: PORTFOLIO,
        select: this.selectPortfolio,
        active: selected === PORTFOLIO,
      },
      {
        name: CONTACT,
        select: this.selectContact,
        active: selected === CONTACT,
      },
    ];
    return (
      <nav id="nav" className={`nav nav-${selected}`}>
        {links.map((link, idx) => (
          <NavLink
            name={link.name}
            active={link.active}
            onClick={link.select}
            key={link.name}
            tabIndex={idx}
          />
        ))}
      </nav>
    );
  }
}
