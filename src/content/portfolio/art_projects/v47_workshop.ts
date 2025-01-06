import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/v47_workshop/main/100.jpg';
import main50 from '../../../assets/img/portfolio/v47_workshop/main/50.jpg';
import main25 from '../../../assets/img/portfolio/v47_workshop/main/25.jpg';
import inSitu100 from '../../../assets/img/portfolio/v47_workshop/in_situ/100.jpg';
import inSitu50 from '../../../assets/img/portfolio/v47_workshop/in_situ/50.jpg';
import inSitu25 from '../../../assets/img/portfolio/v47_workshop/in_situ/25.jpg';


const V47_WORKSHOP: Project = {
  id: 'v47-workshop',
  name: 'Vintage47 Workshop',
  links: [],
  date: '2024-09-04',
  keywords: 'acrylic',
  icon: {
    src: main50,
    alt: 'painting of workshop in the woods',
  },
  images: [
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'painting of workshop in the woods',
    },
    {
      full: inSitu100,
      half: inSitu50,
      quarter: inSitu25,
      alt: 'painting on easel',
    },
  ],
  description: 'My first employer',
  bullets: [],
};

export default V47_WORKSHOP;
