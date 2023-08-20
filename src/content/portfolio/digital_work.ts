// eslint-disable-next-line no-unused-vars
import { Project } from './projects';

export const DIGITAL_PROJECTS: Array<Project> = [
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
    keywords: 'Python',
    icon: {
      src: require('../../assets/img/icons/portfolio/api-buddy.gif'),
    },
    description: 'CLI tool for exploring APIs',
    bullets: [
      'Intuitive interface',
      'OAuth2 authentication',
      'Killer formatting',
    ],
  },

  {
    id: 'brass-mono',
    name: 'Brass Mono',
    links: [
      {
        text: 'download',
        url: 'https://github.com/fonsecapeter/brass_mono/releases/latest/',
      },
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/brass_mono',
      },
    ],
    date: '2017',
    keywords: 'Inkscape Fontforge',
    icon: {
      src: require('../../assets/img/icons/portfolio/brass_mono.png'),
    },
    description: 'Retro monospaced font inspired by 70\'s design.',
    bullets: [
      'Docker',
      'Automated regular / bold / italic build',
      'Almost Google Fonts compliant',
      'Rad design',
    ],
  },

  {
    id: 'shellectric-colors',
    name: 'Shellectric Colors',
    links: [
      {
        text: 'atom',
        url: 'https://atom.io/themes/shellectric-syntax',
      },
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/shellectric-color-scheme',
      },
    ],
    date: '2017',
    keywords: 'Colors',
    icon: {
      src: require('../../assets/img/icons/portfolio/shellectric-jsx.png'),
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
    id: 'this-website',
    name: 'This Website',
    links: [
      {
        text: 'github',
        url: 'https://github.com/fonsecapeter/personal_website',
      },
    ],
    date: '2016',
    keywords: 'JavaScript',
    icon: {
      src: require('../../assets/img/icons/workspace.png'),
    },
    description: 'Personal, static website.',
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
    keywords: 'JavasScript',
    icon: {
      src: require('../../assets/img/icons/portfolio/color-shift-screenshot.png'),
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
    keywords: 'Ruby',
    icon: {
      src: require('../../assets/img/icons/portfolio/peter-notes.png'),
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
    keywords: 'Ruby',
    icon: {
      src: require('../../assets/img/icons/portfolio/ruby_pawn_promotion.gif'),
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
      {
        text: 'live',
        url: 'https://glia-app.herokuapp.com',
      },
    ],
    date: '2016',
    org: {
      name: 'App Academy',
      url: 'https://www.appacademy.io',
    },
    keywords: 'Ruby Rails JavaScript React',
    icon: {
      src: require('../../assets/img/icons/portfolio/glia-question-detail.png'),
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
];
