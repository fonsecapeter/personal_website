import { Project } from '../projects';

import brassMono100 from '../../../assets/img/portfolio/brass_mono/100.png';
import brassMono50 from '../../../assets/img/portfolio/brass_mono/50.png';
import brassMono25 from '../../../assets/img/portfolio/brass_mono/25.png';


const BRASS_MONO: Project = {
  id: 'brass-mono',
  name: 'Brass Mono',
  links: [
    {
      text: 'github',
      url: 'https://github.com/fonsecapeter/brass_mono',
    },
    {
      text: 'download',
      url: 'https://github.com/fonsecapeter/brass_mono/releases/latest/',
    },
  ],
  date: '2017',
  keywords: 'open source font',
  icon: {
    src: brassMono50,
    alt: 'letters and electronics',
  },
  images: [
    {
      full: brassMono100,
      half: brassMono50,
      quarter: brassMono25,
      alt: 'letters and electronics',
    },
  ],
  description: 'Retro monospaced font inspired by 70\'s electrical and mechanical design design. It\'s the only font I use on this website and write code in it every day.',
  bullets: [
    'Docker',
    'Automated regular / bold / italic build',
    'Almost Google Fonts compliant',
    'Rad design',
  ],
};

export default BRASS_MONO;
