"use strict";

const React = require('react');

const Portfolio = React.createClass({
  render () {
    return (
      <div>
        <div>
          <h4>Coding Projects</h4>
        </div>
        <div>
          <h1>Jarvs</h1>
          <p><em>2016</em> &nbsp; UCSF Memory and Aging Center</p>
          <p>Python, Bash, SQLite<br /><br /></p>
          <br/>
          <img src="https://raw.githubusercontent.com/fonsecapeter/jarvs/master/app/design/jarvs_attends.png" width="526px"/>
          <p>Jarvs is an ubuntu app for maintaining and managing research visit summaries, designed with large-scale clinical research in mind. This app iimplements modified versions of the RVS scripts below and was a necessary step in making them available to those who don't code or use the terminal. Jarvs also holds all the different scripts together and links them to a scalable, dynamic database so that different studies of different size can still use the same app. Check out the <a href="https://github.com/fonsecapeter/jarvs" target="blank" className="contact">github repository</a> for more information.</p>
          <br/>
          <p>This app is still in development, but has the minimum functionality necessary and is currently live. Features include:</p>
          <br/>
          <ul>
            <li>Python-Gtk+ front end</li>
            <li>Python-SQLite frameword</li>
            <li>Bash toolkit</li>
          </ul>
          <br/><br/>
          <h1>Ruby Chess</h1>
          <p><em>2016</em> &nbsp; AppAcademy</p>
          <p>Ruby<br /><br /></p>
          <br/>
          <img src="https://raw.githubusercontent.com/fonsecapeter/ruby_chess/master/media/sc.png"/>
          <p>Ruby chess is a command line game built for 2 players. Check out the <a href="https://github.com/fonsecapeter/ruby_chess" target="blank" className="contact">github repository</a> for more information.</p>
          <br/>
          <ul>
            <li>Unit and integration tests</li>
            <li>Polymorphic classes</li>
          </ul>
          <br/><br/>
          <h1>RVS Scripts</h1>
          <p><em>2015 - 2016</em> &nbsp; UCSF Memory and Aging Center</p>
          <p>Bash<br /><br /></p>
          <img src="https://raw.githubusercontent.com/fonsecapeter/jarvs/master/app/rvs/sample_docs/figure_1.png" width="526px"/>
          <p>These scripts opened a door to automated management of research visit summaries (an RVS is a detailed note of findings and recommendations from a participant's visit).</p>
          <ul>
            <li>Targeted group emails</li>
            <li>Visualization of data from file-names</li>
          </ul>
          <br/><br/>
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;
