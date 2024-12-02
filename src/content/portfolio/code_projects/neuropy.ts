import { Project } from '../projects';

import brain100 from '../../../assets/img/portfolio/brain/100.png';
import brain50 from '../../../assets/img/portfolio/brain/50.png';
import brain25 from '../../../assets/img/portfolio/brain/25.png';


export const NEUROPY: Project = {
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
  description: 'When I first learned how accessible tensor flow was, I had to see if I could hack together a quick deep learning model trained to diagnose Alzheimer\'s from 3D brain MRI scans. The models themselves are faily simple, but the intersting part is the pipeline I built to feed them data. This involved loading sample MRI scans from public sources (including a single MRI of my own brain) and the steps to normalize and process them so that they could be fed into tensorflow (including quality checks along the way). At the time, I could only find one paper on training models against MRI data so adapted what I learned from UCSF about volumetric studies to internet guides for image recognition models to see if I could replicate something similar. I quickly ran into scaling limitations so decided to try any other public, labelled brain MRI datasets for similar classification studies that I could find. I stopped at the point where I\'d need some sort of research partnership to scale up for more data, but did lay the groundwork for something that could be expanded and tuned.',
  bullets: [
    'Convolutional neural nets',
    'Leveraged a public datasets',
    'Complete data pipeline from raw MRI exports',
    'Voxels',
  ],
};
