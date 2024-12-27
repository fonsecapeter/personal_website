import { Project } from '../projects';

import teaBox100 from '../../../assets/img/portfolio/tea_box/100.jpg';
import teaBox50 from '../../../assets/img/portfolio/tea_box/50.jpg';
import teaBox25 from '../../../assets/img/portfolio/tea_box/25.jpg';


const TEA_BOX: Project = {
  id: 'tea-box',
  name: 'Tea Box',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/180834495/Tea-Box',
  }],
  date: '2013',
  keywords: 'pine',
  icon: {
    src: teaBox50,
    alt: 'box of tea',
  },
  images: [
    {
      full: teaBox100,
      half: teaBox50,
      quarter: teaBox25,
      alt: 'box of tea',
    },
  ],
  description: 'Some of my early work.',
  bullets: [],
};

export default TEA_BOX;
