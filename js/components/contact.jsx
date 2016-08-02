"use strict";

const React = require('react');

const Contact = React.createClass ({
  initMap () {
    const geocoder = new google.maps.Geocoder();
    const mapDiv = document.getElementById('map');
    const map = new google.maps.Map(mapDiv, {
      center: {lat: 37.7789680, lng: -122.424572},
      zoom: 12
    });
    geocoder.geocode({
      'address': '1817 California St, San Francisco, CA 94109'
    }, (results) => {
      let marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: map,
        title: "San Francisco"
      })
    })
  },

  componentDidMount () {
    this.initMap();
  },

  render () {
    return (
      <div id="contact">
        <h1>Contact Me</h1>
        <p><a className="contact" href="mailto:peter.nfonseca@gmail.com">peter.nfonseca@gmail.com</a></p>
        <p><a className="contact" href="tel:17078892431">(707) 889-2431</a></p>
        <p>1817 California St</p>
        <p>San Francisco, CA 94109</p>
        <br/>
        <div id="map" style={{overflow:"hidden", height:"360px", width:"426px"}}></div>
        <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnDvU2SC_NgC7XymGmvT03_oNPIl1SsC4&callback=initMap">
        </script>
      </div>
    );
  }
});

module.exports = Contact;
