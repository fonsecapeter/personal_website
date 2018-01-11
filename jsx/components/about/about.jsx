const React = require('react');
const CodeListItem = require('./code_list_item');
const content = require('./content');

const About = React.createClass({
  getInitialState() {
    return ({
      hidden: false,
      aboutExpandClass: '',
    });
  },

  expand() {
    this.setState({
      hidden: false,
      aboutExpandClass: '',
    });
  },

  hide() {
    this.setState({
      hidden: true,
      aboutExpandClass: 'hidden',
    });
  },

  toggleDrop() {
    if (this.state.hidden) {
      this.expand();
    } else {
      this.hide();
    }
  },

  render() {
    return (
      <div className="about" onClick={this.toggleDrop}>
        <h1 className="about-title">About Me</h1>
        <div className="about-elevator-pitch">
          <h3 className="about-elevator-pitch-title">
            From Science to Tech
            &nbsp;
          </h3>
          <div className={this.state.aboutExpandClass}>
            <p className="about-elevator-pitch-paragraph">I'm a researcher-turned-software-engineer based in San Francisco. I love all things computer science and biology, and I'm always looking for new ways to help people through technology.</p>
          </div>
        </div>
        <div className="about-code-list">
          <h3 className="about-code-list-title">Languages I Work With</h3>
          <div>
            {
              content.languages.map(languageItem => {
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
