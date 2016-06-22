// load jQuery  when dom is loaded
$(document).ready(function(){
	// check url and load content accordingly (if user type #something directly into url)
	// const hash = window.location.hash.substr(1);
	// let $href = $('#nav a').each(function(){
	//   let href = $(this).attr('href');
	//   if(hash === href.substr(0,href.length-5)){
  //     const toLoad = hash + '.html #content';
	// 		$('#left-column').load('./' );
  // }
	// });
	// initialize to #home
	$('#left-column').load('./home.html');

  // when menu item is clicked
  $('#nav a').click(function(event){
		event.preventDefault();

    // load new content
    const toLoad = $(this).attr('href')+' #content';
    // hide old content
    $('#content').hide('fast',loadContent($(this)));
    $('#load').remove();

    // url to show #html file name
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
  });

  function loadContent($anchor){
		$('#left-column').load('./' + $anchor.attr('href'));
  }
});
