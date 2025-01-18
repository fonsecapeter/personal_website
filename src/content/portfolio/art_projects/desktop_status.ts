import { Project } from '../projects';

import animation100 from '../../../assets/img/portfolio/desktop_status/animation/100.gif';
import animation15 from '../../../assets/img/portfolio/desktop_status/animation/15.gif';
import hero100 from '../../../assets/img/portfolio/desktop_status/hero/100.jpg';
import hero25 from '../../../assets/img/portfolio/desktop_status/hero/25.jpg';
import inSitu100 from '../../../assets/img/portfolio/desktop_status/in_situ/100.jpg';
import inSitu50 from '../../../assets/img/portfolio/desktop_status/in_situ/50.jpg';
import inSitu25 from '../../../assets/img/portfolio/desktop_status/in_situ/25.jpg';
import plan100 from '../../../assets/img/portfolio/desktop_status/plan/100.jpg';
import plan50 from '../../../assets/img/portfolio/desktop_status/plan/50.jpg';
import plan25 from '../../../assets/img/portfolio/desktop_status/plan/25.jpg';
import signature100 from '../../../assets/img/portfolio/desktop_status/signature/100.jpg';
import signature50 from '../../../assets/img/portfolio/desktop_status/signature/50.jpg';
import signature25 from '../../../assets/img/portfolio/desktop_status/signature/25.jpg';

const DESKTOP_STATUS: Project = {
  id: 'desktop-status',
  name: 'Desktop Status',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/165218955/Desktop-Status',
  }],
  date: '2023',
  keywords: 'industrial design',
  icon: {
    src: animation15,
    alt: 'display with painted letters',
  },
  images: [
    {
      full: hero100,
      half: animation100,
      quarter: hero25,
      alt: 'close up of spinning analog display with hand-painted letters',
    },
    {
      full: inSitu100,
      half: inSitu50,
      quarter: inSitu25,
      alt: 'analog display on desk that says away',
    },
    {
      full: plan100,
      half: plan50,
      quarter: plan25,
      alt: 'drawing of build plan',
    },
    {
      full: signature100,
      half: signature50,
      quarter: signature25,
      alt: 'signature on bottom',
    },
  ],
  description: 'Makes it easy to know if I can talk or not.',
  bullets: [],
};

export default DESKTOP_STATUS;
