// imrpoves performance, loading rapidly on scroll, need to consider performance
//this way waits for next screen repaint to run
window.requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function(f) (setTimeout(f, 1000/60))

var honda = document.getElementById('honda')
//dceclare other objects here

function parallax() {
 	var scrolltop = window.pageYOffset // save number of pixels scolled
  honda.style.top = -scrolltop *.2 + 'px' // move honda at 20% of scroll rate
  //move other objects here
}

window.addEventListener('scroll', function(){ // on page scroll
  requestAnimationFrame(parallax) // call parallax () on next available screen paint
}, false)