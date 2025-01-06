import { Project } from '../projects';

import paintSet100 from '../../../assets/img/portfolio/paint_set/100.jpg';
import paintSet50 from '../../../assets/img/portfolio/paint_set/50.jpg';
import paintSet25 from '../../../assets/img/portfolio/paint_set/25.jpg';


const PAINT_SET: Project = {
  id: 'paint-set',
  name: 'Paint Set',
  links: [],
  date: '2024-07-22',
  keywords: 'ceramic',
  icon: {
    src: paintSet50,
    alt: 'handmade mini paint palette with cup and brush-rest',
  },
  images: [
    {
      full: paintSet100,
      half: paintSet50,
      quarter: paintSet25,
      alt: 'handmade mini paint palette with cup and brush-rest',
    },
  ],
  description: 'A gift for myself',
  bullets: [],
};

export default PAINT_SET;
