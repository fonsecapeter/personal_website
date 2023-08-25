import dna from '../assets/img/icons/experience/dna.png';
import brain from '../assets/img/icons/experience/brain.png';
import microscope from '../assets/img/icons/experience/microscope.png';
import stethoscope from '../assets/img/icons/experience/stethoscope.png';
import tube from '../assets/img/icons/experience/tube.png';
import aa from '../assets/img/icons/aa.png';
import ucsc from '../assets/img/icons/ucsc.png';

export interface Experience {
  title: string,
  icon: string,
  date: string,
  link: string,
  org: string,
  bullets: string[],
  primary?: string,
}

export const EXPERIENCES = {
  workExperiences: [
    {
      title: 'Software Engineer',
      icon: dna,
      date: '2016-Present',
      link: 'https://www.23andme.com/',
      org: '23andMe',
      bullets: [],
    },

    {
      title: 'Clinical Research Coordinator',
      icon: brain,
      date: '2014-2016',
      link: 'http://memory.ucsf.edu/',
      org: 'UCSF Memory and Aging Center',
      primary: 'Primary Study: Frontotemporal Dementia: Genes, Images and Emotions',
      bullets: [
        'Accelerated dictation approval bottleneck by automating reminders and metrics',
        'Automated administrative tasks and improved scalability of recruitment',
        'Coordinated a team to compile a $5M competitive grant renewal application',
        'Managed metrics, IRB approval, team meetings, and external presentations',
        'Administered MRIs and cognitive / psychometric tests',
      ],
    },

    {
      title: 'Undergraduate Researcher',
      icon: microscope,
      date: '2013-2014',
      link: 'http://www.kellogglab.com/',
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
