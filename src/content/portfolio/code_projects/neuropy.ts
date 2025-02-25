import { Project } from '../projects';

import brain100 from '../../../assets/img/portfolio/brain/render/100.png';
import brain50 from '../../../assets/img/portfolio/brain/render/50.png';
import brain25 from '../../../assets/img/portfolio/brain/render/25.png';


const NEUROPY: Project = {
  id: 'neuropy',
  name: 'Brain MRI Deep Learning',
  links: [
    {
      text: 'github',
      url: 'https://github.com/fonsecapeter/neuropy',
    },
  ],
  date: '2017',
  keywords: 'deep learning AI exploration',
  icon: {
    src: brain50,
    alt: 'peter\'s brain',
  },
  images: [
    {
      full: brain100,
      half: brain50,
      quarter: brain25,
      alt: 'peter\'s brain',
    },
  ],
  description: 'In an effort to learn more about AI, I thought I\'d try putting together a deep learning model that could diagnose Alzheimer\'s from 3D brain MRI scans. The models themselves are fairly simple, but I\'m most proud of the pipeline I built to feed them data. This involved loading sample MRI scans from public sources (including a single MRI of my own brain) and normalizing + processing them so that they could feed into tensorflow (with quality checks along the way). At the time, I couldn\'t find any guides on training models against 3D MRI data, so adapted what I learned from UCSF about volumetric studies to internet guides for 2D image recognition models to see if I could get something working. Preliminary results were far better than the average human doctor, but my training data scale felt too low, so I decided to pull in any other public, labelled brain MRI datasets from similar classification studies that I could find. I stopped at the point where I\'d need some sort of research partnership to scale up for more data, but did lay the groundwork for something that could be expanded and tuned.',
  bullets: [
    'Convolutional neural nets',
    'Complete data pipeline from raw MRI exports',
    'Leveraged public datasets',
    'Voxels',
  ],
};

export default NEUROPY;
