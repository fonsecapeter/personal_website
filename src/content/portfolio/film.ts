// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Project } from './projects';
import changeMe from '../../assets/img/icons/portfolio/brass_mono.png';

export const FILM: Project[] = [
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
      src: changeMe,
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
