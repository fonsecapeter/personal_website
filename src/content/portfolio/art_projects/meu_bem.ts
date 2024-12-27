import { Project } from '../projects';

import meuBem100 from '../../../assets/img/portfolio/meu_bem/100.jpg';
import meuBem50 from '../../../assets/img/portfolio/meu_bem/50.jpg';
import meuBem25 from '../../../assets/img/portfolio/meu_bem/25.jpg';


const MEU_BEM: Project = {
  id: 'meu-bem',
  name: 'Meu Bem',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/177148519/Meu-Bem',
  }],
  date: '2023',
  keywords: 'pastel',
  icon: {
    src: meuBem50,
    alt: 'picure of girl',
  },
  images: [
    {
      full: meuBem100,
      half: meuBem50,
      quarter: meuBem25,
      alt: 'picure of girl',
    },
  ],
  description: 'Made while on vacation in Marrakesh.',
  bullets: [],
};

export default MEU_BEM;
