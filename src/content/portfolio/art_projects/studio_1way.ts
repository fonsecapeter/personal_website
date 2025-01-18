import { Project } from '../projects';

import clock100 from '../../../assets/img/portfolio/studio_1way/clock/100.jpg';
import clock50 from '../../../assets/img/portfolio/studio_1way/clock/50.jpg';
import clock25 from '../../../assets/img/portfolio/studio_1way/clock/25.jpg';
import inside100 from '../../../assets/img/portfolio/studio_1way/inside/100.jpg';
import inside50 from '../../../assets/img/portfolio/studio_1way/inside/50.jpg';
import inside25 from '../../../assets/img/portfolio/studio_1way/inside/25.jpg';
import lumber100 from '../../../assets/img/portfolio/studio_1way/lumber/100.jpg';
import lumber50 from '../../../assets/img/portfolio/studio_1way/lumber/50.jpg';
import lumber25 from '../../../assets/img/portfolio/studio_1way/lumber/25.jpg';
import saw100 from '../../../assets/img/portfolio/studio_1way/saw/100.jpg';
import saw50 from '../../../assets/img/portfolio/studio_1way/saw/50.jpg';
import saw25 from '../../../assets/img/portfolio/studio_1way/saw/25.jpg';
import sign100 from '../../../assets/img/portfolio/studio_1way/sign/100.jpg';
import sign50 from '../../../assets/img/portfolio/studio_1way/sign/50.jpg';
import sign25 from '../../../assets/img/portfolio/studio_1way/sign/25.jpg';
import shelf100 from '../../../assets/img/portfolio/studio_1way/shelf/100.jpg';
import shelf50 from '../../../assets/img/portfolio/studio_1way/shelf/50.jpg';
import shelf25 from '../../../assets/img/portfolio/studio_1way/shelf/25.jpg';


const STUDIO_1WAY: Project = {
  id: 'studio_1way',
  name: 'Studio 1Way',
  links: [
    {
      text: 'art explosion',
      url: 'https://artexplosionstudios.com/artists/artistpage.php?name=924',
    },
    {
      text: 'instagram',
      url: 'https://www.instagram.com/peternfonseca/p/C7-R914y3zP',
    },
    {
      text: 'behance',
      url: 'https://www.behance.net/gallery/203665523/Studio-1Way',
    },
  ],
  date: '2024-05-06',
  keywords: 'art studio',
  icon: {
    src: sign50,
    alt: 'one way sign',
  },
  images: [
    {
      full: sign100,
      half: sign50,
      quarter: sign25,
      alt: 'one way sign',
    },
    {
      full: inside100,
      half: inside50,
      quarter: inside25,
      alt: 'one way art studio',
    },
    {
      full: shelf100,
      half: shelf50,
      quarter: shelf25,
      alt: 'shelf with supplies',
    },
    {
      full: lumber100,
      half: lumber50,
      quarter: lumber25,
      alt: 'pieces of wood and labeled toolbox',
    },
    {
      full: saw100,
      half: saw50,
      quarter: saw25,
      alt: 'hand-saw mid-cut',
      modalTopGap: true,
    },
    {
      full: clock100,
      half: clock50,
      quarter: clock25,
      alt: 'clock on hand-made shelf',
    },
  ],
  description: 'Here in San Francisco.',
  bullets: [],
};

export default STUDIO_1WAY;
