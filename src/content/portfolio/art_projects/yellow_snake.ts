import { Project } from '../projects';

import yellowSnake100 from '../../../assets/img/portfolio/yellow_snake/100.jpg';
import yellowSnake50 from '../../../assets/img/portfolio/yellow_snake/50.jpg';
import yellowSnake25 from '../../../assets/img/portfolio/yellow_snake/25.jpg';


export const YELLOW_SNAKE: Project = {
  id: 'yellow-snake',
  name: 'Yellow Snake',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/165219277/Yellow-Snake',
  }],
  date: '2023',
  keywords: 'acrylic',
  icon: {
    src: yellowSnake50,
    alt: 'painting of snake',
  },
  images: [
    {
      full: yellowSnake100,
      half: yellowSnake50,
      quarter: yellowSnake25,
      alt: 'painting of snake',
    },
  ],
  description: 'Because I couldn\'t have the original.',
  bullets: [],
};
