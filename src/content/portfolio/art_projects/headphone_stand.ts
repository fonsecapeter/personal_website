import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/headphones_on_stand/main/100.jpg';
import main50 from '../../../assets/img/portfolio/headphones_on_stand/main/50.jpg';
import main25 from '../../../assets/img/portfolio/headphones_on_stand/main/25.jpg';
import signature100 from '../../../assets/img/portfolio/headphones_on_stand/signature/100.jpg';
import signature50 from '../../../assets/img/portfolio/headphones_on_stand/signature/50.jpg';
import signature25 from '../../../assets/img/portfolio/headphones_on_stand/signature/25.jpg';


const HEADPHONE_STAND: Project = {
  id: 'headphone-stand',
  name: 'Headphone Stand',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/180577907/Headphone-Stand',
  }],
  date: '2023',
  keywords: 'scrapwood',
  icon: {
    src: main50,
    alt: 'headphones on stand',
  },
  images: [
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'headphones on stand',
    },
    {
      full: signature100,
      half: signature50,
      quarter: signature25,
      alt: 'signature on bottom',
    },
  ],
  description: 'Made while on hold with customer service for a flight change.',
  bullets: [],
};

export default HEADPHONE_STAND;
