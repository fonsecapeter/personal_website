import { Project } from '../projects';

import twoZeroEightFive100 from '../../../assets/img/portfolio/2085/100.png';
import twoZeroEightFive50 from '../../../assets/img/portfolio/2085/50.png';
import twoZeroEightFive25 from '../../../assets/img/portfolio/2085/25.png';


const TWO_ZERO_EIGHT_FIVE: Project = {
  id: '2085',
  name: '2085',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/41763455/2085',
  }],
  date: '2014',
  keywords: 'digital illustration',
  icon: {
    src: twoZeroEightFive50,
    alt: 'apartment building',
  },
  images: [
    {
      full: twoZeroEightFive100,
      half: twoZeroEightFive50,
      quarter: twoZeroEightFive25,
      alt: 'apartment building',
    },
  ],
  description: 'My first apartment in SF.',
  bullets: [],
};

export default TWO_ZERO_EIGHT_FIVE;
