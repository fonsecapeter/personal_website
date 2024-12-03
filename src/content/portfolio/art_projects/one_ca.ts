import { Project } from '../projects';

import oneCA100 from '../../../assets/img/portfolio/1_ca/100.jpg';
import oneCA50 from '../../../assets/img/portfolio/1_ca/50.jpg';
import oneCA25 from '../../../assets/img/portfolio/1_ca/25.jpg';


export const ONE_CA: Project = {
  id: 'one-ca',
  name: '1 California',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/95895635/1-California',
  }],
  date: '2019',
  keywords: 'watercolor',
  icon: {
    src: oneCA50,
    alt: 'painting of bus',
  },
  images: [
    {
      full: oneCA100,
      half: oneCA50,
      quarter: oneCA25,
      alt: 'painting of bus',
    },
  ],
  description: 'A very sentimental muni line.',
  bullets: [],
};
