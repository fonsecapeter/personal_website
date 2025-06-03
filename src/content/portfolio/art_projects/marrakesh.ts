import { Project } from '../projects';

import marrakesh100 from '../../../assets/img/portfolio/marrakesh/100.jpg';
import marrakesh50 from '../../../assets/img/portfolio/marrakesh/50.jpg';
import marrakesh25 from '../../../assets/img/portfolio/marrakesh/25.jpg';


const MARRAKESH: Project = {
  id: 'marrakesh',
  name: 'Marrakesh',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/177148519/Marrakesh',
  }],
  date: '2023',
  keywords: 'pastel',
  icon: {
    src: marrakesh50,
    alt: 'picure of girl',
  },
  images: [
    {
      full: marrakesh100,
      half: marrakesh50,
      quarter: marrakesh25,
      alt: 'picure of girl',
    },
  ],
  description: 'Made while on vacation.',
  bullets: [],
};

export default MARRAKESH;
