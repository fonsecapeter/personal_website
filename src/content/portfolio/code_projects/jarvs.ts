import { Project } from '../projects';

import jarvs100 from '../../../assets/img/portfolio/jarvs/100.png';
import jarvs50 from '../../../assets/img/portfolio/jarvs/50.png';
import jarvs25 from '../../../assets/img/portfolio/jarvs/25.png';


export const JARVS: Project = {
  id: 'jarvs',
  name: 'Jarvs',
  links: [
    {
      text: 'github',
      url: 'https://github.com/fonsecapeter/jarvs',
    },
    {
      text: 'launchpad',
      url: 'https://launchpad.net/jarvs',
    },
  ],
  date: '2016',
  org: {
    name: 'UCSF',
    url: 'https://memory.ucsf.edu/',
  },
  keywords: 'automation',
  icon: {
    src: jarvs50,
    alt: 'screenshot of terminal chatbot next to graph',
  },
  images: [
    {
      full: jarvs100,
      half: jarvs50,
      quarter: jarvs25,
      alt: 'screenshot of terminal chatbot next to graph',
    },
  ],
  description: 'Jarvs is a research visist summary management system, designed with large-scale clinical research in mind. I built this to automate part of my job at UCSF while I was teaching myself python on the side.',
  bullets: [
    'apt-get installable',
    'GUI Application',
    'Rudimentary natural language interface',
    'Graphs',
    'Emails',
    'Cronjobs',
  ],
};
