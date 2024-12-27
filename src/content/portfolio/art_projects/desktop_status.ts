import { Project } from '../projects';

import hero100 from '../../../assets/img/portfolio/desktop_status/hero/100.jpg';
import hero50 from '../../../assets/img/portfolio/desktop_status/hero/50.jpg';
import hero25 from '../../../assets/img/portfolio/desktop_status/hero/25.jpg';
import inSitu100 from '../../../assets/img/portfolio/desktop_status/in_situ/100.jpg';
import inSitu50 from '../../../assets/img/portfolio/desktop_status/in_situ/50.jpg';
import inSitu25 from '../../../assets/img/portfolio/desktop_status/in_situ/25.jpg';

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
    src: hero50,
    alt: 'display with painted letters',
  },
  images: [
    {
      full: hero100,
      half: hero50,
      quarter: hero25,
      alt: 'close up of display with in meeting in painted letters',
    },
    {
      full: inSitu100,
      half: inSitu50,
      quarter: inSitu25,
      alt: 'display on desk that says away',
    },
  ],
  description: 'Makes it easy to know if I can talk or not.',
  bullets: [],
};

export default DESKTOP_STATUS;
