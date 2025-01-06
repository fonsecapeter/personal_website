import { Project } from '../projects';

import nodToVirgil100 from '../../../assets/img/portfolio/nod_to_virgil/100.jpg';
import nodToVirgil50 from '../../../assets/img/portfolio/nod_to_virgil/50.jpg';
import nodToVirgil25 from '../../../assets/img/portfolio/nod_to_virgil/25.jpg';


const NOD_TO_VIRGIL: Project = {
  id: 'nod-to-virgil',
  name: 'Nod To Virgil',
  links: [],
  date: '2024-09-07',
  keywords: 'acrylic + sharpie',
  icon: {
    src: nodToVirgil50,
    alt: 'construction hard-hat with artist written in quotes',
  },
  images: [
    {
      full: nodToVirgil100,
      half: nodToVirgil50,
      quarter: nodToVirgil25,
      alt: 'construction hard-hat with artist written in quotes',
    },
  ],
  description: 'Modified 3%',
  bullets: [],
};

export default NOD_TO_VIRGIL;
