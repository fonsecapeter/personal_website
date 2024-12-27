import { Project } from '../projects';

import threeCities50 from '../../../assets/img/portfolio/three_cities/50.jpg';


const THREE_CITIES: Project = {
  id: 'three-cities',
  name: '3 Cities',
  links: [],
  date: '2022',
  keywords: 'YouTube',
  icon: {
    src: threeCities50,
    alt: 'peter skateboarding with coffee',
  },
  images: [],
  video: {
    src: 'https://www.youtube.com/embed/videoseries?si=DSCik6f-aIWz6o-5&amp;list=PLZV4bTgIS1Vff5D7_jfhDFDq5nNgvLYVJ',
    aspectRatio: '16-9',
  },
  description: 'A challenge between friends that got me to try daily vlogging for 3 days.',
  bullets: [],
};

export default THREE_CITIES;
