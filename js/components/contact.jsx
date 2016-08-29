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
        <div>
          {/* <br /> */}
          {/* <img src="icons/workspace.png" className="full_width"></img> */}
          <h1>Contact Me</h1>
        </div>
        {/* <h1>Contact Me</h1> */}
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
