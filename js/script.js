// load jQuery  when dom is loaded
$(document).ready(function(){
	// check url and load content accordingly (if user type #something directly into url)
	const hash = window.location.hash.substr(1);
	let $href = $('#nav a').each(function(){
	  let href = $(this).attr('href');
	  if(hash === href.substr(0,href.length-5)){
      const toLoad = hash + '.html #content';
      $('#content').load(toLoad);
	  }
	});

  // when menu item is clicked
  $('#nav a').click(function(event){
		event.preventDefault();

    // load new content
    const toLoad = $(this).attr('href')+' #content';
    // hide old content
    $('#content').hide('fast',loadContent($(this)));
    $('#load').remove();
    // loading graphic
    // $('#wrapper').append('<span id="load">loading...</span>');
    // $('#load').fadeIn('normal');
    // url to show #html file name
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
  });
  //load content function
  // function showNewContent(){
  function loadContent($anchor){
		console.log($anchor.attr('href'));
		$('#main-content').load('./' + $anchor.attr('href'));
    // $('#content').show('normal',hideLoader);
  }
  //hide loader function
  // function hideLoader(){
  //   $('#load').fadeOut('normal');
  // }
  return false;

  // });
});
