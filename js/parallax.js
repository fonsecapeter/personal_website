// imrpoves performance, loading rapidly on scroll, need to consider performance
//this way waits for next screen repaint to run
window.requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function(f){setTimeout(f, 1000/60)}

// return true if user on mobile, false if not
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

var laptop = document.getElementById('laptop')
var science = document.getElementById('science')
var design = document.getElementById('design')
var jarvs = document.getElementById('jarvs')
//declare other objects here

if ( detectmob==false ) {
	var jarvs_top = 1000
}
else {
	var jarvs_top = 500
}
function parallax() {
  var scrolltop = window.pageYOffset // save number of pixels scolled

  laptop.style.top = -scrolltop * .5 + 'px' // move laptop at 50% of scroll rate
  science.style.top = -scrolltop * .4 + 'px' // move science at 40% of scroll rate
  design.style.top = -scrolltop * .3 + 'px' // move design at 30% of scroll rate
  jarvs.style.top = -scrolltop * .5 + 1000 + 'px' // move design at 50% of scroll rate
}

window.addEventListener('scroll', function(){ // on page scroll
  requestAnimationFrame(parallax) // call parallax () on next available screen paint
}, false)