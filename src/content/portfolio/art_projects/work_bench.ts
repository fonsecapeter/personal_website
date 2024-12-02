import { Project } from '../projects';

import workbench100 from '../../../assets/img/portfolio/workbench/100.jpg';
import workbench50 from '../../../assets/img/portfolio/workbench/50.jpg';
import workbench25 from '../../../assets/img/portfolio/workbench/25.jpg';


export const WORK_BENCH: Project = {
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
    src: workbench50,
    alt: 'wood workbench',
  },
  images: [
    {
      full: workbench100,
      half: workbench50,
      quarter: workbench25,
      alt: 'wood workbench',
    },
  ],
  description: 'Always wanted one of these.',
  bullets: [],
};
