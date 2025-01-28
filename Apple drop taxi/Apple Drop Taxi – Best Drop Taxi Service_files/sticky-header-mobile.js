(function($) {
    "use strict";

/*---====================---fixed-header---======================---*/
  
  	//Update Header Style and Scroll to Top
      function headerStyle_mobile() {
		if($('.mobile_header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.mobile_header');
			var sticky_header = $('.mobile_header .bottom_content ');
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
    headerStyle_mobile();
});
})(jQuery);