import python from '../assets/img/icons/code/python.png';
import js from '../assets/img/icons/code/js.png';
import html from '../assets/img/icons/code/html.png';
import ruby from '../assets/img/icons/code/ruby.png';
import sql from '../assets/img/icons/code/sql.png';
import bash from '../assets/img/icons/code/bash.png';

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
    frameworks: [
      {
        link: 'https://www.djangoproject.com/',
        name: 'Django',
      },
    ],
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
    frameworks: [
      {
        name: 'Sass',
        link: 'http://sass-lang.com/',
      },
    ],
  },
  {
    name: 'Ruby',
    icon: ruby,
    frameworks: [
      {
        link: 'http://rubyonrails.org/',
        name: 'Rails',
      },
      {
        link: 'http://rspec.info/',
        name: 'RSpec',
      },
    ],
  },
  {
    name: 'SQL',
    icon: sql,
    frameworks: [],
  },
  {
    name: 'Shell / DevOps',
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
    ],
  },
];
