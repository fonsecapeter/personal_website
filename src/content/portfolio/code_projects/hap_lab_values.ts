import { Project } from '../projects';

import ttamHap100 from '../../../assets/img/portfolio/ttam_hap/100.png';
import ttamHap50 from '../../../assets/img/portfolio/ttam_hap/50.png';
import ttamHap25 from '../../../assets/img/portfolio/ttam_hap/25.png';


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
    src: ttamHap50,
    alt: 'phone with action plan',
  },
  images: [
    {
      full: ttamHap100,
      half: ttamHap50,
      quarter: ttamHap25,
      alt: 'phone with action plan',
    },
  ],
  description: 'Personalized recommendations based on genetics, clinical, and lifestyle data',
  bullets: [
    'Designed, built, and followed related long term, iterative full stack features that served millions of customers actionable information',
    'Provided premium feature differentiation to drive subscriptions, enabling the company to begin a shift toward a more sustainable profit-structure',
  ],
};
