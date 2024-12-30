import { Project } from '../projects';

import riverCrossing100 from '../../../assets/img/portfolio/river_crossing/100.jpg';
import riverCrossing50 from '../../../assets/img/portfolio/river_crossing/50.jpg';
import riverCrossing25 from '../../../assets/img/portfolio/river_crossing/25.jpg';


const RIVER_CROSSING: Project = {
  id: 'river_crossing',
  name: 'River Crossing',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/181915019/River-Crossing',
  }],
  date: '2023',
  keywords: 'oil pastel',
  icon: {
    src: riverCrossing50,
    alt: 'picture of truck in river',
  },
  images: [
    {
      full: riverCrossing100,
      half: riverCrossing50,
      quarter: riverCrossing25,
      alt: 'picture of truck in river',
    },
  ],
  description: 'My dad drove us through a river when I was a kid.',
  bullets: [],
};

export default RIVER_CROSSING;
