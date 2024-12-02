import { Project } from '../projects';

import studio1Way100 from '../../../assets/img/portfolio/studio_1way/100.jpg';
import studio1Way50 from '../../../assets/img/portfolio/studio_1way/50.jpg';
import studio1Way25 from '../../../assets/img/portfolio/studio_1way/25.jpg';


export const STUDIO_1WAY: Project = {
  id: 'studio_1way',
  name: 'Studio 1Way',
  links: [
    {
      text: 'instagram',
      url: 'https://www.instagram.com/peternfonseca/p/C7-R914y3zP',
    },
    {
      text: 'behance',
      url: 'https://www.behance.net/gallery/203665523/Studio-1Way',
    },
  ],
  date: '2024-05-06',
  keywords: 'art studio',
  icon: {
    src: studio1Way50,
    alt: 'one way sign',
  },
  images: [
    {
      full: studio1Way100,
      half: studio1Way50,
      quarter: studio1Way25,
      alt: 'one way sign',
    },
  ],
  description: 'Here in San Francisco.',
  bullets: [],
};
