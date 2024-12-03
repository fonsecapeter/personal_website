import { Project } from '../projects';

import headphonesOnStand100 from '../../../assets/img/portfolio/headphones_on_stand/100.jpg';
import headphonesOnStand50 from '../../../assets/img/portfolio/headphones_on_stand/50.jpg';
import headphonesOnStand25 from '../../../assets/img/portfolio/headphones_on_stand/25.jpg';


export const HEADPHONE_STAND: Project = {
  id: 'headphone-stand',
  name: 'Headphone Stand',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/180577907/Headphone-Stand',
  }],
  date: '2023',
  keywords: 'scrapwood',
  icon: {
    src: headphonesOnStand50,
    alt: 'headphones on stand',
  },
  images: [
    {
      full: headphonesOnStand100,
      half: headphonesOnStand50,
      quarter: headphonesOnStand25,
      alt: 'headphones on stand',
    },
  ],
  description: 'Made while on hold with customer service for a flight change.',
  bullets: [],
};
