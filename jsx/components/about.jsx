"use strict";

const React = require('react');
const Link = require('react-router').Link;

const About = React.createClass({
  getInitialState () {
    return ({
      aboutDropClass: 'arrow drop-down',
      aboutExpandClass: 'hidden'
    })
  },

  expand () {
    this.setState({
      aboutDropClass: 'arrow pull-up',
      aboutExpandClass: ''
    })
  },

  hide () {
    this.setState({
      aboutDropClass: 'arrow drop-down',
      aboutExpandClass: 'hidden'
    })
  },

  toggleDrop () {
    if (this.state.aboutDropClass === 'arrow drop-down') {
      this.expand();
    } else {
      this.hide();
    }
  },

  render () {
    return (
      <div className="about">
        <div>
          <div>
            <br />
            <h2>About Me</h2>
          </div>
          <div className="about-elevator-pitch">
            <h3 className="about-elevator-pitch-title" onClick={ this.toggleDrop }>
              From Science to Tech
              &nbsp;
              <img className={ this.state.aboutDropClass } src='public/img/icons/arrow.svg'></img>
            </h3>
            <div className={ this.state.aboutExpandClass }>
              {/* <p className="about-elevator-pitch-paragraph">While working in clinical research, my time was split between administrative tasks, technology concepts, science, and health care. While learning how to use Bash and MatLab for MRI image processing/analysis, I discoverd that the same principles could apply to the rest of my work. I continued to learn Python and SQL to automate as much of the study's procedures as possible, freeing up enough of my time to take on new responsibilites when the senior team leader resigned.</p>
              <p className="about-elevator-pitch-paragraph">I grew into a role of improving our procedures and data with technology and am most proud of the automated reminders/metrics system I developed for our research visit summaries. While working on these projects, I realized that my greatest services to the study came through programming. Not only was I making my co-workers lives easier, I was helping our research participants recieve better care.</p>
              <p className="about-elevator-pitch-paragraph">I also enjoyed this work more than my other responsibilities. It kept me working early in the morning and late at night, and I couldn't help myself from finishing a new project. I decided that I wanted to do it every day and my goal is to continue learning how I can leverage technology to help others.</p> */}
              <p className="about-elevator-pitch-paragraph">I'm a researcher-turned-software-engineer based in San Francisco. I love all things computer science and biology, and I'm always looking for new ways to help people through technology.</p>
            </div>
          </div>
          <div className="about-code-list">
            <h3 className="about-code-list-title">Languages I Work With</h3>
            <div>
              <div className="about-code-list-item">
                <div className="about-code-list-item-icon">
                  <img src="public/img/icons/code/python.png" className="about-code-list-item-icon-image" />
                </div>
                Python (<a href="https://www.djangoproject.com/" target="_blank">Django</a>)
              </div>
              <div className="about-code-list-item">
                <div className="about-code-list-item-icon">
                  <img src="public/img/icons/code/js.png" className="about-code-list-item-icon-image" />
                </div>
                JavaScript (<a href="https://facebook.github.io/react/" target="_blank">React</a>,&nbsp;<a href="https://jasmine.github.io/" target="_blank">Jasmine</a>,&nbsp;<a href="https://facebook.github.io/flux/" target="_blank">Flux</a>,&nbsp;<a href="https://nodejs.org/en/" target="_blank">Node</a>)
              </div>
              <div className="about-code-list-item">
                <div className="about-code-list-item-icon">
                  <img src="public/img/icons/code/ruby.png" className="about-code-list-item-icon-image" />
                </div>
                Ruby (<a href="http://rubyonrails.org/" target="_blank">Rails</a>,&nbsp;<a href="http://rspec.info/" target="_blank">Rspec</a>)
              </div>
              <div className="about-code-list-item">
                <div className="about-code-list-item-icon">
                  <img src="public/img/icons/code/sql.png" className="about-code-list-item-icon-image" />
                </div>
                SQL
              </div>
              <div className="about-code-list-item">
                <div className="about-code-list-item-icon">
                  <img src="public/img/icons/code/bash.png" className="about-code-list-item-icon-image" />
                </div>
                Bash
              </div>
              <div className="about-code-list-item">
                <div className="about-code-list-item-icon">
                  <img src="public/img/icons/code/matlab.png" className="about-code-list-item-icon-image" />
                </div>
                Matlab
              </div>
              <div className="about-code-list-item">
                <div className="about-code-list-item-icon">
                  <img src="public/img/icons/code/html.png" className="about-code-list-item-icon-image" />
                </div>
                HTML / CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
