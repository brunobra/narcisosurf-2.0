/********************
		HEADER
*********************/

$(window).scroll(function() {
	if ($(document).scrollTop() > 0 ) {
		$('header').addClass("scroll-header");
		$('.menu').addClass("scroll-menu");
		$('.carrousel').addClass("remove-margin");
	} else {
		$('header').removeClass("scroll-header");
		$('.menu').removeClass("scroll-menu");
		$('.carrousel').removeClass("remove-margin");
	}
});

/********************
		MENU
*********************/

$('.menu-anchor').on('click touchstart', function(e){
	$('html, body').animate({scrollTop: 0}, 500);
	$('html').toggleClass('menu-active');
  	e.preventDefault();
});

$('.menu menu ul li a').on('click touchstart', function(e){
	$('html').removeClass('menu-active');
});

/********************
		MAPS
*********************/

$('#map').addClass('scrolloff'); // set the pointer events to none on doc ready

$('.place').on('click', function () {
    $('#map').removeClass('scrolloff'); // set the pointer events true on click
});

// you want to disable pointer events when the mouse leave the canvas area;

$("#map").mouseleave(function () {
    $('#map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
});

/********************
	  GALLERY
*********************/


var openPhotoSwipe = function() {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [];
	var totalPhotos = 21;
	for (i = 1; i <= totalPhotos ; i ++) {
		photo = {
			src: 'static/img/gallery/' + i + '.jpg',
			w: 800,
			h: 600
		}
		items.push(photo);
	};

	// define options (if needed)
	var options = {
	    // optionName: 'option value'
	    // for example:
	    index: 0 // start at first slide
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

$('#gallery').on('click', function() {
	openPhotoSwipe();
})