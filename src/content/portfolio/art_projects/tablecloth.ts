import { Project } from '../projects';

import tablecloth100 from '../../../assets/img/portfolio/tablecloth/100.jpg';
import tablecloth50 from '../../../assets/img/portfolio/tablecloth/50.jpg';
import tablecloth25 from '../../../assets/img/portfolio/tablecloth/25.jpg';


const TABLECLOTH: Project = {
  id: 'tablecloth',
  name: 'Tablecloth',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/180754469/Tablecloth',
  }],
  date: '2023',
  keywords: 'sharpie',
  icon: {
    src: tablecloth50,
    alt: 'tablecloth with drawings on it',
  },
  images: [
    {
      full: tablecloth100,
      half: tablecloth50,
      quarter: tablecloth25,
      alt: 'tablecloth with drawings on it',
    },
  ],
  description: 'Saved a few hundred bucks with this one.',
  bullets: [],
};

export default TABLECLOTH;
