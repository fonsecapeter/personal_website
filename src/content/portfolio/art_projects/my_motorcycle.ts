import { Project } from '../projects';

import honda100 from '../../../assets/img/portfolio/honda_cb125/100.png';
import honda50 from '../../../assets/img/portfolio/honda_cb125/50.png';
import honda25 from '../../../assets/img/portfolio/honda_cb125/25.png';


const MY_MOTORCYCLE: Project = {
  id: 'my-motorcycle',
  name: 'My Motorcycle',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/41763537/My-Motorcycle',
  }],
  date: '2016',
  keywords: 'digital illustration',
  icon: {
    src: honda50,
    alt: 'honda cb125',
  },
  images: [
    {
      full: honda100,
      half: honda50,
      quarter: honda25,
      alt: 'honda cb125',
    },
  ],
  description: 'My first and only motorcycle.',
  bullets: [],
};

export default MY_MOTORCYCLE;
