import { Project } from '../projects';

import crvClinometer100 from '../../../assets/img/portfolio/crv_clinometer/100.jpg';
import crvClinometer50 from '../../../assets/img/portfolio/crv_clinometer/50.jpg';
import crvClinometer25 from '../../../assets/img/portfolio/crv_clinometer/25.jpg';


export const CRV_CLINOMETER: Project = {
  id: 'crv-clinometer',
  name: 'CR-V Clinometer',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/180590821/CR-V-Clinometer',
  }],
  date: '2022',
  keywords: 'automotive',
  icon: {
    src: crvClinometer50,
    alt: 'clinometer',
  },
  images: [
    {
      full: crvClinometer100,
      half: crvClinometer50,
      quarter: crvClinometer25,
      alt: 'clinometer',
    },
  ],
  description: 'Prevents rollover.',
  bullets: [],
};
