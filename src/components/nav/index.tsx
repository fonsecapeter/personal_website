import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { NavLink } from './nav_link';

type NavState = {
  selected: string | null,
};
type NavLinkSpec = {
  readonly name: string,
  readonly select: () => void,
  readonly active: boolean,
};

const ABOUT = 'about';
const EXPERIENCE = 'experience';
const CODE = 'code';
const ART = 'art';

const initialState: NavState = {
  selected: ABOUT,
};
const aboutState: NavState = { selected: ABOUT };
const experienceState: NavState = { selected: EXPERIENCE };
const codeState: NavState = { selected: CODE };
const artState: NavState = { selected: ART };
const clearedState: NavState = { selected: null };
const scrollToTop = () => window.scrollTo(0, 0);

class NavBase extends Component<RouteComponentProps, NavState> {
  readonly state = initialState;

  unlisten = null; // set in componentWillMount

  constructor(props: RouteComponentProps) {
    super(props);
    this.selectLink = this.selectLink.bind(this);
    this.selectAbout = this.selectAbout.bind(this);
    this.selectExperience = this.selectExperience.bind(this);
    this.selectCode = this.selectCode.bind(this);
    this.selectArt = this.selectArt.bind(this);
  }

  componentWillMount() {
    const { history } = this.props;
    this.selectLink();
    this.unlisten = history.listen(() => {
      this.selectLink();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  private selectLink() {
    // Select from url hash fragment because there is not history location on initial load
    const path = window.location.hash.replace('#/', '');
    switch (path) {
      case ABOUT:
        this.selectAbout();
        break;
      case EXPERIENCE:
        this.selectExperience();
        break;
      case CODE:
        this.selectCode();
        break;
      case ART:
        this.selectArt();
        break;
      case '':
        this.selectAbout();
        break;
      default:
        this.clear();
    }
  }

  private clear() {
    this.setState(clearedState);
  }

  private selectAbout() {
    scrollToTop();
    this.setState(aboutState);
  }

  private selectExperience() {
    scrollToTop();
    this.setState(experienceState);
  }

  private selectCode() {
    scrollToTop();
    this.setState(codeState);
  }

  private selectArt() {
    scrollToTop();
    this.setState(artState);
  }

  public render() {
    const { selected } = this.state;
    const links: NavLinkSpec[] = [
      {
        name: ABOUT,
        select: this.selectAbout,
        active: selected === ABOUT,
      },
      {
        name: ART,
        select: this.selectArt,
        active: selected === ART,
      },
      {
        name: CODE,
        select: this.selectCode,
        active: selected === CODE,
      },
      {
        name: EXPERIENCE,
        select: this.selectExperience,
        active: selected === EXPERIENCE,
      },
    ];
    return (
      <nav id="nav" className={`nav nav-${selected}`}>
        {links.map((link) => (
          <NavLink
            name={link.name}
            active={link.active}
            onClick={() => link.select()}
            key={link.name}
          />
        ))}
      </nav>
    );
  }
}

export const Nav = withRouter(NavBase);
