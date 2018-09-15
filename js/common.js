$(function() {

	$('.service-item-img').magnificPopup({type:'inline', showCloseBtn: true});


// Меню на маленьких экранах (начало)
	$('.toggle-menu').click(function() {
		$(this).toggleClass('on');
		$('.main-menu').slideToggle();
	});
// Меню на маленьких экранах (конец)


		//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});
