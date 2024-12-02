import { Project } from '../projects';

import colorShiftScreenShot100 from '../../../assets/img/portfolio/color_shift_screenshot/100.png';
import colorShiftScreenShot50 from '../../../assets/img/portfolio/color_shift_screenshot/50.png';
import colorShiftScreenShot25 from '../../../assets/img/portfolio/color_shift_screenshot/25.png';


export const COLOR_SHIFT: Project = {
  id: 'color-shift',
  name: 'Color Shift',
  links: [
    {
      text: 'github',
      url: 'https://github.com/fonsecapeter/color-shift',
    },
    {
      text: 'live',
      url: 'http://fonsecapeter.github.io/color-shift',
    },
  ],
  date: '2016',
  org: {
    name: 'App Academy',
    url: 'https://www.appacademy.io/',
  },
  keywords: 'web game',
  icon: {
    src: colorShiftScreenShot50,
    alt: 'screenshot of game with multicolored bubbles',
  },
  images: [
    {
      full: colorShiftScreenShot100,
      half: colorShiftScreenShot50,
      quarter: colorShiftScreenShot25,
      alt: 'screenshot of game with multicolored bubbles',
    },
  ],
  description: 'JavaScript canvas game that makes learning about neurology fun.',
  bullets: [
    'Artisinal, hand-made physics logic',
  ],
};
