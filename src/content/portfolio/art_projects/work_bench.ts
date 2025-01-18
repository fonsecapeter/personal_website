import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/workbench/main/100.jpg';
import main50 from '../../../assets/img/portfolio/workbench/main/50.jpg';
import main25 from '../../../assets/img/portfolio/workbench/main/25.jpg';
import plan100 from '../../../assets/img/portfolio/workbench/plan/100.jpg';
import plan50 from '../../../assets/img/portfolio/workbench/plan/50.jpg';
import plan25 from '../../../assets/img/portfolio/workbench/plan/25.jpg';
import signature100 from '../../../assets/img/portfolio/workbench/signature/100.jpg';
import signature50 from '../../../assets/img/portfolio/workbench/signature/50.jpg';
import signature25 from '../../../assets/img/portfolio/workbench/signature/25.jpg';


const WORK_BENCH: Project = {
  id: 'workbench',
  name: 'Workbench',
  links: [
    {
      text: 'behance',
      url: 'https://www.behance.net/gallery/203419849/Workbench',
    },
  ],
  date: '2024-05-18',
  keywords: 'woodworking',
  icon: {
    src: main50,
    alt: 'wood workbench',
  },
  images: [
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'wood workbench',
    },
    {
      full: signature100,
      half: signature50,
      quarter: signature25,
      alt: 'signature on bottom',
    },
    {
      full: plan100,
      half: plan50,
      quarter: plan25,
      alt: 'drawing of building plan',
    },
  ],
  description: 'Always wanted one of these.',
  bullets: [],
};

export default WORK_BENCH;
