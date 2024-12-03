import { Project } from '../projects';

import skateboard100 from '../../../assets/img/portfolio/skateboard/100.jpg';
import skateboard50 from '../../../assets/img/portfolio/skateboard/50.jpg';
import skateboard25 from '../../../assets/img/portfolio/skateboard/25.jpg';


export const SKATEBOARD: Project = {
  id: 'skateboard',
  name: 'Skateboard',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/123961157/Skateboard',
  }],
  date: '2021',
  keywords: 'acrylic',
  icon: {
    src: skateboard50,
    alt: 'skateboard',
  },
  images: [
    {
      full: skateboard100,
      half: skateboard50,
      quarter: skateboard25,
      alt: 'skateboard',
    },
  ],
  description: 'Functional art.',
  bullets: [],
};
