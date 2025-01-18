import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/1way_dunks/main/100.jpg';
import main25 from '../../../assets/img/portfolio/1way_dunks/main/25.jpg';
import animated100 from '../../../assets/img/portfolio/1way_dunks/animation/100.gif';
import inside100 from '../../../assets/img/portfolio/1way_dunks/inside/100.jpg';
import inside50 from '../../../assets/img/portfolio/1way_dunks/inside/50.jpg';
import inside25 from '../../../assets/img/portfolio/1way_dunks/inside/25.jpg';
import outside100 from '../../../assets/img/portfolio/1way_dunks/outside/100.jpg';
import outside50 from '../../../assets/img/portfolio/1way_dunks/outside/50.jpg';
import outside25 from '../../../assets/img/portfolio/1way_dunks/outside/25.jpg';
import back100 from '../../../assets/img/portfolio/1way_dunks/back/100.jpg';
import back50 from '../../../assets/img/portfolio/1way_dunks/back/50.jpg';
import back25 from '../../../assets/img/portfolio/1way_dunks/back/25.jpg';

const DUNKS: Project = {
  id: '1way-dunks',
  name: '1Way Dunks',
  links: [],
  date: '2024-11',
  keywords: 'fashion',
  icon: {
    src: animated100,
    alt: 'custom sneaker',
  },
  images: [
    {
      full: main100,
      half: animated100,
      quarter: main25,
      alt: 'customer sneaker animation',
    },
    {
      full: inside100,
      half: inside50,
      quarter: inside25,
      alt: 'inside view',
    },
    {
      full: outside100,
      half: outside50,
      quarter: outside25,
      alt: 'outside view',
    },
    {
      full: back100,
      half: back50,
      quarter: back25,
      alt: 'back view with "1WAY" embroidered on pull-tab',
    },
  ],
  description: 'Custom sneaker deal in that the deal was I designed and bought them through NikeID.',
  bullets: [],
};

export default DUNKS;
