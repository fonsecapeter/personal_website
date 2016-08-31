"use strict";

const React = require('react');
const Link = require('react-router').Link;

const About = React.createClass({
  render () {
    return (
      <div>
        <div id="elevator_pitch">
          <div>
            <br />
            {/* <img src="icons/workspace.png" className="full_width"></img> */}
            {/* <h4>My Story</h4> */}
          </div>
          {/* <br /> */}
          <div>
            <br />
            {/* <img src="icons/lab.png" className="partial_width partial_width_centered"></img> */}
            <h2>About Title</h2>
            <p>
              Lorem ipsum dolor sit amet, sea in esse salutandi, graeco deleniti dissentias vel id, dicam eirmod eu mel. Quis atomorum reprehendunt ne vel. Ei aliquip hendrerit mel, an tantas eripuit mei. Nec dolores qualisque te, aliquam scaevola est eu. Ad semper praesent ocurreret vis, cu wisi latine theophrastus pro.
              <br /><br />
              Ei detracto perpetua expetenda nam, eum an utroque minimum principes. Eu eum iusto civibus corrumpit, vel at graeco constituam. Ad mei accusata dissentiunt. Mei inimicus omittantur ne.
              <br /><br />
              Nec dicta pertinax no. Ex eum mutat accusam. Has elit mundi posidonium ei, ei omnis ponderum vim, cu tempor lucilius mei. Mel aeterno dignissim democritum ut, ancillae laboramus et sea. Ea dictas numquam impedit nec, facer harum usu et, ut legimus neglegentur eum.
              <br /><br />
            </p>
          </div>
          <div>
            <h1>Maybe a List of Some Things:</h1>
            {/* <img src="icons/code-logos.png" className="partial_width"></img> */}
            <ul className="code-list">
              <li>something here</li>
              <li>another bullet</li>
              <li>more bullets</li>
              <li>and maybe a fourth thing</li>
              <li>or not</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
