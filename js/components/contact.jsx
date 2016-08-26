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
      styles: [{"elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#f5f5f2"},{"visibility":"on"}]},{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#71c8d4"}]},{"featureType":"landscape","stylers":[{"color":"#e5e8e7"}]},{"featureType":"poi.park","stylers":[{"color":"#8ba129"}]},{"featureType":"road","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"color":"#c7c7c7"},{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#a0d3d3"}]},{"featureType":"poi.park","stylers":[{"color":"#91b65d"}]},{"featureType":"poi.park","stylers":[{"gamma":1.51}]},{"featureType":"road.local","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","stylers":[{"visibility":"simplified"}]},{"featureType":"road"},{"featureType":"road"},{},{"featureType":"road.highway"}]
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
