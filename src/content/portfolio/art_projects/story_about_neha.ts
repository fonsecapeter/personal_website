import { Project } from '../projects';

import storyAboutNeha50 from '../../../assets/img/portfolio/story_about_neha/50.jpg';


const STORY_ABOUT_NEHA: Project = {
  id: 'story-about-neha',
  name: 'A Story About Neha',
  links: [],
  date: '2022',
  keywords: 'YouTube',
  icon: {
    src: storyAboutNeha50,
    alt: 'book with a story about neha scrawled on the cover',
  },
  video: {
    src: 'https://www.youtube.com/embed/reHt-YfhLF0?si=MBIUcfxbqZT0852d',
    aspectRatio: '16-9',
  },
  images: [],
  description: 'For those who don\'t know.',
  bullets: [],
};

export default STORY_ABOUT_NEHA;
