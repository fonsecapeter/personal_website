import { Project } from '../projects';

import witchsHut100 from '../../../assets/img/portfolio/witchs_hut/100.jpg';
import witchsHut50 from '../../../assets/img/portfolio/witchs_hut/50.jpg';
import witchsHut25 from '../../../assets/img/portfolio/witchs_hut/25.jpg';


export const WITCHS_HUT: Project = {
  id: 'witchs-hut',
  name: 'Witch\'s Hut',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/143106685/Witchs-Hut',
  }],
  date: '2022',
  keywords: 'oil pastel',
  icon: {
    src: witchsHut50,
    alt: 'painting of hut on hill',
  },
  images: [
    {
      full: witchsHut100,
      half: witchsHut50,
      quarter: witchsHut25,
      alt: 'painting of hut on hill',
    },
  ],
  description: 'There\'s a comfort in loneliness.',
  bullets: [],
};
