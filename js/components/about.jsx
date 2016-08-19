"use strict";

const React = require('react');
const Link = require('react-router').Link;

const About = React.createClass({
  render () {
    return (
      <div>
        <div id="elevator_pitch">
          <br />
          <div>
            <img src="icons/lab.png" className="partial_width partial_width_centered"></img>
            <h2>From Science to Tech</h2>
            <p>
              As a Clinical Research Coordinator in the field of dementia, I was positioned between administrative tasks, technical concepts, and health care. While teaching myself bash and matlab for MRI image processing/analysis, I discoverd that the same principles could apply to my own administrative tasks. I continued to learn Python and SQL to automate as much of our study's procedures as possible, freeing up enough of my time to take on new responsibilites when the senior team leader resigned.
              <br /><br />
              I grew into a role of improving our procedures with technology and am most proud of the management system I developed for our research visist summaries (see <a href="https://github.com/fonsecapeter/jarvs">Jarvs</a> in my portfolio for more information). Jarvs continues to help the study and even ended up being adopeted by another large study in the center.
              <br /><br />
              While working on these projects, I realized that I my greatest services to the study came through programming. Not only did I make my co-workers lives easier, I was helping our research participants recieve better care. I enjoyed this work more than my other responsibilities and decided that I wanted to do it every day. My goal is to continue learning how I can leverage technology to help others.
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
        </div>
      </div>
    );
  }
});

module.exports = About;
