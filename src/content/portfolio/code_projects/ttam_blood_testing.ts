import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/ttam_blood/main/100.png';
import main50 from '../../../assets/img/portfolio/ttam_blood/main/50.png';
import main25 from '../../../assets/img/portfolio/ttam_blood/main/25.png';


const TTAM_BLOOD_TESTING: Project = {
  id: 'ttam-blood-testing',
  name: 'Blood Testing',
  links: [
    {
      text: 'blog post',
      url: 'https://blog.23andme.com/articles/total-health',
    },
  ],
  date: '2023',
  keywords: '23andMe',
  icon: {
    src: main50,
    alt: 'phone with blood test',
  },
  images: [
    {
      full: main100,
      half: main100,  // TODO: stop doing this and start defining a full_on_detail attribute
      quarter: main25,
      alt: 'phone with blood test',
    },
  ],
  description: 'Order blood tests',
  bullets: [
    'Led the creation of an asynchronous order orchestration service that communicates with both internal and external systems.',
  ],
};

export default TTAM_BLOOD_TESTING;
