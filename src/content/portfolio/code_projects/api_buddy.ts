import { Project } from '../projects';

import apiBuddy100 from '../../../assets/img/portfolio/api_buddy/100.gif';
import apiBuddy50 from '../../../assets/img/portfolio/api_buddy/50.gif';
import apiBuddy25 from '../../../assets/img/portfolio/api_buddy/25.gif';


const API_BUDDY: Project = {
  id: 'api-buddy',
  name: 'API Buddy',
  links: [
    {
      text: 'github',
      url: 'https://github.com/fonsecapeter/api-buddy',
    },
    {
      text: 'pypi',
      url: 'https://pypi.org/project/api-buddy',
    },
  ],
  date: '2019',
  keywords: 'python cli tool',
  icon: {
    src: apiBuddy50,
    alt: 'terminal with api call',
  },
  images: [
    {
      full: apiBuddy100,
      half: apiBuddy50,
      quarter: apiBuddy25,
      alt: 'animated gif of terminal making api call',
    },
  ],
  description: 'CLI tool for exploring APIs. I Use this all the time at work. Postman is great, but it\'s also complicated and takes too long to set up when I want an answer right away. This has is exactly what I need for working with API\'s, nothing less, nothing more.',
  bullets: [
    'Intuitive interface',
    'Automatic OAuth2 authentication',
    'Pleasant text-based UI/UX',
  ],
};

export default API_BUDDY;
