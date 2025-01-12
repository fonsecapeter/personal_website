import { Project } from '../projects';

import apiBuddy100 from '../../../assets/img/portfolio/api_buddy/100.gif';


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
    src: apiBuddy100,
    alt: 'terminal with api call',
  },
  images: [
    {
      full: apiBuddy100,
      half: apiBuddy100,  // doesn't look good low-res, just use 100 everywhere
      quarter: apiBuddy100,
      alt: 'animated gif of terminal making api call',
    },
  ],
  description: 'I Use this all the time at work. There are more fully-featured tools out there, but they take too long to set up when I want an answer right away. This has is exactly what I need for working with API\'s, nothing more, nothing less.',
  bullets: [
    'Pleasant, intuitive interface',
    'Automatic OAuth2 authentication',
    'Quick to use + copy/paste output',
    '100% code coverage',
  ],
};

export default API_BUDDY;
