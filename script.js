window.onload = function() {
  var hour = new Date().getHours();
  getGreeting(hour);
}

getGreeting = function(hour) {
  var greeting_text = document.getElementById("greeting")
  if( hour < 11 && hour > 4 ) {
    greeting_text.innerHTML = "Good monrning!";
  }
  else if( hour < 3 && hour > 20 ) {
    greeting_text.innerHTML = "Good evening!";
  }
  else {
    greeting_text.innerHTML = "Hello!";
  }
}