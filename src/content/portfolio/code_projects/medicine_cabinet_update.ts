import { Project } from '../projects';

import icon100 from '../../../assets/img/portfolio/ttam_medcab/icon/100.png';
import main100 from '../../../assets/img/portfolio/ttam_medcab/main/100.png';
import main25 from '../../../assets/img/portfolio/ttam_medcab/main/25.png';


export const MEDICINE_CABINET_UPDATE: Project = {
  id: 'medicine-cabinet-update',
  name: 'Medicine Cabinet Update',
  links: [
    {
      text: 'blog post',
      url: 'https://blog.23andme.com/articles/take-a-peek-inside-23andmes-upgrade-to-the-medicine-cabinet-feature',
    },
  ],
  date: '2024',
  keywords: '23andMe',
  icon: {
    src: icon100, // 50 is too small
    alt: 'phone with rx',
  },
  images: [
    {
      full: main100,
      half: main100, // 50 is too small
      quarter: main25,
      alt: 'phone with rx',
    },
  ],
  description: 'Import medications to compare with AI-driven reports',
  bullets: [
    'Led technical investigation of new and complex data sources, enabling thousands of customers to get actionable results',
  ],
};
