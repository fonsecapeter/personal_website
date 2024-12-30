import { Project } from '../projects';

import jewelryBox100 from '../../../assets/img/portfolio/jewelry_box/100.jpg';
import jewelryBox50 from '../../../assets/img/portfolio/jewelry_box/50.jpg';
import jewelryBox25 from '../../../assets/img/portfolio/jewelry_box/25.jpg';


const JEWELRY_BOX: Project = {
  id: 'jewelry_box',
  name: 'Jewelry Box',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/180700595/Jewelry-Box',
  }],
  date: '2023',
  keywords: 'acrylic',
  icon: {
    src: jewelryBox50,
    alt: 'box with eyes painted on it',
  },
  images: [
    {
      full: jewelryBox100,
      half: jewelryBox50,
      quarter: jewelryBox25,
      alt: 'box with eyes painted on it',
    },
  ],
  description: 'All I did was paint some eyes on a box but am really proud of it.',
  bullets: [],
};

export default JEWELRY_BOX;
