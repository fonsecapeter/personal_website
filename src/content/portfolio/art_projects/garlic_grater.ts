import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/garlic_grater/main/100.jpg';
import main50 from '../../../assets/img/portfolio/garlic_grater/main/50.jpg';
import main25 from '../../../assets/img/portfolio/garlic_grater/main/25.jpg';
import underside100 from '../../../assets/img/portfolio/garlic_grater/underside/100.jpg';
import underside50 from '../../../assets/img/portfolio/garlic_grater/underside/50.jpg';
import underside25 from '../../../assets/img/portfolio/garlic_grater/underside/25.jpg';
import inUse100 from '../../../assets/img/portfolio/garlic_grater/in_use/100.jpg';
import inUse50 from '../../../assets/img/portfolio/garlic_grater/in_use/50.jpg';
import inUse25 from '../../../assets/img/portfolio/garlic_grater/in_use/25.jpg';
import inProgress100 from '../../../assets/img/portfolio/garlic_grater/in_progress/100.jpg';
import inProgress50 from '../../../assets/img/portfolio/garlic_grater/in_progress/50.jpg';
import inProgress25 from '../../../assets/img/portfolio/garlic_grater/in_progress/25.jpg';


const GARLIC_GRATER: Project = {
  id: 'garlic-grater',
  name: 'Garlic Grater',
  links: [],
  date: '2024-07-22',
  keywords: 'ceramic',
  icon: {
    src: main50,
    alt: 'small bowl with grater on the bottom',
  },
  images: [
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'small bowl with grating pits',
    },
    {
      full: underside100,
      half: underside50,
      quarter: underside25,
      alt: 'underside of bowl',
    },
    {
      full: inUse100,
      half: inUse50,
      quarter: inUse25,
      alt: 'freshly grated garlic in bowl',
    },
    {
      full: inProgress100,
      half: inProgress50,
      quarter: inProgress25,
      alt: 'clay building process',
    },
  ],
  description: 'A gift for my mother-in-law',
  bullets: [],
};

export default GARLIC_GRATER;
