import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/brass_mono/main/100.png';
import main50 from '../../../assets/img/portfolio/brass_mono/main/50.png';
import main25 from '../../../assets/img/portfolio/brass_mono/main/25.png';
import firstWild100 from '../../../assets/img/portfolio/brass_mono/in_the_wild_1/100.jpg';
import firstWild50 from '../../../assets/img/portfolio/brass_mono/in_the_wild_1/50.jpg';
import firstWild25 from '../../../assets/img/portfolio/brass_mono/in_the_wild_1/25.jpg';
import secondWild100 from '../../../assets/img/portfolio/brass_mono/in_the_wild_2/100.jpg';
import secondWild50 from '../../../assets/img/portfolio/brass_mono/in_the_wild_2/50.jpg';
import secondWild25 from '../../../assets/img/portfolio/brass_mono/in_the_wild_2/25.jpg';


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
    src: main50,
    alt: 'letters and electronics',
  },
  images: [
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'letters and cartoon electronics in the brass mono font',
    },
    {
      full: firstWild100,
      half: firstWild50,
      quarter: firstWild25,
      alt: 'example brass mono inspiration collage',
    },
    {
      full: secondWild100,
      half: secondWild50,
      quarter: secondWild25,
      alt: 'another example brass mono inspiration collage',
    },
  ],
  description: 'A free retro monospaced font inspired by 20th century electrical and mechanical design. It\'s the only font I use on this website and I write code in it every day.',
  bullets: [
    'Docker',
    'Automated regular / bold / italic build',
    'Almost Google Fonts compliant',
    'Rad design',
  ],
};

export default BRASS_MONO;
