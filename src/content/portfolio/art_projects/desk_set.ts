import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/ceramic_desk_set/main/100.jpg';
import main50 from '../../../assets/img/portfolio/ceramic_desk_set/main/50.jpg';
import main25 from '../../../assets/img/portfolio/ceramic_desk_set/main/25.jpg';
import inSitu100 from '../../../assets/img/portfolio/ceramic_desk_set/in_situ/100.jpg';
import inSitu50 from '../../../assets/img/portfolio/ceramic_desk_set/in_situ/50.jpg';
import inSitu25 from '../../../assets/img/portfolio/ceramic_desk_set/in_situ/25.jpg';
import plan100 from '../../../assets/img/portfolio/ceramic_desk_set/plan/100.jpg';
import plan50 from '../../../assets/img/portfolio/ceramic_desk_set/plan/50.jpg';
import plan25 from '../../../assets/img/portfolio/ceramic_desk_set/plan/25.jpg';

const DESK_SET: Project = {
  id: 'desk-set',
  name: 'Desk Set',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/165218685/Ceramic-Desk-Set',
  }],
  date: '2022',
  keywords: 'ceramic',
  icon: {
    src: main50,
    alt: 'cup and bowl',
  },
  images: [
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'cup and bowl',
    },
    {
      full: inSitu100,
      half: inSitu50,
      quarter: inSitu25,
      alt: 'cup on desk',
    },
    {
      full: plan100,
      half: plan50,
      quarter: plan25,
      alt: 'drawing of pen cup with design notes',
    },
  ],
  description: 'Home office improvements.',
  bullets: [],
};

export default DESK_SET;
