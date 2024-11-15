// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Project } from './projects';
import apiBuddy from '../../assets/img/icons/portfolio/api_buddy.gif';
import brain from '../../assets/img/icons/portfolio/brain.png';
import brassMono from '../../assets/img/icons/portfolio/brass_mono.png';
import colorShiftScreenShot from '../../assets/img/icons/portfolio/color_shift_screenshot.png';
import gliaQuestionDetail from '../../assets/img/icons/portfolio/glia_question_detail.png';
import krafftachrome from '../../assets/img/icons/portfolio/krafftachrome.png';
import peterNotes from '../../assets/img/icons/portfolio/peter_notes.png';
import rubyPawnPromotion from '../../assets/img/icons/portfolio/ruby_pawn_promotion.gif';
import shellectricJsx from '../../assets/img/icons/portfolio/shellectric_jsx.png';
import thisWebsite from '../../assets/img/icons/portfolio/this_website.png';
import ttamBook from '../../assets/img/icons/portfolio/ttam_book.jpg';
import ttamFox from '../../assets/img/icons/portfolio/ttam_fox.png';
import ttamHap from '../../assets/img/icons/portfolio/ttam_hap.png';
import ttamLark from '../../assets/img/icons/portfolio/ttam_lark.jpg';
import ttamMedCab from '../../assets/img/icons/portfolio/ttam_medcab.png';
import jarvs from '../../assets/img/icons/portfolio/jarvs.png';

