import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/ttam_marketplace/main/100.png';
import main50 from '../../../assets/img/portfolio/ttam_marketplace/main/50.png';
import main25 from '../../../assets/img/portfolio/ttam_marketplace/main/25.png';


const TTAM_MARKETPLACE: Project = {
  id: 'ttam-marketplace',
  name: 'Marketplace',
  links: [
    {
      text: 'homepage',
      url: 'https://www.23andme.com/marketplace',
    },
  ],
  date: '2017-2020',
  keywords: '23andMe',
  icon: {
    src: main50,
    alt: 'phones with 23andMe data',
  },
  images: [
    {
      full: main100,
      half: main100,  // TODO: stop doing this and start defining a full_on_detail attribute
      quarter: main25,
      alt: 'phones with 23andMe data',
    },
  ],
  description: '3rd Party partnerships',
  bullets: [
    'Led the external-facing API program, along with many sub-projects.',
  ],
};

export default TTAM_MARKETPLACE;
