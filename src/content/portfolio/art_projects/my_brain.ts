import { Project } from '../projects';

import myBrain100 from '../../../assets/img/portfolio/my_brain/100.jpg';
import myBrain50 from '../../../assets/img/portfolio/my_brain/50.jpg';
import myBrain25 from '../../../assets/img/portfolio/my_brain/25.jpg';


export const MY_BRAIN: Project = {
  id: 'my-brain',
  name: 'My Brain',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/41763273/My-Brain',
  }],
  date: '2016',
  keywords: '3d printing',
  icon: {
    src: myBrain50,
    alt: 'peter\'s brain',
  },
  images: [
    {
      full: myBrain100,
      half: myBrain50,
      quarter: myBrain25,
      alt: 'peter\'s brain',
    },
  ],
  description: 'I used to run MRIs at UCSF.',
  bullets: [],
};
