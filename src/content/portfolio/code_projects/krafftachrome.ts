import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/krafftachrome/main/100.jpg';
import main50 from '../../../assets/img/portfolio/krafftachrome/main/50.jpg';
import sample100 from '../../../assets/img/portfolio/krafftachrome/sample/100.png';
import sample50 from '../../../assets/img/portfolio/krafftachrome/sample/50.png';
import sample25 from '../../../assets/img/portfolio/krafftachrome/sample/25.png';


const KRAFFTACHROME: Project = {
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
    src: main50,
    alt: 'katia and maurice krafft near a volcano and some code',
  },
  images: [
    {
      full: main100,
      half: main100, // source img is pretty low-res
      quarter: main50,
      alt: 'katia and maurice krafft near a live volcano',
    },
    {
      full: sample100,
      half: sample50,
      quarter: sample25,
      alt: 'some code displayed in sick colors',
      modalTopGap: true,
    },
  ],
  description: 'Inspired by the work of Katia and Maurice Krafft, this project aims to capture the strange and beautiful world of 20th century volcanology. All colors were "droppered" directly from photos they took and "re-droppered" as I curated them into a cohesive palette that worked for daily use.',
  bullets: [
    'VS Code theme',
    'iTerm2 theme',
  ],
};

export default KRAFFTACHROME;
