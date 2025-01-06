import { Project } from '../projects';

import digital100 from '../../../assets/img/portfolio/honda_cb125/digital/100.png';
import digital50 from '../../../assets/img/portfolio/honda_cb125/digital/50.png';
import digital25 from '../../../assets/img/portfolio/honda_cb125/digital/25.png';
import irl100 from '../../../assets/img/portfolio/honda_cb125/irl/100.jpg';
import irl50 from '../../../assets/img/portfolio/honda_cb125/irl/50.jpg';
import irl25 from '../../../assets/img/portfolio/honda_cb125/irl/25.jpg';

const MY_MOTORCYCLE: Project = {
  id: 'my-motorcycle',
  name: 'My Motorcycle',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/41763537/My-Motorcycle',
  }],
  date: '2016',
  keywords: 'mechanical + digital',
  icon: {
    src: irl50,
    alt: 'honda cb125',
  },
  images: [
    {
      full: irl100,
      half: irl50,
      quarter: irl25,
      alt: 'photo of real honda cb125',
    },
    {
      full: digital100,
      half: digital50,
      quarter: digital25,
      alt: 'illustration of honda cb125',
    },
  ],
  description: 'Maintenance is art if you\'re doing it right.',
  bullets: [],
};

export default MY_MOTORCYCLE;
