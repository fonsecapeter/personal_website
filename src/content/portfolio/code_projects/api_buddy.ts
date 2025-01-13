import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/api_buddy/main/100.png';
import main50 from '../../../assets/img/portfolio/api_buddy/main/50.png';
import main25 from '../../../assets/img/portfolio/api_buddy/main/25.png';
import demo100 from '../../../assets/img/portfolio/api_buddy/demo/100.gif';
import demo50 from '../../../assets/img/portfolio/api_buddy/demo/50.png';


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
  keywords: 'open source python package',
  icon: {
    src: main50,
    alt: 'cartoon terminal with an arrow on screen',
  },
  images: [
    {
      full: demo100,
      half: demo100,  // doesn't look good low-res, just use 100 everywhere
      quarter: demo50,
      alt: 'animated gif of terminal making api calls',
    },
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'cartoon terminal with an arrow on screen',
    },
  ],
  description: 'The most pleasant HTTP API CLI tool. I use it all the time, whether I\'m writing a new endpoint or testing out someone else\'s. It\'s perfect when I want an answer right away or need to document request/response structures. This has exactly what you need when working with API\'s, nothing more, nothing less.',
  bullets: [
    'Quick to set up',
    'Easy to use',
    'Automated OAuth2 sign-in',
    'Copy/paste-able results',
    '100% code coverage',
  ],
};

export default API_BUDDY;
