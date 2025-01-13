import { Project } from '../projects';

import gliaQuestionDetail100 from '../../../assets/img/portfolio/glia_question_detail/100.png';
import gliaQuestionDetail50 from '../../../assets/img/portfolio/glia_question_detail/50.png';
import gliaQuestionDetail25 from '../../../assets/img/portfolio/glia_question_detail/25.png';


const GLIA: Project = {
  id: 'glia',
  name: 'Glia',
  links: [
    {
      text: 'github',
      url: 'https://github.com/fonsecapeter/Glia',
    },
  ],
  date: '2016',
  org: {
    name: 'App Academy',
    url: 'https://www.appacademy.io',
  },
  keywords: 'crud web app',
  icon: {
    src: gliaQuestionDetail50,
    alt: 'screenshot of question about frontotemporal dementia with one answer',
  },
  images: [
    {
      full: gliaQuestionDetail100,
      half: gliaQuestionDetail50,
      quarter: gliaQuestionDetail25,
      alt: 'screenshot of question about frontotemporal dementia with one answer',
      modalTopGap: true
    },
  ],
  description: 'Online support group for caregivers of dementia patients.',
  bullets: [
    'React-Flux front end',
    'Rails-PostgreSQL back end',
    'Responsive design',
    'Rich text editing, complete with drag-and-drop image uploading',
    'Minimized data requests with nested Flux resources to reduce load time',
  ],
};

export default GLIA;
