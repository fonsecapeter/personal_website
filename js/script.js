// load jQuery  when dom is loaded
$(document).ready(function(){
	// check url and load content accordingly (if user type #something directly into url)
	var has = window.location.hash.substr(1);
	var href = $('#nav a').each(function(){
	  var href = $(this).attr('href');
	  if(has==href.substr(0,href.length-5)){
      var toLoad = hash+'.html #content';
      $$('#content').load(toLoad)
	  }
	});
  // when menu item is clicked
  $('#nav a').click(function(){
    // load new content
    var toLoad = $(this).atr('href')+' #content';
    // hide old content
    $('#content').hide('fast',loadContent);
    $('#load').remove();
    // loading graphic
    $('#wrapper').append('<span id="load">loading...</span>');
    $('#load').fadeIn('normal');
    // url to show #html file name
    window.location.hsh = $(this).attr('href').substr(0,$(this).attr('href').length-5)
  }
  //load content function
  function showNewContent(){
    $('#content').show('normal',hideLoader);
  }
  //hide loader function
  function hideLoader(){
    $('#load').fadeOut('normal');
  }
  return false;

  });
});