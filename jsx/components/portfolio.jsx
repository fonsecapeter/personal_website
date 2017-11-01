"use strict";

const React = require('react');
const PortfolioItem = require('./portfolio_item');

const Portfolio = React.createClass({
  render () {
    const projects = [

      {
        name: 'Color Shift',
        links: [
          {
            text: 'github',
            url: 'https://github.com/fonsecapeter/color-shift'
          },
          {
            text: 'live',
            url: 'http://peterfonseca.gq/color-shift'
          }
        ],
        date: '2016',
        org: {
          name: 'App Academy',
          url: 'https://www.appacademy.io/'
        },
        keywords: 'JavasScript',
        icon: {
          src: 'https://raw.githubusercontent.com/fonsecapeter/color-shift/master/docs/color-shift-screenshot.png'
        },
        description: 'Color Shift is a JavaScript canvas game that makes learning about a neurologic concept fun.',
        bullets: [
          'Simulated collision and drag physics with vector computations',
          'Modified DOM with game state logic for start/end gating'
        ]
      },

      {
        name: 'Ruby Chess',
        links: [
          {
            text: 'github',
            url: 'https://github.com/fonsecapeter/ruby_chess'
          }
        ],
        date: '2016',
        org: {
          name: 'App Academy',
          url: 'https://www.appacademy.io/'
        },
        keywords: 'Ruby',
        icon: {
          src: 'https://raw.githubusercontent.com/fonsecapeter/ruby_chess/master/media/pawn_promotion.gif',
          small: true
        },
        description: 'Ruby chess is a command line game built for 0, 1, or 2 players.',
        bullets: [
          'Computer player that will intelligently pick moves',
          'Unit and integration tested with RSpec'
        ]
      },

      {
        name: 'Glia',
        links: [
          {
            text: 'github',
            url: 'https://github.com/fonsecapeter/Glia'
          },
          {
            text: 'live',
            url: 'https://glia-app.herokuapp.com'
          }
        ],
        date: '2016',
        org: {
          name: 'App Academy',
          url: 'https://www.appacademy.io'
        },
        keywords: 'Ruby Rails JavaScript React',
        icon: {
          src: 'https://raw.githubusercontent.com/fonsecapeter/Glia/master/docs/screenshots/glia-question-detail.png'
        },
        description: 'Glia is an online support group for caregivers of dementia patients. I built Glia with a React-Flux front end and a Rails-PostgreSQL back end.',
        bullets: [
          'Minimized data requests with nested Flux resources to reduce load time',
          'Leveraged 3rd party libraries to offer modern text-formatting experience, complete with drag-and-drop image uploading',
          'Incorporated responsive design for mobile users'
        ]
      },
    ];

    return (
      <div>
        <div>
          <br />
          <h4>Coding Projects</h4>
        </div>
        <div>
          {
            projects.map( (portfolioItem, idx) => {
              return (
                <PortfolioItem portfolio={ portfolioItem } key={ idx } />
              )
            })
          }
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;
