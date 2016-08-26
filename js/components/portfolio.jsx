"use strict";

const React = require('react');

const Portfolio = React.createClass({
  render () {
    return (
      <div>
        <div>
          <br />
          {/* <img src="icons/workspace.png" className="full_width"></img> */}
          <h4>Coding Projects</h4>
        </div>
        <div>
          <h1>Glia · <a href="https://github.com/fonsecapeter/Glia" target="blank" className="project-link">github</a> · <a href="http://glia-app.herokuapp.com" target="blank" className="project-link">live</a></h1>
          <p><span className="date">2016</span> &nbsp; <a href="https://www.appacademy.io/" target="blank" >App Academy</a></p>
          <p className="code">Ruby Rails JavaScript React<br /><br /></p>
          <img src="https://raw.githubusercontent.com/fonsecapeter/Glia/master/docs/screenshots/glia-question-detail.png" width="526px" />
          <br/><br/>
          <p>Glia is an online support group for caregivers of dementia patients.
          I built Glia with a React-Flux front end and a Rails-PostgreSQL back end.</p>
          <br/>
          <ul>
            <li>Minimized data requests with nested Flux resources to reduce load time</li>
            <li>Leveraged 3rd party libraries to offer modern text-formatting experience, complete with drag-and-drop image uploading</li>
            <li>Incorporated responsive design for mobile users</li>
          </ul>
          <br/><br/>

          <h1>Jarvs · <a href="https://github.com/fonsecapeter/jarvs" target="blank" className="project-link">github</a> · <a href="https://launchpad.net/jarvs" target="blank" className="project-link">launchpad</a></h1>
          <p><span className="date">2016</span> &nbsp; <a href="http://memory.ucsf.edu/" target="blank">UCSF Memory and Aging Center</a></p>
          <p className="code">Python GTK Bash SQLite<br /><br /></p>
          <img src="https://raw.githubusercontent.com/fonsecapeter/jarvs/master/app/design/jarvs_vis.png" width="526px"/>
          <br/><br/>
          <p>Jarvs is an Ubuntu app that I built to help manage research dictations by scraping data out of file-names.
          This app is still in development, but has the minimum functionality necessary and is currently in use.</p>
          <br/>
          <ul>
            <li>Distributed via Ubuntu PPA to increase accessibility for non-technical users</li>
            <li>Delegated intensive file computations to Bash, optimizing for small cloud instances</li>
            <li>Capable of sending weekly emails only to those who have work to do using crontab</li>
            <li>Can visualize data with matplotlib</li>
          </ul>
          <br/><br/>

          <h1>Color Shift · <a href="https://github.com/fonsecapeter/color-shift" target="blank" className="project-link">github</a> · <a href="http://peterfonseca.gq/color-shift" target="blank" className="project-link">live</a></h1>
          <p><span className="date">2016</span> &nbsp; <a href="https://www.appacademy.io/" target="blank" >App Academy</a></p>
          <p className="code">JavaScript<br /><br /></p>
          <img src="https://raw.githubusercontent.com/fonsecapeter/color-shift/master/docs/color-shift-screenshot.png" width="526px"/>
          <br/><br/>
          <p>Color Shift is a JavaScript canvas game that makes learning about a neurologic concept fun.</p>
          <br/>
          <ul>
            <li>Simulated collision and drag physics with vector computations</li>
            <li>Modified DOM with game state logic for start/end gating</li>
          </ul>
          <br/><br/>

          <h1>Ruby Chess · <a href="https://github.com/fonsecapeter/ruby_chess" target="blank" className="project-link">github</a></h1>
          <p><span className="date">2016</span> &nbsp; <a href="https://www.appacademy.io/" target="blank" >App Academy</a></p>
          <p className="code">Ruby<br /><br /></p>
          <img src="https://raw.githubusercontent.com/fonsecapeter/ruby_chess/master/media/pawn_promotion.gif"/>
          <br/><br/>
          <p>Ruby chess is a command line game built for 2 players.</p>
          <br/>
          <ul>
            <li>Computer player that will intelligently pick moves</li>
            <li>Unit and integration tested with RSpec</li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;
