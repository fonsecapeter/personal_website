// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Project } from './projects';
import artistsInResidence from '../../assets/img/icons/portfolio/artists_in_residence.png';
import ceramicDeskSet from '../../assets/img/icons/portfolio/ceramic_desk_set.jpg';
import crvClinometer from '../../assets/img/icons/portfolio/crv_clinometer.jpg';
import desktopStatus from '../../assets/img/icons/portfolio/desktop_status.jpg';
import headphonesOnStand from '../../assets/img/icons/portfolio/headphones_on_stand.jpg';
import hHDoNotDisturb from '../../assets/img/icons/portfolio/hh_do_not_disturb.jpg';
import hHInternalSigns from '../../assets/img/icons/portfolio/hh_internal_signs.jpg';
import hHMap from '../../assets/img/icons/portfolio/hh_map.jpg';
import hHMenus from '../../assets/img/icons/portfolio/hh_menus.jpg';
import hHReception from '../../assets/img/icons/portfolio/hh_reception.jpg';
import honda from '../../assets/img/icons/portfolio/honda.png';
import hotelHallway from '../../assets/img/icons/portfolio/hotel_hallway.jpg';
import intoTheCity from '../../assets/img/icons/portfolio/into_the_city.jpg';
import jewelryBox from '../../assets/img/icons/portfolio/jewelry_box.jpg';
import meuBem from '../../assets/img/icons/portfolio/meu_bem.jpg';
import myBrain from '../../assets/img/icons/portfolio/my_brain.jpg';
import oneCA from '../../assets/img/icons/portfolio/1_ca.jpg';
import riverCrossing from '../../assets/img/icons/portfolio/river_crossing.jpg';
import sebastopol from '../../assets/img/icons/portfolio/sebastopol.jpg';
import sfBay from '../../assets/img/icons/portfolio/sf_bay.jpg';
import skateboard from '../../assets/img/icons/portfolio/skateboard.jpg';
import stepStool from '../../assets/img/icons/portfolio/step_stool.jpg';
import tablecloth from '../../assets/img/icons/portfolio/tablecloth.jpg';
import teaBox from '../../assets/img/icons/portfolio/tea_box.jpg';
import threeCities from '../../assets/img/icons/portfolio/three_cities.jpg';
import travelStress from '../../assets/img/icons/portfolio/travel_stress.jpg';
import twoZeroEightFive from '../../assets/img/icons/portfolio/2085.png';
import vapoRub from '../../assets/img/icons/portfolio/vapo_rub.jpg';
import witchesHut from '../../assets/img/icons/portfolio/witches_hut.jpg';
import yellowSnake from '../../assets/img/icons/portfolio/yellow_snake.jpg';
// import congrats from '../../assets/img/icons/portfolio/congrats.jpg';
// import dads60th from '../../assets/img/icons/portfolio/dads_60th_thumb.jpg';
// import simiTheDog from '../../assets/img/icons/portfolio/simi_the_dog.jpg';
// import storyAboutNeha from '../../assets/img/icons/portfolio/story_about_neha.jpg';
// import symiIsland from '../../assets/img/icons/portfolio/symi_island.jpg';


