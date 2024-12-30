import { Project } from '../projects';

import stepStool100 from '../../../assets/img/portfolio/step_stool/100.jpg';
import stepStool50 from '../../../assets/img/portfolio/step_stool/50.jpg';
import stepStool25 from '../../../assets/img/portfolio/step_stool/25.jpg';


const STEP_STOOL: Project = {
  id: 'step-stool',
  name: 'Step Stool',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/166317739/Step-Stool',
  }],
  date: '2023',
  keywords: 'woodworking',
  icon: {
    src: stepStool50,
    alt: 'stool',
  },
  images: [
    {
      full: stepStool100,
      half: stepStool50,
      quarter: stepStool25,
      alt: 'stool',
    },
  ],
  description: 'It\'s not fine woodworking, but it looks good and gets the job done.',
  bullets: [],
};

export default STEP_STOOL;
