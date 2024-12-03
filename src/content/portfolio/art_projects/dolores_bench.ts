import { Project } from '../projects';

import doloresBench100 from '../../../assets/img/portfolio/dolores_bench_in_situ/100.jpg';
import doloresBench50 from '../../../assets/img/portfolio/dolores_bench_in_situ/50.jpg';
import doloresBench25 from '../../../assets/img/portfolio/dolores_bench_in_situ/25.jpg';


export const DOLORES_BENCH: Project = {
  id: 'dolores_bench',
  name: 'Dolores Bench',
  links: [
    {
      text: 'behance',
      url: 'https://www.behance.net/gallery/205132693/Dolores-Bench',
    },
  ],
  date: '2024-07-24',
  keywords: 'pastel + sharpie',
  icon: {
    src: doloresBench50,
    alt: 'painting of a bench at dolores park',
  },
  images: [
    {
      full: doloresBench100,
      half: doloresBench50,
      quarter: doloresBench25,
      alt: 'painting of a bench at dolores park',
    },
  ],
  description: 'A special place.',
  bullets: [],
};
