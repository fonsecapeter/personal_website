import * as React from 'react';

class CodeListItem extends React.Component<any, any> {
  public render() {
    let frameworks = '';
    if (this.props.language.frameworks.length > 0) {
      frameworks = this.props.language.frameworks.map((framework, idx) => (
        <span key={framework.name}>
          {idx > 0 && ', '}
          <a href={framework.link} target="_blank">
            {framework.name}
          </a>
        </span>
      ));
      // frameworks.unshift('(');
      // frameworks.push(')');
    }

    return (
      <div className="about-code-list-item">
        <div className="about-code-list-item-icon">
          <img
            src={this.props.language.icon}
            className="about-code-list-item-icon-image"
            alt={this.props.language.name}
          />
        </div>
        <div>
          <p>
            <span className="about-code-list-item-name">{this.props.language.name}</span>
            {frameworks !== '' && frameworks}
          </p>
        </div>
      </div>
    );
  }
}

export default CodeListItem;
