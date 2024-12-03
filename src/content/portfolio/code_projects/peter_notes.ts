import { Project } from '../projects';

import peterNotes100 from '../../../assets/img/portfolio/peter_notes/100.png';
import peterNotes50 from '../../../assets/img/portfolio/peter_notes/50.png';
import peterNotes25 from '../../../assets/img/portfolio/peter_notes/25.png';


export const PETER_NOTES: Project = {
  id: 'peter-notes',
  name: 'Peter Notes',
  links: [
    {
      text: 'github',
      url: 'https://github.com/fonsecapeter/peter-notes',
    },
    {
      text: 'gem',
      url: 'https://rubygems.org/gems/peter-notes',
    },
  ],
  date: '2017',
  keywords: 'ruby cli tool',
  icon: {
    src: peterNotes50,
    alt: 'notebook logo',
  },
  images: [
    {
      full: peterNotes100,
      half: peterNotes50,
      quarter: peterNotes25,
      alt: 'notebook logo',
    },
  ],
  description: 'Terminal-based notes manager.',
  bullets: [
    'Works with any text editor',
    'Can manage existing notes',
    'Zero things to learn',
    'Easy to hook into the cloud',
  ],
};
