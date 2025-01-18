import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/step_stool/main/100.jpg';
import main50 from '../../../assets/img/portfolio/step_stool/main/50.jpg';
import main25 from '../../../assets/img/portfolio/step_stool/main/25.jpg';
import inSitu100 from '../../../assets/img/portfolio/step_stool/in_situ/100.jpg';
import inSitu50 from '../../../assets/img/portfolio/step_stool/in_situ/50.jpg';
import inSitu25 from '../../../assets/img/portfolio/step_stool/in_situ/25.jpg';
import signature100 from '../../../assets/img/portfolio/step_stool/signature/100.jpg';
import signature50 from '../../../assets/img/portfolio/step_stool/signature/50.jpg';
import signature25 from '../../../assets/img/portfolio/step_stool/signature/25.jpg';


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
    src: main50,
    alt: 'stool',
  },
  images: [
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'stool',
    },
    {
      full: inSitu100,
      half: inSitu50,
      quarter: inSitu25,
      alt: 'stool in perfectly sized corner',
    },
    {
      full: signature100,
      half: signature50,
      quarter: signature25,
      alt: 'signature on bottom',
    },
  ],
  description: 'It\'s not fine woodworking, but it looks good and gets the job done.',
  bullets: [],
};

export default STEP_STOOL;
