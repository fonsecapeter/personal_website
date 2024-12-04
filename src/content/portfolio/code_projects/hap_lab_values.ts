import { Project } from '../projects';

import icon100 from '../../../assets/img/portfolio/ttam_hap/icon/100.png';
import main100 from '../../../assets/img/portfolio/ttam_hap/main/100.png';
import main50 from '../../../assets/img/portfolio/ttam_hap/main/50.png';
import main25 from '../../../assets/img/portfolio/ttam_hap/main/25.png';


export const HAP_LAB_VALUES: Project = {
  id: 'hap-lab-values',
  name: 'Health Action Plan / Lab Results',
  links: [
    {
      text: 'Action Plan blog post',
      url: 'https://blog.23andme.com/articles/a-health-action-plan-for-you',
    },
    {
      text: 'Lab Results blog post',
      url: 'https://customercare.23andme.com/hc/en-us/articles/17330728225431-Lab-Results-Vitals',
    },
  ],
  date: '2020-2024',
  keywords: '23andMe',
  icon: {
    src: icon100, // 50 is too small
    alt: 'phone with action plan',
  },
  images: [
    {
      full: main100,
      half: main50,
      quarter: main25,
      alt: 'phone with action plan',
    },
  ],
  description: 'Personalized recommendations based on genetics, clinical, and lifestyle data',
  bullets: [
    'Designed, built, and followed related long term, iterative full stack features that served millions of customers actionable information',
    'Provided premium feature differentiation to drive subscriptions, enabling the company to begin a shift toward a more sustainable profit-structure',
  ],
};
