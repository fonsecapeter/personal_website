import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/into_the_city/main/100.jpg';
import main50 from '../../../assets/img/portfolio/into_the_city/main/50.jpg';
import main25 from '../../../assets/img/portfolio/into_the_city/main/25.jpg';
import inSitu100 from '../../../assets/img/portfolio/into_the_city/in_situ/100.jpg';
import inSitu50 from '../../../assets/img/portfolio/into_the_city/in_situ/50.jpg';
import inSitu25 from '../../../assets/img/portfolio/into_the_city/in_situ/25.jpg';


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
    src: main50,
    alt: 'painting of the bay bridge',
  },
  images: [
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'painting of the bay bridge',
    },
    {
      full: inSitu100,
      half: inSitu50,
      quarter: inSitu25,
      alt: 'the painting on a shelf',
    },
  ],
  description: 'We ran as fast as we could into that city.',
  bullets: [],
};

export default INTO_THE_CITY;
