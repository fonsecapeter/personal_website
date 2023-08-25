import python from '../assets/img/icons/code/python.png';
import js from '../assets/img/icons/code/js.png';
import html from '../assets/img/icons/code/html.png';
import ruby from '../assets/img/icons/code/ruby.png';
import sql from '../assets/img/icons/code/sql.png';
import bash from '../assets/img/icons/code/bash.png';
import matlab from '../assets/img/icons/code/matlab.png';

interface Framework {
  name: string,
  link: string,
}

export interface Language {
  name: string,
  frameworks: Framework[],
  icon: string,
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
        link: 'http://redux.js.org/',
        name: 'Redux',
      },
      {
        link: 'https://mochajs.org/',
        name: 'Mocha',
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
    name: 'Bash',
    icon: bash,
    frameworks: [],
  },
  {
    name: 'MatLab',
    icon: matlab,
    frameworks: [
      {
        name: 'SPM',
        link: 'http://www.fil.ion.ucl.ac.uk/spm/',
      },
    ],
  },
];
