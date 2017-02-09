"use strict";

const React = require('react');
const Link = require('react-router').Link;
const ExperienceItem = require('./experience_item');

const Experience = React.createClass({
  render () {
    const experiences = [
      {
        title: "Software Engineer",
        icon: "icons/experience/dna.png",
        date: "2016-Present",
        link: "https://www.23andme.com/",
        org: "23andMe",
        bullets: []
      },
      {
        title: "Clinical Research Coordinator",
        icon: "icons/experience/brain.png",
        date: "2014-2016",
        link: "http://memory.ucsf.edu/",
        org: "UCSF Memory and Aging Center",
        primary: "Primary Study: Frontotemporal Dementia: Genes, Images and Emotions",
        bullets: [
          "Accelerated dictation approval bottleneck by building <a href=\"https://launchpad.net/jarvs\" target=\"_blank\">Jarvs</a>",
          "Automated administrative tasks and improved scalability of recruitment",
          "Coordinated a team to compile a $5M competitive grant renewal application",
          "Managed metrics, IRB approval, team meetings, and external presentations",
          "Conducted cognitive tests and ran MRIs"
        ]
      },
      {
        title: "Undergraduate Researcher",
        icon: "icons/experience/microscope.png",
        date: "2013-2014",
        link: "http://www.kellogglab.com/",
        org: "UCSC Kellogg Lab",
        primary: "Primary Focus: Cell Size Control",
        bullets: [
          "Conducted research on enzymatic pathways involving nutrient-mediated cell size control in <em>S. cerevesiase</em>",
          "Discredited a hypothesized back-regulation of PP2A-Rts1 by Pkh1/2",
          "Formally presented results",
          "Worked with PCR, Timecourse, and Western Blot protocols"
        ]
      },
      {
        title: "Volunteer Lab Assistant",
        icon: "icons/experience/stethoscope.png",
        date: "2012-2013 Summers",
        link: "http://doctor.webmd.com/practice/novato-medical-center-3fd2a3c8-4703-e211-a42b-001f29e3eb44-overview",
        org: "Novato Medical Center",
        bullets: [
          "Managed medical records and appointments",
          "Directed incoming patients, calls, and mail",
          "Sterilized medical equipment",
          "Conducted urinalysis and RST's"
        ]
      },
      {
        title: "Technician",
        icon: "icons/experience/tube.png",
        date: "2010-2012 Summers",
        link: "http://www.vintage47amps.com/",
        org: "Vintage 47 Amplifiers",
        bullets: [
          "Doubled fabrication rate of amplifiers from schematics",
          "Designed logos and components with Adobe Illustrator to grow the brand"
        ]
      }
    ]

    return (
      <div>
        <br />
        <div id="work_experience">
          {/* <h4><a href="resume/PeterFonsecaResume.pdf" target="blank"><img src="icons/pdf.png" className="icon"></img></a> &nbsp; Work Experience</h4> */}
          <h4>Work Experience &nbsp; <a className="code v-super" href="resume/PeterFonsecaResume.pdf" target="blank">[PDF]</a></h4>
        </div>
        <div>
          {
            experiences.map( (experienceItem, idx) => {
              return (
                <ExperienceItem experience={ experienceItem } key={ idx } />
              )
            })
          }
        </div>
        <div>
          <h4>Education</h4>
        </div>
        <div>
          <div className="row">
            <div className="experience-left">
              <img src="icons/aa.png" className="icon"></img>
            </div>
            <div className="experience-right">
              <h1><a href="https://www.appacademy.io/" target="blank" >App Academy</a></h1>
              <p><span className="date">May-July 2016</span> &nbsp; San Francisco</p>
              <p>Industry-focused programming course</p>
            </div>
          </div>
          <br /><br />
          <br /><br />
          <br /><br />

          <div className="row">
            <div className="experience-left">
              <img src="icons/ucsc.png" className="icon"></img>
            </div>
            <div className="experience-right">
              <h1>Bachelor of Science in Biology</h1>
              <p><span className="date">2010-2014</span> &nbsp; University of California, Santa Cruz</p>
              <p>Minor in Chemistry</p>
            </div>
          </div>
        </div>
        <br /><br />
        <br /><br />
        <br /><br />

        <div>
          <h4>Posters/Presentations</h4>
          <p></p>
          <div className="row">
            <div className="experience-left">
              <img src="icons/poster.png" className="icon"></img>
            </div>
            <div className="experience-right">
              <p><a href="http://www.neurology.org/content/86/16_Supplement/P5.191">Dissociations in Socioemotional Test Performance Predict Neurodegeneration in Intrinsic Connectivity Networks</a></p>
              <p><Link to="poster">poster</Link>: AAN 2016</p>
            </div>
          </div>
          <br /><br />
          <br /><br />

          <div className="row">
            <div className="experience-left">
              <img src="icons/presentation.png" className="icon"></img>
            </div>
            <div className="experience-right">
              <p>PP2A-Rts1: Master Regulator of Nutrient-Modulated Cell Size Control in <em>S. cerevisiae</em></p>
              <p>presentation: Kellogg Lab Undergraduate Researchers Talks 2014</p>
            </div>
          </div>

          {/* ul style={{marginTop:'10px'}}> */}
            {/*<li><a href="http://www.neurology.org/content/86/16_Supplement/P5.191">Dissociations in Socioemotional Test Performance Predict Neurodegeneration in Intrinsic Connectivity Networks</a> <em>(<a href="poster2016.html">poster</a>: AAN 2016)</em></li>*/}
        </div>
        <br /><br />
      </div>
    );
  }
});

module.exports = Experience;
