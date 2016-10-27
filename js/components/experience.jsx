"use strict";

const React = require('react');
const Link = require('react-router').Link;

const Home = React.createClass({
  render () {
    return (
      <div>
        <br />
        <div id="work_experience">
          {/* <h4><a href="resume/PeterFonsecaResume.pdf" target="blank"><img src="icons/pdf.png" className="icon"></img></a> &nbsp; Work Experience</h4> */}
          <h4><a className="code v-super" href="resume/PeterFonsecaResume.pdf" target="blank">[PDF]</a> &nbsp; Work Experience</h4>
        </div>
        <div>
          <div className="experience-entry">
            <div className="row">
              <div className="experience-left">
                <img src="icons/dna.png" className="icon"></img>
              </div>
              <div className="experience-right">
                <h1>Software Engineer</h1>
                <p><span className="date">2016-Present</span> &nbsp; <a href="https://www.23andme.com/" target="blank">23andMe</a></p>
              </div>
              <br />
            </div>
          </div>

          <div className="experience-entry">
            <div className="row">
              <div className="experience-left">
                <img src="icons/brain.png" className="icon"></img>
              </div>
              <div className="experience-right">
                <h1>Clinical Research Coordinator</h1>
                <p><span className="date">2014-2016</span> &nbsp; <a href="http://memory.ucsf.edu/" target="blank">UCSF Memory and Aging Center</a></p>
                <p>Primary Study: Frontotemporal Dementia: Genes, Images and Emotions<br /><br /></p>
              </div>
              <br />
            </div>
            <div className="row">
              <ul className="experience-bullets">
                <li>Expanded scope of data requests and presentations using scientific Python, initiating new policies to improve data quality and reduce errors</li>
                <li>Accelerated dictation approval bottleneck by building <a href="https://launchpad.net/jarvs" target="blank">Jarvs</a></li>
                <li>Automated administrative tasks and improved scalability of recruitment</li>
                <li>Coordinated a team to compile a $5M competitive grant renewal application</li>
                <li>Managed metrics, IRB approval, team meetings, and external presentations</li>
                <li>Conducted cognitive tests and ran MRIs</li>
              </ul>
            </div>
          </div>

          <div className="experience-entry">
            <div className="row">
              <div className="experience-left">
                <img src="icons/microscope.png" className="icon"></img>
              </div>
              <div className="experience-right">
                <h1>Undergraduate Researcher</h1>
                <p><span className="date">2013-2014</span> &nbsp; <a href="http://www.kellogglab.com/" target="blank">UCSC Kellogg Lab</a></p>
                <p>Primary Focus: Cell Size Control<br /><br /></p>
              </div>
              <br />
            </div>
            <div className="row">
              <ul className="experience-bullets">
                <li>Conducted research on enzymatic pathways involving nutrient-mediated cell size control in <em>S. cerevesiase</em></li>
                <li>Discredited a hypothesized back-regulation of PP2A-Rts1 by Pkh1/2</li>
                <li>Formally presented results</li>
                <li>Worked with PCR, Timecourse, and Western Blot protocols</li>
              </ul>
            </div>
          </div>

          <div className="experience-entry">
            <div className="row">
              <div className="experience-left">
                <img src="icons/stethoscope.png" className="icon"></img>
              </div>
              <div className="experience-right">
                <h1>Volunteer Lab Assistant</h1>
                <p><span className="date">2012-2013 Summers</span> &nbsp; <a href="http://doctor.webmd.com/practice/novato-medical-center-3fd2a3c8-4703-e211-a42b-001f29e3eb44-overview" target="blank">Novato Medical Center</a></p>
              </div>
              <br /><br />
            </div>
            <div className="row">
              <ul className="experience-bullets">
                <li>Managed medical records and appointments</li>
                <li>Directed incoming patients, calls, and mail</li>
                <li>Sterilized medical equipment</li>
                <li>Conducted urinalysis and RST's</li>
              </ul>
            </div>
          </div>

          <div className="experience-entry">
            <div className="row">
              <div className="experience-left">
                <img src="icons/tube.png" className="icon"></img>
              </div>
              <div className="experience-right">
                <h1>Technician</h1>
                <p><span className="date">2010-2012 Summers</span> &nbsp; <a href="http://www.vintage47amps.com/" target="blank">Vintage 47 Amplifiers</a></p>
              </div>
              <br /><br />
            </div>
            <div className="row">
              <ul className="experience-bullets">
                <li>Doubled fabrication rate of amplifiers from schematics</li>
                <li>Designed logos and components with Adobe Illustrator to grow the brand</li>
              </ul>
              <br /><br />
            </div>
          </div>
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

module.exports = Home;
