import { Project } from '../projects';

import ttamMedCab100 from '../../../assets/img/portfolio/ttam_medcab/100.png';
import ttamMedCab50 from '../../../assets/img/portfolio/ttam_medcab/50.png';
import ttamMedCab25 from '../../../assets/img/portfolio/ttam_medcab/25.png';


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
    src: ttamMedCab50,
    alt: 'phone with rx',
  },
  images: [
    {
      full: ttamMedCab100,
      half: ttamMedCab50,
      quarter: ttamMedCab25,
      alt: 'phone with rx',
    },
  ],
  description: 'Import medications to compare with AI-driven reports',
  bullets: [
    'Led technical investigation of new and complex data sources, enabling thousands of customers to get actionable results',
  ],
};
