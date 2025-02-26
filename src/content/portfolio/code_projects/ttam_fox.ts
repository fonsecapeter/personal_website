import { Project } from '../projects';

import ttamFox100 from '../../../assets/img/portfolio/ttam_fox/100.png';
import ttamFox50 from '../../../assets/img/portfolio/ttam_fox/50.png';
import ttamFox25 from '../../../assets/img/portfolio/ttam_fox/25.png';


const TTAM_FOX: Project = {
  id: 'ttam-fox',
  name: '23andMe / MJFF Partnership',
  links: [
    {
      text: 'Fox Insight',
      url: 'https://foxinsight.michaeljfox.org/',
    },
  ],
  date: '2018',
  keywords: '23andMe',
  icon: {
    src: ttamFox50,
    alt: 'mobile and web research surveys',
  },
  images: [
    {
      full: ttamFox100,
      half: ttamFox50,
      quarter: ttamFox25,
      alt: 'mobile and web research surveys',
    },
  ],
  description: 'Led the techinical side of an already existing research partnership with the Michael J. Fox foundation. Biggest contribution was a new set of streaming HTTP API endpoints that improved performance by > 10 fold compared to the original integration.',
  bullets: [],
};

export default TTAM_FOX;
