import { Project } from '../projects';

import countryside100 from '../../../assets/img/portfolio/sebastopol/countryside/100.jpg';
import countryside50 from '../../../assets/img/portfolio/sebastopol/countryside/50.jpg';
import countryside25 from '../../../assets/img/portfolio/sebastopol/countryside/25.jpg';
import poem100 from '../../../assets/img/portfolio/sebastopol/poem/100.jpg';
import poem50 from '../../../assets/img/portfolio/sebastopol/poem/50.jpg';
import poem25 from '../../../assets/img/portfolio/sebastopol/poem/25.jpg';
import typewriter100 from '../../../assets/img/portfolio/sebastopol/typewriter/100.jpg';
import typewriter50 from '../../../assets/img/portfolio/sebastopol/typewriter/50.jpg';
import typewriter25 from '../../../assets/img/portfolio/sebastopol/typewriter/25.jpg';
import typewriterRepair100 from '../../../assets/img/portfolio/sebastopol/typewriter_repair/100.jpg';
import typewriterRepair50 from '../../../assets/img/portfolio/sebastopol/typewriter_repair/50.jpg';
import typewriterRepair25 from '../../../assets/img/portfolio/sebastopol/typewriter_repair/25.jpg';


export const SEBASTOPOL: Project = {
  id: 'sebastopol',
  name: 'Sebastopol',
  links: [{
    text: 'behance',
    url: 'https://www.behance.net/gallery/196837971/Sebastopol',
  }],
  date: '2023',
  keywords: 'typewriter poetry',
  icon: {
    src: poem50,
    alt: 'typewritten words',
  },
  images: [
    {
      full: poem100,
      half: poem50,
      quarter: poem25,
      alt: 'typewritten words',
    },
    {
      full: typewriter100,
      half: typewriter50,
      quarter: typewriter25,
      alt: 'photo of 1972 olympus sg3 typewriter',
    },
    {
      full: typewriterRepair100,
      half: typewriterRepair50,
      quarter: typewriterRepair25,
      alt: 'photo of drink next to typewriter taken apart',
    },
    {
      full: countryside100,
      half: countryside50,
      quarter: countryside25,
      alt: 'photo of sebastopol countryside',
    },
  ],
  description: 'Not one for writing poetry, but felt like it after fixing a typewriter + going on a weekend trip.',
  bullets: [],
};