export const CODE: Project[] = [
  {
    id: 'medicine-cabinet-update',
    name: 'Medicine Cabinet Update',
    links: [
      {
        text: 'blog post',
        url: 'https://blog.23andme.com/articles/take-a-peek-inside-23andmes-upgrade-to-the-medicine-cabinet-feature',
      },
    ],
    date: '2024',
    keywords: '23andMe',
    icon: {
      src: ttamMedCab,
    },
    description: 'Import medications to compare with AI-driven reports',
    bullets: [
      'Led technical investigation of new and complex data sources, enabling thousands of customers to get actionable results',
    ],
  },

  {
    id: 'hap-lab-values',
    name: 'Health Action Plan / Lab Results',
    links: [
      {
        text: 'Action Plan blog post',
        url: 'https://blog.23andme.com/articles/a-health-action-plan-for-you',
      },
      {
        text: 'Lab Results blog post',
        url: 'https://customercare.23andme.com/hc/en-us/articles/17330728225431-Lab-Results-Vitals',
      },
    ],
    date: '2020-2024',
    keywords: '23andMe',
    icon: {
      src: ttamHap,
    },
    description: 'Personalized recommendations based on genetics, clinical, and lifestyle data',
    bullets: [
      'Designed, built, and followed related long term, iterative full stack features that served millions of customers actionable information',
      'Provided premium feature differentiation to drive subscriptions, enabling the company to begin a shift toward a more sustainable profit-structure',
    ],
  },

  {
    id: 'brass-mono',
    name: 'Brass Mono',
    links: [
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/brass_mono',
      },
      {
        text: 'download',
        url: 'https://github.com/fonsecapeter/brass_mono/releases/latest/',
      },
    ],
    date: '2017',
    keywords: 'open source font',
    icon: {
      src: brassMono,
    },
    description: 'Retro monospaced font inspired by 70\'s electrical and mechanical design design. It\'s the only font I use on this website and write code in it every day.',
    bullets: [
      'Docker',
      'Automated regular / bold / italic build',
      'Almost Google Fonts compliant',
      'Rad design',
    ],
  },

  {
    id: 'this-website',
    name: 'This Website',
    links: [
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/personal_website',
      },
    ],
    date: '2016',
    keywords: 'single page web app',
    icon: {
      src: thisWebsite,
    },
    description: 'You\'re on it right now!',
    bullets: [
      'React',
      'Code Splitting',
      'TypeScript',
      'Sass',
      'Docker',
      'Continuous Deployment',
    ],
  },

  {
    id: 'api-buddy',
    name: 'API Buddy',
    links: [
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/api-buddy',
      },
      {
        text: 'pypi',
        url: 'https://pypi.org/project/api-buddy',
      },
    ],
    date: '2019',
    keywords: 'python cli tool',
    icon: {
      src: apiBuddy,
    },
    description: 'CLI tool for exploring APIs. I Use this all the time at work. Postman is great, but it\'s also complicated and takes too long to set up when I want an answer right away. This has is exactly what I need for working with API\'s, nothing less, nothing more.',
    bullets: [
      'Intuitive interface',
      'Automatic OAuth2 authentication',
      'Pleasant text-based UI/UX',
    ],
  },

  {
    id: 'krafftachrome',
    name: 'Krafftachrome',
    links: [
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/krafftachrome_visual_studio_code',
      },
      {
        text: 'vscode',
        url: 'https://marketplace.visualstudio.com/items?itemName=fonsecapeter.theme-krafftachrome',
      },
    ],
    date: '2022',
    keywords: 'colorscheme',
    icon: {
      src: krafftachrome,
    },
    description: 'Inspired by the work of Katia and Maurice Krafft, this project aims to capture the strange and beautiful world of 20th century volcanology. All colors were "droppered" directly from photos they took and "re-droppered" as I curated them into a cohesive palette that worked for daily use.',
    bullets: [
      'VS Code theme',
      'iTerm2 theme',
    ],
  },

  {
    id: 'shellectric-colors',
    name: 'Shellectric Colors',
    links: [
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/shellectric-color-scheme',
      },
      {
        text: 'atom',
        url: 'https://atom.io/themes/shellectric-syntax',
      },
    ],
    date: '2017',
    keywords: 'colorscheme',
    icon: {
      src: shellectricJsx,
    },
    description: 'Easy on the eyes, retro colors inspired by 70\'s design.',
    bullets: [
      'Atom theme',
      'Several terminal themes',
      'Vim integration',
      'Slack theme',
      'Chrome theme',
    ],
  },

  {
    id: 'ttam-book',
    name: '23andMe Book',
    links: [
      {
        text: 'blog post',
        url: 'https://blog.23andme.com/articles/write-your-dna-story',
      },
    ],
    date: '2018',
    keywords: '23andMe',
    icon: {
      src: ttamBook,
    },
    description: 'Coffee-table book with personalized ancestry results',
    bullets: [
      'Led a team to build the company\'s first recurring revenue feature in partnership with an external printing company',
      'Was responsible for the entire project, from the overall approach to the cloud deployment',
      'Shipped on a tight deadline, allowing sales to start ahead of the holiday rush',
    ],
  },

  {
    id: 'ttam-fox',
    name: '23andMe / MJFF Partnership',
    links: [
      {
        text: 'Fox Insight',
        url: 'https://foxinsight.michaeljfox.org/',
      },
    ],
    date: '2018',
    keywords: '23andMe',
    icon: {
      src: ttamFox,
    },
    description: 'Led the techinical side of an already existing research partnership with the Michael J. Fox foundation. Biggest contribution was a new set of API endpoints that improved performance by > 10 fold compared to the original integration.',
    bullets: [],
  },

  {
    id: 'ttam-lark',
    name: '23andMe / Lark Partnership',
    links: [
      {
        text: 'blog post',
        url: 'https://blog.23andme.com/articles/your-digital-health-coach-is-here',
      },
    ],
    date: '2019',
    keywords: '23andMe',
    icon: {
      src: ttamLark,
    },
    description: 'Led a team of engineers to build an API integration with a 3rd party mobile app that helps customers manage chronic diseases.',
    bullets: [],
  },

  {
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
      src: brain,
    },
    description: 'When I first learned how accessible tensor flow was, I had to see if I could hack together a quick deep learning model trained to diagnose Alzheimer\'s from 3D brain MRI scans. The models themselves are faily simple, but the intersting part is the pipeline I built to feed them data. This involved loading sample MRI scans from public sources (including a single MRI of my own brain) and the steps to normalize and process them so that they could be fed into tensorflow (including quality checks along the way). At the time, I could only find one paper on training models against MRI data so adapted what I learned from UCSF about volumetric studies to internet guides for image recognition models to see if I could replicate something similar. I quickly ran into scaling limitations so decided to try any other public, labelled brain MRI datasets for similar classification studies that I could find. I stopped at the point where I\'d need some sort of research partnership to scale up for more data, but did lay the groundwork for something that could be expanded and tuned.',
    bullets: [
      'Convolutional neural nets',
      'Leveraged a public datasets',
      'Complete data pipeline from raw MRI exports',
      'Voxels',
    ],
  },

  {
    id: 'color-shift',
    name: 'Color Shift',
    links: [
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/color-shift',
      },
      {
        text: 'live',
        url: 'http://fonsecapeter.github.io/color-shift',
      },
    ],
    date: '2016',
    org: {
      name: 'App Academy',
      url: 'https://www.appacademy.io/',
    },
    keywords: 'web game',
    icon: {
      src: colorShiftScreenShot,
    },
    description: 'JavaScript canvas game that makes learning about neurology fun.',
    bullets: [
      'Artisinal, hand-made physics logic',
    ],
  },

  {
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
      src: peterNotes,
    },
    description: 'Terminal-based notes manager.',
    bullets: [
      'Works with any text editor',
      'Can manage existing notes',
      'Zero things to learn',
      'Easy to hook into the cloud',
    ],
  },

  {
    id: 'ruby-chess',
    name: 'Ruby Chess',
    links: [
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/ruby_chess',
      },
    ],
    date: '2016',
    org: {
      name: 'App Academy',
      url: 'https://www.appacademy.io/',
    },
    keywords: 'ruby cli game',
    icon: {
      src: rubyPawnPromotion,
      small: false,
    },
    description: 'Command-line chess.',
    bullets: [
      'Computer player that tries to win',
    ],
  },

  {
    id: 'glia',
    name: 'Glia',
    links: [
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/Glia',
      },
    ],
    date: '2016',
    org: {
      name: 'App Academy',
      url: 'https://www.appacademy.io',
    },
    keywords: 'crud web app',
    icon: {
      src: gliaQuestionDetail,
    },
    description: 'Online support group for caregivers of dementia patients.',
    bullets: [
      'React-Flux front end',
      'Rails-PostgreSQL back end',
      'Responsive design',
      'Rich text editing, complete with drag-and-drop image uploading',
      'Minimized data requests with nested Flux resources to reduce load time',
    ],
  },

  {
    id: 'jarvs',
    name: 'Jarvs',
    links: [
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/jarvs',
      },
      {
        text: 'launchpad',
        url: 'https://launchpad.net/jarvs',
      },
    ],
    date: '2016',
    org: {
      name: 'UCSF',
      url: 'https://memory.ucsf.edu/',
    },
    keywords: 'automation',
    icon: {
      src: jarvs,
    },
    description: 'Jarvs is a research visist summary management system, designed with large-scale clinical research in mind. I built this to automate part of my job at UCSF while I was teaching myself python on the side.',
    bullets: [
      'apt-get installable',
      'GUI Application',
      'Rudimentary natural language interface',
      'Graphs',
      'Emails',
      'Cronjobs',
    ],
  },
];
