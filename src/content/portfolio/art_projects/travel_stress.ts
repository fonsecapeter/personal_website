import { Project } from '../projects';

import travelStress50 from '../../../assets/img/portfolio/travel_stress/50.jpg';


const TRAVEL_STRESS: Project = {
  id: 'travel-stress',
  name: 'Travel Stress',
  links: [],
  date: '2023',
  keywords: 'YouTube',
  icon: {
    src: travelStress50,
    alt: 'paper flags with typewritten destinations',
  },
  images: [],
  video: {
    src: 'https://www.youtube.com/embed/u5xZQ9aE_Dk?si=xuFDptgIVhGAh_2T',
    aspectRatio: '16-9',
  },
  description: 'A movie about traveling.',
  bullets: [],
};

export default TRAVEL_STRESS;
