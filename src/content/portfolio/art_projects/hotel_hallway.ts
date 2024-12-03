import { Project } from '../projects';

import cafeMenu100 from '../../../assets/img/portfolio/hotel_hallway/cafe_menu/100.jpg';
import cafeMenu50 from '../../../assets/img/portfolio/hotel_hallway/cafe_menu/50.jpg';
import cafeMenu25 from '../../../assets/img/portfolio/hotel_hallway/cafe_menu/25.jpg';
// import doNotDisturb100 from '../../../assets/img/portfolio/hotel_hallway/do_not_disturb/100.jpg';
// import doNotDisturb25 from '../../../assets/img/portfolio/hotel_hallway/do_not_disturb/25.jpg';
// import doNotDisturb50 from '../../../assets/img/portfolio/hotel_hallway/do_not_disturb/50.jpg';
import inUse100 from '../../../assets/img/portfolio/hotel_hallway/in_use/100.jpg';
import inUse50 from '../../../assets/img/portfolio/hotel_hallway/in_use/50.jpg';
import inUse25 from '../../../assets/img/portfolio/hotel_hallway/in_use/25.jpg';
import map100 from '../../../assets/img/portfolio/hotel_hallway/map/100.jpg';
import map50 from '../../../assets/img/portfolio/hotel_hallway/map/50.jpg';
import map25 from '../../../assets/img/portfolio/hotel_hallway/map/25.jpg';
import reception100 from '../../../assets/img/portfolio/hotel_hallway/reception/100.jpg';
import reception50 from '../../../assets/img/portfolio/hotel_hallway/reception/50.jpg';
import reception25 from '../../../assets/img/portfolio/hotel_hallway/reception/25.jpg';
import rstrm100 from '../../../assets/img/portfolio/hotel_hallway/rstrm/100.jpg';
import rstrm50 from '../../../assets/img/portfolio/hotel_hallway/rstrm/50.jpg';
import rstrm25 from '../../../assets/img/portfolio/hotel_hallway/rstrm/25.jpg';
import sign100 from '../../../assets/img/portfolio/hotel_hallway/sign/100.jpg';
import sign50 from '../../../assets/img/portfolio/hotel_hallway/sign/50.jpg';
import sign25 from '../../../assets/img/portfolio/hotel_hallway/sign/25.jpg';


export const HOTEL_HALLWAY: Project = {
  id: 'hotel_hallway',
  name: 'Hotel Hallway',
  links: [
    {
      text: 'instagram',
      url: 'https://www.instagram.com/peternfonseca/p/C6dFBv_LN62',
    },
    {
      text: 'behance',
      url: 'https://www.behance.net/gallery/196863355/Hotel-Hallway',
    },
  ],
  date: '2022 - 2024',
  keywords: 'installation',
  icon: {
    src: sign50,
    alt: 'hotel hallway sign',
  },
  images: [
    {
      full: sign100,
      half: sign50,
      quarter: sign25,
      alt: 'hotel hallway sign',
    },
    {
      full: reception100,
      half: reception50,
      quarter: reception25,
      alt: 'metal reception sign on desk',
    },
    {
      full: rstrm100,
      half: rstrm50,
      quarter: rstrm25,
      alt: 'restroom sign on door',
    },
    {
      full: inUse100,
      half: inUse50,
      quarter: inUse25,
      alt: 'sliding in use sign on door',
    },
    {
      full: map100,
      half: map50,
      quarter: map25,
      alt: 'map of floorplan',
    },
    {
      full: cafeMenu100,
      half: cafeMenu50,
      quarter: cafeMenu25,
      alt: 'cafe menu with all items priced at $0',
    },
    // {
    //   full: doNotDisturb100,
    //   half: doNotDisturb50,
    //   quarter: doNotDisturb25,
    //   alt: 'do not disturb sign',
    // },
  ],
  description: 'My wife and I always wanted to open a hotel together, but we didn\'t want to uproot our lives to do it. We decided to make our apartment feel like one instead.',
  bullets: ['made in collaboration with Neha'],
};
