import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/paris/main/100.jpg';
import main50 from '../../../assets/img/portfolio/paris/main/50.jpg';
import main25 from '../../../assets/img/portfolio/paris/main/25.jpg';
import inProgress100 from '../../../assets/img/portfolio/paris/in_progress/100.jpg';
import inProgress50 from '../../../assets/img/portfolio/paris/in_progress/50.jpg';
import inProgress25 from '../../../assets/img/portfolio/paris/in_progress/25.jpg';


const PARIS: Project = {
  id: 'paris',
  name: 'Paris',
  links: [],
  date: '2024-11-16',
  keywords: 'oil painting',
  icon: {
    src: main50,
    alt: 'painting of Neha walking through Paris',
  },
  images: [
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'painting of Neha walking through Paris',
    },
    {
      full: inProgress100,
      half: inProgress50,
      quarter: inProgress25,
      alt: 'workbench with paint supplies and painting',
    },
  ],
  description: 'It was rainy',
  bullets: [],
};

export default PARIS;
