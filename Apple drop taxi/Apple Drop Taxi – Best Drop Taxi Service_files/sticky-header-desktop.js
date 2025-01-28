(function($) {
    "use strict";

/*---====================---fixed-header---======================---*/
//Update Header Style and Scroll to Top
      function headerStyle() {
		if($('.header_area').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header_area');
			var sticky_header = $('.header_area .sticky_header_main');
			if (windowpos > 100) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
			}
		}
	}
/*==========================================================================
   When document is Scrollig, do
========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
})(jQuery);