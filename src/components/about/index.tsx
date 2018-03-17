import * as React from 'react';
import CodeListItem from './code_list_item';
import languages from '../../content/languages';

class About extends React.Component<any, any> {
  state = {
    hidden: false,
    aboutExpandClass: '',
  };

  constructor(props) {
    super(props);
    this.expand = this.expand.bind(this);
    this.hide = this.hide.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
  }

  expand() {
    this.setState({
      hidden: false,
      aboutExpandClass: '',
    });
  }

  hide() {
    this.setState({
      hidden: true,
      aboutExpandClass: 'hidden',
    });
  }

  toggleDrop() {
    if (this.state.hidden) {
      this.expand();
    } else {
      this.hide();
    }
  }

  public render() {
    return (
      <div className="about" onClick={this.toggleDrop}>
        <h1 className="about-title">About Me</h1>
        <div className="about-elevator-pitch">
          <h3 className="about-elevator-pitch-title">From Science to Tech &nbsp;</h3>
          <div className={this.state.aboutExpandClass}>
            <p className="about-elevator-pitch-paragraph">
              I'm a researcher-turned-software-engineer based in San Francisco. I love all things
              computer science and biology, and I'm always looking for new ways to help people
              through technology.
            </p>
          </div>
        </div>
        <div className="about-code-list">
          <h3 className="about-code-list-title">Languages I Work With</h3>
          <div>
            {languages.map(languageItem => (
              <CodeListItem language={languageItem} key={languageItem.name} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
