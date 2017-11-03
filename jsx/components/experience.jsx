const React = require('react');
const Link = require('react-router').Link;
const ExperienceItem = require('./experience_item');

const Experience = React.createClass({
  render() {
    const experiences = [
      {
        title: 'Software Engineer',
        icon: 'public/img/icons/experience/dna.png',
        date: '2016-Present',
        link: 'https://www.23andme.com/',
        org: '23andMe',
        bullets: [],
      },

      {
        title: 'Clinical Research Coordinator',
        icon: 'public/img/icons/experience/brain.png',
        date: '2014-2016',
        link: 'http://memory.ucsf.edu/',
        org: 'UCSF Memory and Aging Center',
        primary: 'Primary Study: Frontotemporal Dementia: Genes, Images and Emotions',
        bullets: [
          'Accelerated dictation approval bottleneck by automating reminders and metrics',
          'Automated administrative tasks and improved scalability of recruitment',
          'Coordinated a team to compile a $5M competitive grant renewal application',
          'Managed metrics, IRB approval, team meetings, and external presentations',
          'Conducted cognitive tests and ran MRIs',
        ],
      },

      {
        title: 'Undergraduate Researcher',
        icon: 'public/img/icons/experience/microscope.png',
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
        icon: 'public/img/icons/experience/stethoscope.png',
        date: '2012-2013 Summers',
        link: 'http://doctor.webmd.com/practice/novato-medical-center-3fd2a3c8-4703-e211-a42b-001f29e3eb44-overview',
        org: 'Novato Medical Center',
        bullets: [
          'Managed medical records and appointments',
          'Directed incoming patients, calls, and mail',
          'Sterilized medical equipment',
          'Conducted urinalysis and RST\'s',
        ],
      },

      {
        title: 'Technician',
        icon: 'public/img/icons/experience/tube.png',
        date: '2010-2012 Summers',
        link: 'http://www.vintage47amps.com/',
        org: 'Vintage 47 Amplifiers',
        bullets: [
          'Doubled fabrication rate of amplifiers from schematics',
          'Designed logos and components with Adobe Illustrator to grow the brand',
          'Hand-made complete vacuum-tube amplifiers',
        ],
      },
    ];

    const education = [
      {
        title: 'App Academy',
        icon: 'public/img/icons/aa.png',
        date: 'May-July 2016',
        link: 'https://www.appacademy.io/',
        org: 'a/A San Francisco',
        primary: 'Industry-focused programming course',
        bullets: [],
      },

      {
        title: 'Bachelor of Science in Biology',
        icon: 'public/img/icons/ucsc.png',
        date: '2010-2014',
        link: 'https://www.ucsc.edu/',
        org: 'University of California, Santa Cruz',
        primary: 'Minor in Chemistry',
        bullets: [],
      },
    ];

    return (
      <div className="experience">
        <h1 className="experience-title">
          Work Experience
          <a
            className="experience-pdf-tip"
            href="resume/PeterFonsecaResume.pdf"
            target="blank"
          >
            [PDF]
          </a>
        </h1>
        <div>
          {
            experiences.map((experienceItem, idx) => {
              return (
                <ExperienceItem experience={experienceItem} key={idx} />
              )
            })
          }
        </div>
        <div>
          <h2 className="experience-title">Education</h2>
        </div>
        <div>
          {
            education.map((experienceItem, idx) => {
              return (
                <ExperienceItem experience={experienceItem} key={idx} />
              )
            })
          }
        </div>
        <div>
          <h2 className="experience-title">Posters/Presentations</h2>
          <div className="experience-item">
            <div className="experience-item-content">
              <div className="experience-item-left">
                <img
                  src="public/img/icons/poster.png"
                  className="experience-item-icon"
                  alt="poster"
                />
              </div>
              <div className="experience-item-right">
                <p>
                  <a href="http://www.neurology.org/content/86/16_Supplement/P5.191">
                    Dissociations in Socioemotional Test Performance Predict Neurodegeneration in Intrinsic Connectivity Networks
                  </a>
                </p>
                <p>
                  <span className="experience-item-date">2016</span>
                  <span className="experience-item-dot">·</span>
                  <Link to="poster">poster</Link>
                  <span className="experience-item-dot">·</span>
                  AAN
                </p>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-item-content">
              <div className="experience-item-left">
                <img
                  src="public/img/icons/presentation.png"
                  className="experience-item-icon"
                  alt="presentation"
                />
              </div>
              <div className="experience-item-right">
                <p>
                  PP2A-Rts1: Master Regulator of Nutrient-Modulated Cell Size Control in
                  <em>S. cerevisiae</em>
                </p>
                <p>
                  <span className="experience-item-date">2014</span>
                  <span className="experience-item-dot">·</span>
                  presentation
                  <span className="experience-item-dot">·</span>
                  Kellogg Lab Undergraduate Researchers Talks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Experience;
