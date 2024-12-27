import { Project } from '../projects';

import intoTheCity100 from '../../../assets/img/portfolio/into_the_city/100.jpg';
import intoTheCity50 from '../../../assets/img/portfolio/into_the_city/50.jpg';
import intoTheCity25 from '../../../assets/img/portfolio/into_the_city/25.jpg';


const INTO_THE_CITY: Project = {
  id: 'into_the_city',
  name: 'Into the City',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/184696705/Into-the-City',
  }],
  date: '2023',
  keywords: 'watercolor',
  icon: {
    src: intoTheCity50,
    alt: 'painting of the bay bridge',
  },
  images: [
    {
      full: intoTheCity100,
      half: intoTheCity50,
      quarter: intoTheCity25,
      alt: 'painting of the bay bridge',
    },
  ],
  description: 'We ran as fast as we could into that city.',
  bullets: [],
};

export default INTO_THE_CITY;
