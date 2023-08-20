// eslint-disable-next-line no-unused-vars
import { Project } from './projects';

export const PHYSICAL_PROJECTS: Array<Project> = [
  {
    id: 'todo',
    name: 'TODO',
    links: [
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/brass_mono',
      },
    ],
    date: '2023',
    keywords: 'In Progress',
    icon: {
      src: require('../../assets/img/icons/portfolio/brass_mono.png'),
    },
    description: 'Add these',
    bullets: [
      'In',
      'a',
      'different',
      'issue',
    ],
  },
];
