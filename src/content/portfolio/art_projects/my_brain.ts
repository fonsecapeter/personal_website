import { Project } from '../projects';

import main100 from '../../../assets/img/portfolio/brain/main/100.jpg';
import main25 from '../../../assets/img/portfolio/brain/main/25.jpg';
import inSitu100 from '../../../assets/img/portfolio/brain/in_situ/100.jpg';
import inSitu50 from '../../../assets/img/portfolio/brain/in_situ/50.jpg';
import inSitu25 from '../../../assets/img/portfolio/brain/in_situ/25.jpg';
import render100 from '../../../assets/img/portfolio/brain/render/100.png';
import render50 from '../../../assets/img/portfolio/brain/render/50.png';
import render25 from '../../../assets/img/portfolio/brain/render/25.png';
import animation20 from '../../../assets/img/portfolio/brain/animation/20.gif';
import animation10 from '../../../assets/img/portfolio/brain/animation/10.gif';

const MY_BRAIN: Project = {
  id: 'my-brain',
  name: 'My Brain',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/41763273/My-Brain',
  }],
  date: '2016',
  keywords: '3d printing',
  icon: {
    src: animation10,
    alt: 'peter\'s brain',
  },
  images: [
    {
      full: main100,
      half: animation20,
      quarter: main25,
      alt: 'peter\'s brain',
    },
    {
      full: inSitu100,
      half: inSitu50,
      quarter: inSitu25,
      alt: 'peter\'s brain',
    },
    {
      full: render100,
      half: render50,
      quarter: render25,
      alt: 'peter\'s brain',
    },
  ],
  description: 'I used to run MRIs at UCSF.',
  bullets: [],
};

export default MY_BRAIN;
