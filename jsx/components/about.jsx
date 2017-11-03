const React = require('react');
const CodeListItem = require('./code_list_item');

const About = React.createClass({
  getInitialState() {
    return ({
      aboutDropClass: 'arrow drop-down',
      aboutExpandClass: 'hidden',
    });
  },

  expand() {
    this.setState({
      aboutDropClass: 'arrow pull-up',
      aboutExpandClass: '',
    });
  },

  hide() {
    this.setState({
      aboutDropClass: 'arrow drop-down',
      aboutExpandClass: 'hidden',
    });
  },

  toggleDrop() {
    if (this.state.aboutDropClass === 'arrow drop-down') {
      this.expand();
    } else {
      this.hide();
    }
  },

  render() {
    const languages = [
      {
        name: 'Python',
        icon: 'public/img/icons/code/python.png',
        frameworks: [
          {
            link: 'https://www.djangoproject.com/',
            name: 'Django',
          },
        ],
      },
      {
        name: 'JavaScript',
        icon: 'public/img/icons/code/js.png',
        frameworks: [
          {
            link: 'https://facebook.github.io/react/',
            name: 'React',
          },
          {
            link: 'http://redux.js.org/',
            name: 'Redux',
          },
          {
            link: 'https://mochajs.org/',
            name: 'Mocha',
          },
        ],
      },
      {
        name: 'HTML / CSS',
        icon: 'public/img/icons/code/html.png',
        frameworks: [
          {
            name: 'Sass',
            link: 'http://sass-lang.com/',
          },
        ],
      },
      {
        name: 'Ruby',
        icon: 'public/img/icons/code/ruby.png',
        frameworks: [
          {
            link: 'http://rubyonrails.org/',
            name: 'Rails',
          },
          {
            link: 'http://rspec.info/',
            name: 'RSpec',
          },
        ],
      },
      {
        name: 'SQL',
        icon: 'public/img/icons/code/sql.png',
        frameworks: [],
      },
      {
        name: 'Bash',
        icon: 'public/img/icons/code/bash.png',
        frameworks: [],
      },
      {
        name: 'MatLab',
        icon: 'public/img/icons/code/matlab.png',
        frameworks: [
          {
            name: 'SPM',
            link: 'http://www.fil.ion.ucl.ac.uk/spm/',
          },
        ],
      },
    ];

    return (
      <div className="about">
        <h1 className="about-title">About Me</h1>
        <div className="about-elevator-pitch">
          <h3 className="about-elevator-pitch-title" onClick={this.toggleDrop}>
            From Science to Tech
            &nbsp;
            <img className={this.state.aboutDropClass} src="public/img/icons/arrow.svg" alt="V" />
          </h3>
          <div className={this.state.aboutExpandClass}>
            {/* <p className="about-elevator-pitch-paragraph">While working in clinical research, my time was split between administrative tasks, technology concepts, science, and health care. While learning how to use Bash and MatLab for MRI image processing/analysis, I discoverd that the same principles could apply to the rest of my work. I continued to learn Python and SQL to automate as much of the study's procedures as possible, freeing up enough of my time to take on new responsibilites when the senior team leader resigned.</p>
            <p className="about-elevator-pitch-paragraph">I grew into a role of improving our procedures and data with technology and am most proud of the automated reminders/metrics system I developed for our research visit summaries. While working on these projects, I realized that my greatest services to the study came through programming. Not only was I making my co-workers lives easier, I was helping our research participants recieve better care.</p>
            <p className="about-elevator-pitch-paragraph">I also enjoyed this work more than my other responsibilities. It kept me working early in the morning and late at night, and I couldn't help myself from finishing a new project. I decided that I wanted to do it every day and my goal is to continue learning how I can leverage technology to help others.</p> */}
            <p className="about-elevator-pitch-paragraph">I'm a researcher-turned-software-engineer based in San Francisco. I love all things computer science and biology, and I'm always looking for new ways to help people through technology.</p>
          </div>
        </div>
        <div className="about-code-list">
          <h3 className="about-code-list-title">Languages I Work With</h3>
          <div>
            {
              languages.map(languageItem => {
                return (
                  <CodeListItem language={languageItem} key={languageItem.name} />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
