"use strict";

const React = require('react');
const Link = require('react-router').Link;

const Home = React.createClass({
  render () {
    return (
      <div>
        <div id="elevator_pitch">
          <br />
          <img src="icons/lab.png" className="partial_width partial_width_centered"></img>
            <h2>From Science to Tech</h2>
            <p>
              As a Clinical Research Coordinator in the field of dementia, I was positioned between administrative tasks, technology concepts, and health care. While learning how to use Bash and MatLab for MRI image processing/analysis, I discoverd that the same principles could apply to the rest of my work. I continued to learn Python and SQL to automate as much of our study's procedures as possible, freeing up enough of my time to take on new responsibilites when the senior team leader resigned.
              <br /><br />
              I grew into a role of improving our procedures and data with technology and am most proud of the management system I developed for our research visist summaries (<a href="https://github.com/fonsecapeter/jarvs">Jarvs</a>).
              <br /><br />
              While working on these projects, I realized that my greatest services to the study came through programming. Not only was I making my co-workers lives easier, I was helping our research participants recieve better care. I enjoyed this work more than my other responsibilities and decided that I wanted to do it every day. My goal is to continue learning how I can leverage technology to help others.
              <br /><br />
            </p>
          </div>
          <div>
            <h1>Languages I Work With:</h1>
            <img src="icons/code-logos.png" className="partial_width"></img>
            {/*<ul style={{marginTop:'10px'}}>
              <li>Ruby</li>
              <li>Rails</li>
              <li>SQL</li>
              <li>JavaScript (Node, JQuery, React, Flux)</li>
              <li>Python</li>
              <li>Bash</li>
              <li>HTML/CSS</li>
            </ul>*/}
          </div>
          <div id="work_experience">
            <h4><img src="icons/pdf.png" className="icon"></img>  &nbsp; Work Experience</h4>
          </div>
          <div>
            <h1>Clinical Research Coordinator</h1>
            <p><em>2014 - present</em> &nbsp; UCSF Memory and Aging Center</p>
            <p>Primary Study: Frontotemporal Dementia: Genes, Images and Emotions<br /><br /></p>
            <ul>
              <li>Expanded scope of data requests and presentations using scientific Python, initiating new policies to improve data quality and reduce errors</li>
              <li>Accelerated dictation approval bottleneck by building <a href="https://launchpad.net/jarvs" target="blank">Jarvs</a></li>
              <li>Automated administrative tasks and improved scalability of recruitment</li>
              <li>Coordinated a team to compile a $5M competitive grant renewal application</li>
              <li>Managed metrics, IRB approval, team meetings, and external presentations</li>
              <li>Conducted cognitive tests and ran MRIs</li>
            </ul>
            <br /><br />
            <h1>Undergraduate Researcher</h1>
            <p><em>2013 - 2014</em> &nbsp; UCSC Kellogg Lab</p>
            <p>Primary Focus: Cell Size Control<br /><br /></p>
            <ul>
              <li>Conducted research on enzymatic pathways involving nutrient-mediated cell size control in <em>S. cerevesiase</em></li>
              <li>Discredited a hypothesized back-regulation of PP2A-Rts1 by Pkh1/2</li>
              <li>Formally presented results</li>
              <li>Worked with PCR, Timecourse, and Western Blot protocols</li>
            </ul>
            <br /><br />
            <h1>Volunteer Lab Assistant</h1>
            <p><em>2012 - 2013 Summers</em> &nbsp; Novato Medical Center</p>
            <br />
            <ul>
              <li>Managed medical records and appointments</li>
              <li>Directed incoming patients, calls, and mail</li>
              <li>Sterilized medical equipment</li>
              <li>Conducted urinalysis and RST's</li>
            </ul>
            <br /><br />
            <h1>Technician</h1>
            <p><em>2010 - 2012 Summers</em> &nbsp; Vintage 47 Amplifiers</p>
            <br />
            <ul>
              <li>Doubled fabrication rate of amplifiers from schematics</li>
              <li>Designed logos and components with Adobe Illustrator to grow the brand</li>
            </ul>
          </div>
          <div>
            <h4>Education</h4>
          </div>
          <div>
            <h1><a href="https://www.appacademy.io/" target="blank" >App Academy</a></h1>
            <p><em>May - July 2016</em> &nbsp; San Francisco</p>
            <p>Industry-focused programming course</p>
            <br />
            <h1>Bachelor of Science in Biology</h1>
            <p><em>2010 - 2014</em> &nbsp; University of California, Santa Cruz</p>
            <p>Minor in Chemistry</p>
          </div>
          <div>
            <h4>Posters/Presentations</h4>
            <p></p>
            <ul style={{marginTop:'10px'}}>
              {/*<li><a href="http://www.neurology.org/content/86/16_Supplement/P5.191">Dissociations in Socioemotional Test Performance Predict Neurodegeneration in Intrinsic Connectivity Networks</a> <em>(<a href="poster2016.html">poster</a>: AAN 2016)</em></li>*/}
              <li><a href="http://www.neurology.org/content/86/16_Supplement/P5.191">Dissociations in Socioemotional Test Performance Predict Neurodegeneration in Intrinsic Connectivity Networks</a> <em>(<Link to="poster">poster</Link>: AAN 2016)</em></li>
              <li>PP2A-Rts1: Master Regulator of Nutrient-Modulated Cell Size Control in <em>S. cerevisiae</em> <em>(presentation: Kellogg Lab Undergraduate Researchers Talks 2014)</em></li>
            </ul>
          </div>
      </div>
    );
  }
});

module.exports = Home;
