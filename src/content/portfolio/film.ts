// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Project } from './projects';
import artistsInResidence from '../../assets/img/icons/portfolio/artists-in-residence.png';
import storyAboutNeha from '../../assets/img/icons/portfolio/story-about-neha.jpeg';
import threeCities from '../../assets/img/icons/portfolio/three-cities.jpeg';
import travelStress from '../../assets/img/icons/portfolio/travel-stress.jpeg';

export const FILM: Project[] = [
  {
    id: 'artists-in-residence',
    name: 'Artists In Residence',
    links: [],
    date: '2023',
    keywords: '',
    icon: {
      src: artistsInResidence,
    },
    video: 'https://www.youtube.com/embed/-qTctYg1rQ0?si=UAhlXcl6lyrTOJH7',
    description: 'A meditation on feeling lost and making art (made in collaboration with Neha).',
    bullets: [],
  },

  {
    id: 'travel-stress',
    name: 'Travel Stress',
    links: [],
    date: '2023',
    keywords: '',
    icon: {
      src: travelStress,
    },
    video: 'https://www.youtube.com/embed/u5xZQ9aE_Dk?si=xuFDptgIVhGAh_2T',
    description: 'A movie about travelling.',
    bullets: [],
  },

  {
    id: 'story-about-neha',
    name: 'A Story About Neha',
    links: [],
    date: '2022',
    keywords: '',
    icon: {
      src: storyAboutNeha,
    },
    video: 'https://www.youtube.com/embed/reHt-YfhLF0?si=it-8wgLwn0BNKSNA',
    description: 'A birthday present to my wife + best friend.',
    bullets: [],
  },

  {
    id: 'three-cities',
    name: '3 Cities',
    links: [],
    date: '2022',
    keywords: '',
    icon: {
      src: threeCities,
    },
    video: 'https://www.youtube.com/embed/videoseries?si=DSCik6f-aIWz6o-5&amp;list=PLZV4bTgIS1Vff5D7_jfhDFDq5nNgvLYVJ',
    description: 'A challenge between friends that got me to try daily vlogging for 3 days.',
    bullets: [],
  },
];
