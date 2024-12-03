import { Project } from '../projects';

import ttamBook100 from '../../../assets/img/portfolio/ttam_book/100.jpg';
import ttamBook50 from '../../../assets/img/portfolio/ttam_book/50.jpg';
import ttamBook25 from '../../../assets/img/portfolio/ttam_book/25.jpg';


export const TTAM_BOOK: Project = {
  id: 'ttam-book',
  name: '23andMe Book',
  links: [
    {
      text: 'blog post',
      url: 'https://blog.23andme.com/articles/write-your-dna-story',
    },
  ],
  date: '2018',
  keywords: '23andMe',
  icon: {
    src: ttamBook50,
    alt: 'hard-cover book',
  },
  images: [
    {
      full: ttamBook100,
      half: ttamBook50,
      quarter: ttamBook25,
      alt: 'book cover',
    },
  ],
  description: 'Coffee-table book with personalized ancestry results',
  bullets: [
    'Led a team to build the company\'s first recurring revenue feature in partnership with an external printing company',
    'Was responsible for the entire project, from the overall approach to the cloud deployment',
    'Shipped on a tight deadline, allowing sales to start ahead of the holiday rush',
  ],
};
