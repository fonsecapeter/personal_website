import { Project } from '../projects';

import thisWebsite100 from '../../../assets/img/portfolio/this_website/100.png';
import thisWebsite50 from '../../../assets/img/portfolio/this_website/50.png';
import thisWebsite25 from '../../../assets/img/portfolio/this_website/25.png';


export const THIS_WEBSITE: Project = {
  id: 'this-website',
  name: 'This Website',
  links: [
    {
      text: 'github',
      url: 'https://github.com/fonsecapeter/personal_website',
    },
  ],
  date: '2016',
  keywords: 'single page web app',
  icon: {
    src: thisWebsite50,
    alt: 'smaller image of this page',
  },
  images: [
    {
      full: thisWebsite100,
      half: thisWebsite50,
      quarter: thisWebsite25,
      alt: 'smaller image of this page',
    },
  ],
  description: 'You\'re on it right now!',
  bullets: [
    'React',
    'Code Splitting',
    'TypeScript',
    'Sass',
    'Docker',
    'Continuous Deployment',
    'Unit Tests',
  ],
};
