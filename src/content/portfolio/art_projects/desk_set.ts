import { Project } from '../projects';

import ceramicDeskSet100 from '../../../assets/img/portfolio/ceramic_desk_set/100.jpg';
import ceramicDeskSet50 from '../../../assets/img/portfolio/ceramic_desk_set/50.jpg';
import ceramicDeskSet25 from '../../../assets/img/portfolio/ceramic_desk_set/25.jpg';


export const DESK_SET: Project = {
  id: 'desk-set',
  name: 'Desk Set',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/165218685/Ceramic-Desk-Set',
  }],
  date: '2022',
  keywords: 'ceramic',
  icon: {
    src: ceramicDeskSet50,
    alt: 'cup and bowl',
  },
  images: [
    {
      full: ceramicDeskSet100,
      half: ceramicDeskSet50,
      quarter: ceramicDeskSet25,
      alt: 'cup and bowl',
    },
  ],
  description: 'Home office improvements.',
  bullets: [],
};
