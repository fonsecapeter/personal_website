import { Project } from '../projects';

import artistsInResidence50 from '../../../assets/img/portfolio/artists_in_residence/50.png';


export const ARTISTS_IN_RESIDENCE: Project = {
  id: 'artists-in-residence',
  name: 'Artists In Residence',
  links: [],
  date: '2023',
  keywords: 'YouTube',
  icon: {
    src: artistsInResidence50,
    alt: 'title page over apartment building',
  },
  images: [],
  video: {
    src: 'https://www.youtube.com/embed/-qTctYg1rQ0?si=UAhlXcl6lyrTOJH7',
    aspectRatio: '4-3',
  },
  description: 'A meditation on feeling lost and making art.',
  bullets: ['made in collaboration with Neha'],
};
