import { Project } from '../projects';

import rubyPawnPromotion100 from '../../../assets/img/portfolio/ruby_pawn_promotion/100.gif';
import rubyPawnPromotion25 from '../../../assets/img/portfolio/ruby_pawn_promotion/25.gif';


const RUBY_CHESS: Project = {
  id: 'ruby-chess',
  name: 'Ruby Chess',
  links: [
    {
      text: 'github',
      url: 'https://github.com/fonsecapeter/ruby_chess',
    },
  ],
  date: '2016',
  org: {
    name: 'App Academy',
    url: 'https://www.appacademy.io/',
  },
  keywords: 'ruby cli game',
  icon: {
    src: rubyPawnPromotion100, // 50 is too small
    alt: 'terminal chess game',
  },
  images: [
    {
      full: rubyPawnPromotion100,
      half: rubyPawnPromotion100, // 50 is too small
      quarter: rubyPawnPromotion25,
      alt: 'animated gif of termain chess game pawn promotion',
    },
  ],
  description: 'Command-line chess.',
  bullets: [
    'Computer player that tries to win',
  ],
};

export default RUBY_CHESS;
