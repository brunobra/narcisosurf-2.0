/********************
		HEADER
*********************/

$(window).scroll(function() {
	if ($(document).scrollTop() > 0 ) {
		$('header').addClass("scroll-header");
		$('.carrousel').addClass("remove-margin");
	} else {
		$('header').removeClass("scroll-header");
		$('.carrousel').removeClass("remove-margin");
	}
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

