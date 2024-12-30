import { Project } from '../projects';

import vaporub100 from '../../../assets/img/portfolio/vaporub/100.jpg';
import vaporub50 from '../../../assets/img/portfolio/vaporub/50.jpg';
import vaporub25 from '../../../assets/img/portfolio/vaporub/25.jpg';


const VAPORUB: Project = {
  id: 'vaporub',
  name: 'VapoRub',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/123961329/VapoRub',
  }],
  date: '2021',
  keywords: 'acrylic',
  icon: {
    src: vaporub50,
    alt: 'painting of vaporub',
  },
  images: [
    {
      full: vaporub100,
      half: vaporub50,
      quarter: vaporub25,
      alt: 'painting of vaporub',
    },
  ],
  description: 'Cures anything.',
  bullets: [],
};

export default VAPORUB;
