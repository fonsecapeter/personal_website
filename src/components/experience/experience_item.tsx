import * as React from 'react';

class ExperienceItem extends React.Component<any, any> {
  state = {
    hidden: false,
    experienceBulletExpandClass: '',
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
      experienceBulletExpandClass: 'experience-item-bullets',
    });
  }

  hide() {
    this.setState({
      hidden: true,
      experienceBulletExpandClass: 'hidden',
    });
  }

  toggleDrop() {
    if (this.props.experience.bullets.length > 0) {
      if (this.state.hidden) {
        this.expand();
      } else {
        this.hide();
      }
    }
  }

  public render() {
    let primary = null;
    if (this.props.experience.primary) {
      primary = <p>{this.props.experience.primary}</p>;
    }

    let action = null;
    let experienceItemClassName = 'experience-item';
    if (this.props.experience.bullets.length > 0) {
      action = this.toggleDrop;
      experienceItemClassName += '-interactive';
    }

    return (
      <div className={experienceItemClassName} onClick={action}>
        <div className="experience-item-content">
          <div className="experience-item-left">
            <img src={this.props.experience.icon} className="experience-item-icon" />
          </div>
          <div className="experience-item-right">
            <h3 className="experience-item-title">{this.props.experience.title}</h3>
            <p>
              <span className="experience-item-date">{this.props.experience.date}</span>
              <span className="experience-item-dot">·</span>
              <a className="experience-item-org" href={this.props.experience.link} target="blank">
                {this.props.experience.org}
              </a>
            </p>
            {primary}
            <div>
              <ul className={this.state.experienceBulletExpandClass}>
                {this.props.experience.bullets.map((bullet, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceItem;