export const ART: Project[] = [

  {
    id: 'hotel_hallway',
    name: 'Hotel Hallway',
    links: [
      {
        text: 'behance',
        url: 'https://www.behance.net/gallery/196863355/Hotel-Hallway',
      },
      {
        text: 'map',
        url: '/#/project/art.hh_map',
      },
      {
        text: 'internal signs',
        url: '/#/project/art.hh_internal_signs',
      },
      {
        text: 'reception',
        url: '/#/project/art.hh_reception_sign',
      },
      {
        text: 'do not disturb',
        url: '/#/project/art.hh_do_not_disturb',
      },
      {
        text: 'menus',
        url: '/#/project/art.hh_do_not_disturb',
      },
    ],
    date: '2022 - 2024?',
    keywords: 'installation',
    icon: {
      src: hotelHallway,
    },
    description: 'My wife and I always wanted to open a hotel together, but we didn\'t want to uproot our lives to do it. We decided to make our apartment feel like one instead.',
    bullets: ['made in collaboration with Neha'],
  },

  {
    id: 'hh_map',
    name: 'Hotel Hallway Map',
    links: [
      {
        text: 'behance',
        url: 'https://www.behance.net/gallery/197015003/Hotel-Hallway-Map',
      },
      {
        text: 'hotel hallway',
        url: '/#/project/art.hotel_hallway',
      },
    ],
    date: '2024-04-19',
    keywords: 'cartography',
    icon: {
      src: hHMap,
    },
    description: 'Because every hotel has one of these.',
    bullets: [],
  },

  {
    id: 'hh_internal_signs',
    name: 'Internal Hotel Hallway Signs',
    links: [
      {
        text: 'behance',
        url: 'https://www.behance.net/gallery/197273767/Internal-Hotel-Hallway-Signs',
      },
      {
        text: 'hotel hallway',
        url: '/#/project/art.hotel_hallway',
      },
    ],
    date: '2024-04-19',
    keywords: 'plywood',
    icon: {
      src: hHInternalSigns,
    },
    description: 'Hand-made signs for a hand-made hotel.',
    bullets: [],
  },

  {
    id: 'hh_reception_sign',
    name: 'Hotel Hallway Reception Sign',
    links: [
      {
        text: 'behance',
        url: 'https://www.behance.net/gallery/197015317/Hotel-Hallway-Menus',
      },
      {
        text: 'hotel hallway',
        url: '/#/project/art.hotel_hallway',
      },
    ],
    date: '2023-12-07',
    keywords: 'sheet metal',
    icon: {
      src: hHReception,
    },
    description: 'My first stab at sign-painting.',
    bullets: [],
  },


  {
    id: 'hh_do_not_disturb',
    name: 'Do Not Disturb Sign',
    links: [
      {
        text: 'behance',
        url: 'https://www.behance.net/gallery/197425417/Do-Not-Disturb',
      },
      {
        text: 'hotel hallway',
        url: '/#/project/art.hotel_hallway',
      },
    ],
    date: '2023-01-14',
    keywords: 'functional art',
    icon: {
      src: hHDoNotDisturb,
    },
    description: 'There\'s nothing on the other side.',
    bullets: ['made in collaboration with Neha'],
  },

  {
    id: 'hh_menus',
    name: 'Hotel Hallway Menus',
    links: [
      {
        text: 'behance',
        url: 'https://www.behance.net/gallery/197273457/Hotel-Hallway-Reception-Sign',
      },
      {
        text: 'hotel hallway',
        url: '/#/project/art.hotel_hallway',
      },
    ],
    date: '2022-10-25',
    keywords: 'functional art',
    icon: {
      src: hHMenus,
    },
    description: 'Tips not included.',
    bullets: ['made in collaboration with Neha'],
  },

  // {
  //   id: 'dads-sixtieth',
  //   name: 'Dad\'s 60th',
  //   links: [],
  //   date: '2024-01-19',
  //   keywords: 'YouTube',
  //   icon: {
  //     src: dads60th,
  //   },
  //   video: 'https://www.youtube.com/embed/ktDAwsaqTJI?si=dVHDYrM_ddlBknKL',
  //   description: 'A movie about my dad.',
  //   bullets: [],
  //   aspectRatio: '16-9',
  // },

  {
    id: 'into_the_city',
    name: 'Into the City',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/184696705/Into-the-City',
    }],
    date: '2023',
    keywords: 'watercolor',
    icon: {
      src: intoTheCity,
    },
    description: 'We ran as fast as we could into that city.',
    bullets: [],
  },

  {
    id: 'river_crossing',
    name: 'River Crossing',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/181915019/River-Crossing',
    }],
    date: '2023',
    keywords: 'oil pastel',
    icon: {
      src: riverCrossing,
    },
    description: 'My dad drove us through a river when I was a kid.',
    bullets: [],
  },

  {
    id: 'tablecloth',
    name: 'Tablecloth',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/180754469/Tablecloth',
    }],
    date: '2023',
    keywords: 'sharpie',
    icon: {
      src: tablecloth,
    },
    description: 'Saved a few hundred bucks with this one.',
    bullets: [],
  },

  {
    id: 'jewelry_box',
    name: 'Jewelry Box',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/180700595/Jewelry-Box',
    }],
    date: '2023',
    keywords: 'acrylic',
    icon: {
      src: jewelryBox,
    },
    description: 'All I did was paint some eyes on a box but am really proud of it.',
    bullets: [],
  },

  {
    id: 'artists-in-residence',
    name: 'Artists In Residence',
    links: [],
    date: '2023',
    keywords: 'YouTube',
    icon: {
      src: artistsInResidence,
    },
    video: 'https://www.youtube.com/embed/-qTctYg1rQ0?si=UAhlXcl6lyrTOJH7',
    description: 'A meditation on feeling lost and making art.',
    bullets: ['made in collaboration with Neha'],
    aspectRatio: '4-3',
  },

  {
    id: 'meu-bem',
    name: 'Meu Bem',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/177148519/Meu-Bem',
    }],
    date: '2023',
    keywords: 'pastel',
    icon: {
      src: meuBem,
    },
    description: 'Made while on vacation in Marrakesh.',
    bullets: [],
  },

  {
    id: 'headphone-stand',
    name: 'Headphone Stand',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/180577907/Headphone-Stand',
    }],
    date: '2023',
    keywords: 'scrapwood',
    icon: {
      src: headphonesOnStand,
    },
    description: 'Made while on hold with customer service for a flight change.',
    bullets: [],
  },

  {
    id: 'sebastopol',
    name: 'Sebastopol',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/196837971/Sebastopol',
    }],
    date: '2023',
    keywords: 'typewriter poetry',
    icon: {
      src: sebastopol,
    },
    description: 'Not one for writing poetry, but felt like it after fixing a typewriter + going on a weekend trip.',
    bullets: [],
  },

  {
    id: 'step-stool',
    name: 'Step Stool',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/166317739/Step-Stool',
    }],
    date: '2023',
    keywords: 'plywood',
    icon: {
      src: stepStool,
    },
    description: 'It\'s not fine woodworking, but it looks good and gets the job done.',
    bullets: [],
  },

  {
    id: 'yellow-snake',
    name: 'Yellow Snake',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/165219277/Yellow-Snake',
    }],
    date: '2023',
    keywords: 'acrylic',
    icon: {
      src: yellowSnake,
    },
    description: 'Because I couldn\'t have the original.',
    bullets: [],
  },

  {
    id: 'travel-stress',
    name: 'Travel Stress',
    links: [],
    date: '2023',
    keywords: 'YouTube',
    icon: {
      src: travelStress,
    },
    video: 'https://www.youtube.com/embed/u5xZQ9aE_Dk?si=xuFDptgIVhGAh_2T',
    description: 'A movie about travelling.',
    bullets: [],
    aspectRatio: '16-9',
  },

  {
    id: 'desktop-status',
    name: 'Desktop Status',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/165218955/Desktop-Status',
    }],
    date: '2023',
    keywords: 'plywood sheetmetal',
    icon: {
      src: desktopStatus,
    },
    description: 'Makes it easy to know if I can talk or not.',
    bullets: [],
  },

  // {
  //   id: 'story-about-neha',
  //   name: 'A Story About Neha',
  //   links: [],
  //   date: '2022',
  //   keywords: 'YouTube',
  //   icon: {
  //     src: storyAboutNeha,
  //   },
  //   video: 'https://www.youtube.com/embed/reHt-YfhLF0?si=MBIUcfxbqZT0852d',
  //   description: 'For those who don\'t know.',
  //   bullets: [],
  //   aspectRatio: '16-9',
  // },

  {
    id: 'crv-clinometer',
    name: 'CR-V Clinometer',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/180590821/CR-V-Clinometer',
    }],
    date: '2022',
    keywords: 'automotive',
    icon: {
      src: crvClinometer,
    },
    description: 'Prevents rollover.',
    bullets: [],
  },

  {
    id: 'desk-set',
    name: 'Desk Set',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/165218685/Ceramic-Desk-Set',
    }],
    date: '2022',
    keywords: 'ceramic',
    icon: {
      src: ceramicDeskSet,
    },
    description: 'Home office improvements.',
    bullets: [],
  },

  {
    id: 'three-cities',
    name: '3 Cities',
    links: [],
    date: '2022',
    keywords: 'YouTube',
    icon: {
      src: threeCities,
    },
    video: 'https://www.youtube.com/embed/videoseries?si=DSCik6f-aIWz6o-5&amp;list=PLZV4bTgIS1Vff5D7_jfhDFDq5nNgvLYVJ',
    description: 'A challenge between friends that got me to try daily vlogging for 3 days.',
    bullets: [],
    aspectRatio: '16-9',
  },

  {
    id: 'witches-hut',
    name: 'Witches Hut',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/143106685/Witches-Hut',
    }],
    date: '2022',
    keywords: 'oil pastel',
    icon: {
      src: witchesHut,
    },
    description: 'There\'s a comfort in loneliness.',
    bullets: [],
  },

  {
    id: 'skateboard',
    name: 'Skateboard',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/123961157/Skateboard',
    }],
    date: '2021',
    keywords: 'acrylic',
    icon: {
      src: skateboard,
    },
    description: 'Functional art.',
    bullets: [],
  },

  {
    id: 'one-ca',
    name: '1 California',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/95895635/1-California',
    }],
    date: '2019',
    keywords: 'watercolor',
    icon: {
      src: oneCA,
    },
    description: 'A very sentimental muni line.',
    bullets: [],
  },

  {
    id: 'vaporub',
    name: 'VapoRub',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/123961329/VapoRub',
    }],
    date: '2021',
    keywords: 'acrylic',
    icon: {
      src: vapoRub,
    },
    description: 'Love the stuff.',
    bullets: [],
  },

  // {
  //   id: 'graduation',
  //   name: 'Graduation Celebration',
  //   links: [{
  //     text: 'behance',
  //     url: 'https://www.behance.net/gallery/123962403/Graduation-Celebration',
  //   }],
  //   date: '2020',
  //   keywords: 'watercolor glitter',
  //   icon: {
  //     src: congrats,
  //   },
  //   description: 'My brother graduated during shelter-in-place.',
  //   bullets: [],
  // },

  // {
  //   id: 'simi-the-dog',
  //   name: 'Simi',
  //   links: [{
  //     text: 'behance',
  //     url: 'https://www.behance.net/gallery/95895733/Simi',
  //   }],
  //   date: '2020',
  //   keywords: 'watercolor',
  //   icon: {
  //     src: simiTheDog,
  //   },
  //   description: 'He\'s a good boy (sometimes).',
  //   bullets: [],
  // },

  // {
  //   id: 'symi-island',
  //   name: 'Σύμη',
  //   links: [{
  //     text: 'behance',
  //     url: 'https://www.behance.net/gallery/123962009/_',
  //   }],
  //   date: '2020',
  //   keywords: 'watercolor',
  //   icon: {
  //     src: symiIsland,
  //   },
  //   description: 'Named our dog after this place.',
  //   bullets: [],
  // },

  {
    id: 'sf-bay',
    name: 'SF Bay',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/123961867/SF-Bay',
    }],
    date: '2019',
    keywords: 'oil pastel',
    icon: {
      src: sfBay,
    },
    description: 'Where I live.',
    bullets: [],
  },

  {
    id: 'my-brain',
    name: 'My Brain',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/41763273/My-Brain',
    }],
    date: '2016',
    keywords: '3d printing',
    icon: {
      src: myBrain,
    },
    description: 'I used to run MRIs at UCSF.',
    bullets: [],
  },

  {
    id: 'my-motorcycle',
    name: 'My Motorcycle',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/41763537/My-Motorcycle',
    }],
    date: '2016',
    keywords: 'digital illustration',
    icon: {
      src: honda,
    },
    description: 'My first and only motorcycle.',
    bullets: [],
  },

  {
    id: '2085',
    name: '2085',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/41763455/2085',
    }],
    date: '2014',
    keywords: 'digital illustration',
    icon: {
      src: twoZeroEightFive,
    },
    description: 'My first apartment in SF.',
    bullets: [],
  },

  {
    id: 'tea-box',
    name: 'Tea Box',
    links: [{
      text: 'behance',
      url: 'https://www.behance.net/gallery/180834495/Tea-Box',
    }],
    date: '2013',
    keywords: 'pine',
    icon: {
      src: teaBox,
    },
    description: 'Some of my early work.',
    bullets: [],
  },
];
