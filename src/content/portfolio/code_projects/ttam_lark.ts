import { Project } from '../projects';

import ttamLark100 from '../../../assets/img/portfolio/ttam_lark/100.jpg';
import ttamLark50 from '../../../assets/img/portfolio/ttam_lark/50.jpg';
import ttamLark25 from '../../../assets/img/portfolio/ttam_lark/25.jpg';


const TTAM_LARK: Project = {
  id: 'ttam-lark',
  name: '23andMe / Lark Partnership',
  links: [
    {
      text: 'blog post',
      url: 'https://blog.23andme.com/articles/your-digital-health-coach-is-here',
    },
  ],
  date: '2019',
  keywords: '23andMe',
  icon: {
    src: ttamLark50,
    alt: 'phone with chatbot',
  },
  images: [
    {
      full: ttamLark100,
      half: ttamLark50,
      quarter: ttamLark25,
      alt: 'phone with chatbot',
    },
  ],
  description: 'Led a team of engineers to build an API integration with a 3rd party mobile app that helps customers manage chronic diseases.',
  bullets: [],
};

export default TTAM_LARK;
