import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/espresso_cup/main/100.jpg';
import main50 from '../../../assets/img/portfolio/espresso_cup/main/50.jpg';
import main25 from '../../../assets/img/portfolio/espresso_cup/main/25.jpg';
import stamp100 from '../../../assets/img/portfolio/espresso_cup/stamp/100.jpg';
import stamp50 from '../../../assets/img/portfolio/espresso_cup/stamp/50.jpg';
import stamp25 from '../../../assets/img/portfolio/espresso_cup/stamp/25.jpg';
import leatherHard100 from '../../../assets/img/portfolio/espresso_cup/leather_hard/100.jpg';
import leatherHard50 from '../../../assets/img/portfolio/espresso_cup/leather_hard/50.jpg';
import leatherHard25 from '../../../assets/img/portfolio/espresso_cup/leather_hard/25.jpg';


const ESPRESSO_CUP: Project = {
  id: 'espresso-cup',
  name: 'Espresso Cup',
  links: [],
  date: '2024-12-20',
  keywords: 'ceramic',
  icon: {
    src: main50,
    alt: 'small angular cup',
  },
  images: [
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'small angular cup',
    },
    {
      full: stamp100,
      half: stamp50,
      quarter: stamp25,
      alt: 'underside stamped with 1way makers mark',
    },
    {
      full: leatherHard100,
      half: leatherHard50,
      quarter: leatherHard25,
      alt: 'clay cup right after trimming stage',
    },
  ],
  description: 'A gift for my dad',
  bullets: [],
};

export default ESPRESSO_CUP;
