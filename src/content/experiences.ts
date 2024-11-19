import dna from '../assets/img/icons/experience/dna.png';
import brain from '../assets/img/icons/experience/brain.png';
import microscope from '../assets/img/icons/experience/microscope.png';
import stethoscope from '../assets/img/icons/experience/stethoscope.png';
import tube from '../assets/img/icons/experience/tube.png';
import aa from '../assets/img/icons/aa.png';
import ucsc from '../assets/img/icons/ucsc.png';

export type Experience = {
  readonly title: string,
  readonly icon: string,
  readonly date: string,
  readonly link: string,
  readonly org: string,
  readonly bullets: string[],
  readonly primary?: string,
};

export const EXPERIENCES = {
  workExperiences: [
    {
      title: 'Sr. Software Engineer',
      icon: dna,
      date: '2019-Present',
      link: 'https://www.23andme.com/',
      org: '23andMe',
      bullets: [
        'Built high-visibility features across our product used by millions of customers, supporting rapid growth of the company',
        'Created a pre-approved Medical Device API, replacing FDA legal reviews and accelerating new health feature launches from months to weeks',
        'Led technical designs with cross-functional teams, setting best practices for working with product scientists',
        'Piloted technical stack architectural improvements including microservices, new CI/CD frameworks, modern ORM adoption, react-based frontends, static type-checking, and asynchronous processing',
      ],
    },

    {
      title: 'Software Engineer',
      icon: dna,
      date: '2016-2019',
      link: 'https://www.23andme.com/',
      org: '23andMe',
      bullets: [
        'Hired, mentored and led a team of five engineers across three concurrent projects, fostering growth of our talent pool',
        'Owned and scaled the external-facing API + developer program',
        'Led an API working group, defining architectural patterns across the teams',
      ],
    },

    {
      title: 'Clinical Research Coordinator',
      icon: brain,
      date: '2014-2016',
      link: 'http://memory.ucsf.edu/',
      org: 'UCSF Memory and Aging Center',
      primary: 'Primary Study: Frontotemporal Dementia: Genes, Images and Emotions',
      bullets: [
        'Introduced scientific Python to excel-only data analysis workflows, improving data quality and visibility during presentations',
        'Automated key aspects of my role by writing a Python tool, accelerating a patient summary approval bottleneck',
        'Was responsible for a $5M competitive grant renewal application, which allowed the study to continue operating',
        'Managed metrics, IRB approval, team meetings, and external presentations',
        'Administered MRIs and cognitive / psychometric tests',
      ],
    },

    {
      title: 'Undergraduate Researcher',
      icon: microscope,
      date: '2013-2014',
      link: 'https://kellogg-lab.org',
      org: 'UCSC Kellogg Lab',
      primary: 'Primary Focus: Cell Size Control',
      bullets: [
        'Conducted research on enzymatic pathways involving nutrient-mediated cell size control in <em>S. cerevesiase</em>',
        'Discredited a hypothesized back-regulation of PP2A-Rts1 by Pkh1/2',
        'Formally presented results',
        'Worked with PCR, Timecourse, and Western Blot protocols',
      ],
    },

    {
      title: 'Volunteer Lab Assistant',
      icon: stethoscope,
      date: '2012-2013 Summers',
      link:
        'http://doctor.webmd.com/practice/novato-medical-center-3fd2a3c8-4703-e211-a42b-001f29e3eb44-overview',
      org: 'Novato Medical Center',
      bullets: [
        'Managed medical records and appointments',
        'Directed incoming patients, calls, and mail',
        'Sterilized medical equipment',
        "Conducted urinalysis and RST's",
        'Fixed the typewriter',
      ],
    },

    {
      title: 'Technician / Designer',
      icon: tube,
      date: '2010-2012 Summers',
      link: 'http://www.vintage47amps.com/',
      org: 'Vintage 47 Amplifiers',
      bullets: [
        'Hand-made complete vacuum-tube guitar amplifiers from schematics',
        'Designed logos and components with Adobe Illustrator to establish the brand',
      ],
    },
  ],

  education: [
    {
      title: 'App Academy',
      icon: aa,
      date: 'May-July 2016',
      link: 'https://www.appacademy.io/',
      org: 'a/A San Francisco',
      primary: 'Industry-focused programming course',
      bullets: [],
    },

    {
      title: 'Bachelor of Science in Biology',
      icon: ucsc,
      date: '2010-2014',
      link: 'https://www.ucsc.edu/',
      org: 'University of California, Santa Cruz',
      primary: 'Minor in Chemistry',
      bullets: [],
    },
  ],
};
