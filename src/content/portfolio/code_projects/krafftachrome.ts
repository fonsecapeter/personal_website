import { Project } from '../projects';

import krafftachrome100 from '../../../assets/img/portfolio/krafftachrome/100.png';
import krafftachrome50 from '../../../assets/img/portfolio/krafftachrome/50.png';
import krafftachrome25 from '../../../assets/img/portfolio/krafftachrome/25.png';


export const KRAFFTACHROME: Project = {
  id: 'krafftachrome',
  name: 'Krafftachrome',
  links: [
    {
      text: 'github',
      url: 'https://github.com/fonsecapeter/krafftachrome_visual_studio_code',
    },
    {
      text: 'vscode',
      url: 'https://marketplace.visualstudio.com/items?itemName=fonsecapeter.theme-krafftachrome',
    },
  ],
  date: '2022',
  keywords: 'colorscheme',
  icon: {
    src: krafftachrome50,
    alt: 'katia and maurice krafft near a volcano and some code',
  },
  images: [
    {
      full: krafftachrome100,
      half: krafftachrome50,
      quarter: krafftachrome25,
      alt: 'katia and maurice krafft near a volcano and some code',
    },
  ],
  description: 'Inspired by the work of Katia and Maurice Krafft, this project aims to capture the strange and beautiful world of 20th century volcanology. All colors were "droppered" directly from photos they took and "re-droppered" as I curated them into a cohesive palette that worked for daily use.',
  bullets: [
    'VS Code theme',
    'iTerm2 theme',
  ],
};
