import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { NavLink } from './nav_link';

interface NavState {
  selected: string,
}
interface NavLinkSpec {
  name: string,
  select: () => void,
  active: boolean,
}

const ABOUT = 'about';
const EXPERIENCE = 'experience';
const DIGITAL_WORK = 'digital-work';
const PHYSICAL_WORK = 'physical-work';
const FILM = 'film';
const PHOTOGRAPHY = 'photography';

const initialState: NavState = {
  selected: ABOUT,
};
const aboutState: NavState = { selected: ABOUT };
const experienceState: NavState = { selected: EXPERIENCE };
const digitalWorkState: NavState = { selected: DIGITAL_WORK };
const physicalWorkState: NavState = { selected: PHYSICAL_WORK };
const filmState: NavState = { selected: FILM };
const photographyState: NavState = { selected: PHOTOGRAPHY };
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
    this.selectDigitalWork = this.selectDigitalWork.bind(this);
    this.selectPhysicalWork = this.selectPhysicalWork.bind(this);
    this.selectFilm = this.selectFilm.bind(this);
    this.selectPhotography = this.selectPhotography.bind(this);
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
      case DIGITAL_WORK:
        this.selectDigitalWork();
        break;
      case PHYSICAL_WORK:
        this.selectPhysicalWork();
        break;
      case FILM:
        this.selectFilm();
        break;
      case PHOTOGRAPHY:
        this.selectPhysicalWork();
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

  private selectDigitalWork() {
    scrollToTop();
    this.setState(digitalWorkState);
  }

  private selectPhysicalWork() {
    scrollToTop();
    this.setState(physicalWorkState);
  }

  private selectFilm() {
    scrollToTop();
    this.setState(filmState);
  }

  private selectPhotography() {
    scrollToTop();
    this.setState(photographyState);
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
        name: 'Digital Work',
        select: this.selectDigitalWork,
        active: selected === DIGITAL_WORK,
      },
      // {
      //   name: 'Art',
      //   select: this.selectPhysicalWork,
      //   active: selected === PHYSICAL_WORK,  // TODO: Update this to art
      // },
      // {
      //   name: FILM,
      //   select: this.selectFilm,
      //   active: selected === FILM,
      // },
      // {
      //   name: PHOTOGRAPHY,
      //   select: this.selectPhotography,
      //   active: selected === PHOTOGRAPHY,
      // },
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
