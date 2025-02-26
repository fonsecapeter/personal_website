import python from '../assets/img/icons/code/python.svg';
import java from '../assets/img/icons/code/java.svg';
import js from '../assets/img/icons/code/js.svg';
import html from '../assets/img/icons/code/html.svg';
import ruby from '../assets/img/icons/code/ruby.svg';
import sql from '../assets/img/icons/code/sql.png';
import bash from '../assets/img/icons/code/bash.svg';

interface Framework {
  readonly name: string;
  readonly link: string;
}

export interface Language {
  readonly name: string;
  readonly frameworks: Framework[];
  readonly icon: string;
}

export const LANGUAGES = [
  {
    name: 'Python',
    icon: python,
    frameworks: [],
  },
  {
    name: 'JavaScript',
    icon: js,
    frameworks: [
      {
        link: 'https://facebook.github.io/react/',
        name: 'React',
      },
      {
        link: 'https://www.typescriptlang.org/',
        name: 'Typescript',
      },
    ],
  },
  {
    name: 'HTML / CSS',
    icon: html,
    frameworks: [],
  },
  {
    name: 'Java',
    icon: java,
    frameworks: [],
  },
  {
    name: 'Ruby',
    icon: ruby,
    frameworks: [],
  },
  {
    name: 'SQL',
    icon: sql,
    frameworks: [],
  },
  {
    name: 'System / DevOps',
    icon: bash,
    frameworks: [
      {
        link: 'https://www.docker.com/',
        name: 'Docker',
      },
      {
        link: 'https://aws.amazon.com/',
        name: 'AWS',
      },
      {
        link: 'https://www.drone.io/',
        name: 'Drone',
      },
      {
        link: 'https://www.jenkins.io/',
        name: 'Jenkins',
      },
      {
        link: 'https://circleci.com/',
        name: 'circleci',
      },
    ],
  },
];
