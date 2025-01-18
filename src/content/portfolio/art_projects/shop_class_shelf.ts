import { Project } from '../projects';
import animation50 from '../../../assets/img/portfolio/shop_class_shelf/animation/50.gif';
import animation25 from '../../../assets/img/portfolio/shop_class_shelf/animation/25.gif';
import main100 from '../../../assets/img/portfolio/shop_class_shelf/main/100.jpg';
import main25 from '../../../assets/img/portfolio/shop_class_shelf/main/25.jpg';
import edges100 from '../../../assets/img/portfolio/shop_class_shelf/edges/100.jpg';
import edges50 from '../../../assets/img/portfolio/shop_class_shelf/edges/50.jpg';
import edges25 from '../../../assets/img/portfolio/shop_class_shelf/edges/25.jpg';
import signature100 from '../../../assets/img/portfolio/shop_class_shelf/signature/100.jpg';
import signature50 from '../../../assets/img/portfolio/shop_class_shelf/signature/50.jpg';
import signature25 from '../../../assets/img/portfolio/shop_class_shelf/signature/25.jpg';

const SHOP_CLASS_SHELF: Project = {
  id: 'shop_class_shelf',
  name: 'Shop Class Shelf',
  links: [
    {
      text: 'instagram',
      url: 'https://www.instagram.com/peternfonseca/p/C8dohpqNEmD',
    },
    {
      text: 'behance',
      url: 'https://www.behance.net/gallery/201460551/Shop-Class-Shelf',
    },
  ],
  date: '2003?',
  keywords: 'woodworking',
  icon: {
    src: animation25,
    alt: 'small wood shelf',
  },
  images: [
    { full: main100, half: animation50, quarter: main25, alt: 'small wood shelf' },
    { full: edges100, half: edges50, quarter: edges25, alt: 'close up of edges' },
    {
      full: signature100,
      half: signature50,
      quarter: signature25,
      alt: 'peter fonseca period 2 written on shelf in pencil',
    },
  ],
  description: 'Some of my really early work.',
  bullets: [],
};

export default SHOP_CLASS_SHELF;
