"use strict";

const React = require('react');
const Link = require('react-router').Link;

const CodeListItem = React.createClass({
  render () {
    return (
      <div>
        <div className="row">
          <div className="code-icon-container">
            <img src="{ this.props.img_src }" className="code-icon"></img>
          </div>
            <p>{ this.props.language }</p>
            {
              this.props.frameworks.map( framework => {
                return (
                  <a href="{ framework.href }" target="_blank">{ framework.name }</a>
                );
              })
            }
          <div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CodeListItem;
