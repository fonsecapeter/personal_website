// imrpoves performance, loading rapidly on scroll, need to consider performance
//this way waits for next screen repaint to run
window.requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function(f){setTimeout(f, 1000/60)}

var laptop = document.getElementById('laptop')
var science = document.getElementById('science')
var design = document.getElementById('design')
//declare other objects here

function parallax() {
  var scrolltop = window.pageYOffset // save number of pixels scolled

  laptop.style.top = -scrolltop * .5 + 'px' // move laptop at 50% of scroll rate
  science.style.top = -scrolltop * .4 + 'px' // move science at 40% of scroll rate
  design.style.top = -scrolltop * .3 + 'px' // move design at 30% of scroll rate
}

window.addEventListener('scroll', function(){ // on page scroll
  requestAnimationFrame(parallax) // call parallax () on next available screen paint
}, false)