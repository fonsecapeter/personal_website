import { Project } from '../projects';

import shellectricJsx100 from '../../../assets/img/portfolio/shellectric_jsx/100.png';
import shellectricJsx50 from '../../../assets/img/portfolio/shellectric_jsx/50.png';
import shellectricJsx25 from '../../../assets/img/portfolio/shellectric_jsx/25.png';


const SHELLECTRIC: Project = {
  id: 'shellectric',
  name: 'Shellectric',
  links: [
    {
      text: 'github',
      url: 'https://github.com/fonsecapeter/shellectric-color-scheme',
    },
    {
      text: 'atom',
      url: 'https://atom.io/themes/shellectric-syntax',
    },
  ],
  date: '2017',
  keywords: 'colorscheme',
  icon: {
    src: shellectricJsx50,
    alt: 'some code',
  },
  images: [
    {
      full: shellectricJsx100,
      half: shellectricJsx50,
      quarter: shellectricJsx25,
      alt: 'some code',
      modalTopGap: true,
    },
  ],
  description: 'Easy on the eyes, retro colors inspired by 70\'s design.',
  bullets: [
    'Atom theme',
    'Several terminal themes',
    'Vim integration',
    'Slack theme',
    'Chrome theme',
  ],
};

export default SHELLECTRIC;
