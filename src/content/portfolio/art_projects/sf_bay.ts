import { Project } from '../projects';

import sfBay100 from '../../../assets/img/portfolio/sf_bay/100.jpg';
import sfBay50 from '../../../assets/img/portfolio/sf_bay/50.jpg';
import sfBay25 from '../../../assets/img/portfolio/sf_bay/25.jpg';


export const SF_BAY: Project = {
  id: 'sf-bay',
  name: 'SF Bay',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/123961867/SF-Bay',
  }],
  date: '2019',
  keywords: 'oil pastel',
  icon: {
    src: sfBay50,
    alt: 'map of san francisco',
  },
  images: [
    {
      full: sfBay100,
      half: sfBay50,
      quarter: sfBay25,
      alt: 'map of san francisco',
    },
  ],
  description: 'Where I live.',
  bullets: [],
};
