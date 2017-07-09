"use strict";

const React = require('react');

const Contact = React.createClass ({
  initMap () {
    // becomeadinosour snazzymap https://snazzymaps.com/style/74/becomeadinosaur
    const geocoder = new google.maps.Geocoder();
    const mapDiv = document.getElementById('map');
    const map = new google.maps.Map(mapDiv, {
      center: {lat: 37.7789680, lng: -122.424572},
      zoom: 12,
      styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"},{"color":"#efebe2"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#efebe2"}]},{"featureType":"poi","elementType":"all","stylers":[{"color":"#efebe2"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"color":"#efebe2"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"color":"#efebe2"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"color":"#dfdcd5"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"color":"#dfdcd5"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"color":"#bad294"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"color":"#efebe2"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"color":"#efebe2"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"color":"#efebe2"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#fbfbfb"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a5d7e0"}]}]
    });

    let icon = {
      path: "m 9.8137942,-30.630352 c 0,5.420009 -4.3937853,9.813794 -9.8137942,9.813794 -5.4200089,0 -9.8137942,-4.393785 -9.8137942,-9.813794 -9e-7,-5.42001 4.393785,-9.813795 9.8137942,-9.813795 5.4200092,0 9.8137951,4.393785 9.8137942,9.813795 z M 0,-48 c -9.8,0 -17.7,7.8 -17.7,17.4 C -17.7,-15.1 0,0 0,0 0,0 17.7,-15.4 17.7,-30.6 17.7,-40.2 9.8,-48 0,-48 Z",
      fillColor: '#4b689b',
      fillOpacity: 1,
      anchor: new google.maps.Point(0,0),
      strokeWeight: 0,
      scale: 0.75
    };

    geocoder.geocode({
      'address': 'Franklin St & California St, San Francisco, CA 94109'
    }, (results) => {
      let marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: map,
        title: "San Francisco",
        icon: icon
      });
    });
  },

  componentDidMount () {
    this.initMap();
  },

  render () {
    return (
      <div>
        <div className="contact-info">
          <div>
            <br />
            <h4>Contact Me</h4>
          </div>
          <h1></h1>
          <p>
            <a href="mailto:peter.nfonseca@gmail.com">peter.nfonseca@gmail.com</a>
          </p>
          <p>San Francisco, CA</p>
        </div>
        <br/><br />
        <div id="map" className="contact-map" style={{overflow:"hidden", height:"360px", width:"426px"}}></div>
        <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnDvU2SC_NgC7XymGmvT03_oNPIl1SsC4&callback=initMap">
        </script>
        <br /><br />
      </div>
    );
  }
});

module.exports = Contact;
