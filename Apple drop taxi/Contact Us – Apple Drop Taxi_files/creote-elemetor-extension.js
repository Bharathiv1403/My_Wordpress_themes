(function($) {
    "use strict";


    /*--------------faqsall------------------*/
    function creote_faqsall() {
        var accordion = {
            init: function() {
                $('dd').filter(':nth-child(n+1)').addClass('hide');
                $('dt').on('click', this.show);
            },
            show: function() {
                var $this = $(this),
                    $ddToShow = $this.next(),
                    $ddToClose = $this.next().siblings('dd');
                $this.addClass('active');
                $this.siblings('dt').removeClass('active');
                $ddToShow.slideDown(200);
                accordion.hide($ddToClose);
            },
            hide: function(elem) {
                elem.slideUp(200);
            }
        };
        accordion.init();
    }

    
function creote_search_popup() {

 if($('#search-popup').length){
		
    //Show Popup
    $('.search-toggler').on('click', function() {
        $('#search-popup').addClass('popup-visible');
    });
    $(document).keydown(function(e){
        if(e.keyCode === 27) {
            $('#search-popup').removeClass('popup-visible');
        }
    });
    //Hide Popup
    $('.close-search,.search-popup .overlay-layer').on('click', function() {
        $('#search-popup').removeClass('popup-visible');
    });
}
}

function creote_modal_popup () {
    //Search Popup
    if($('.modal_popup').length){
           
       //Show Popup
       $('.contact-toggler').on('click', function() {
           $('.modal_popup').addClass('contact-popup-visible');
       });
       $(document).keydown(function(e){
           if(e.keyCode === 27) {
               $('.modal_popup').removeClass('contact-popup-visible');
           }
       });
       //Hide Popup
       $('.close-modal ').on('click', function() {
           $('.modal_popup').removeClass('contact-popup-visible');
       });
   }
   }


 
  function creote_theme_owl_carousel() {
    /*-----------------------------
      swiper__center
    -----------------------------*/
    if ($('.theme_carousel').length) {
        $(".theme_carousel").each(function (index) {
        var $owlAttr = {

            animateOut: 'slideOut',
            animateIn: 'slideIn',

        },
        $extraAttr = $(this).data("options");
        $.extend($owlAttr, $extraAttr);
        $(this).owlCarousel($owlAttr);
        
    });
}
 
}




/*-----------------------------
     light box
-----------------------------*/
function creote_light_box() {
if ($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        helpers: {
            media: {}
        }
    });
}
}

function creote_one_page_active() {
$(".float_menu_box li").click(function () {
    // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
    if ($(this).hasClass("active")) {
      $(".floating_menu_text").removeClass("active");
    }
    // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
    else {
      $(".floating_menu_text").removeClass("active");
      $(this).addClass("active");
    }
  });
  $(".floating_menu_box .close").click(function () {
 
      $(".floating_menu_box").addClass("remove_floating");
  
  });
}

    /*-----------------------------
      swiper_ center items
    -----------------------------*/
function creote_swipe_center() {

    var swiper = new Swiper('.swiper__center', {
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        grabCursor: true,
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true 
        },
        breakpoints: {
            240: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            540: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });
} 

    /*-----------------------------
      swiper_ center items
    -----------------------------*/
    function creote_swipe_center_three() {

        var swiper = new Swiper('.swiper__center_three', {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 30,
            grabCursor: true,
            paginationClickable: true,
          
            pagination: {
                el: ".swiper-pagination",
                clickable: true 
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                540: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }
        });
    } 

    function creote_swipe_center_three_tesimionail() {

        var swiper = new Swiper('.swiper__center_three_test', {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            grabCursor: true,
            paginationClickable: true,
            navigation: {
                nextEl: '.next-single-one_three',
                prevEl: '.prev-single-one_three',
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true 
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                540: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }
        });
    } 
    
    function creote_swipe_center_two_tesimionail() {

        var swiper = new Swiper('.swiper__center_two_test', {
            slidesPerView: 2,
            centeredSlides: false,
            loop: true,
            spaceBetween: 0,
            grabCursor: true,
            paginationClickable: true,
            navigation: {
                nextEl: '.next-single-one_four',
                prevEl: '.prev-single-one_four',
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true 
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                540: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
            }
        });
    } 
  /*-----------------------------
swiper_ center items
-----------------------------*/
function creote_swipe_timeline() {

    var swiper = new Swiper('.swiper__timeline', {
        slidesPerView: 4,
        loop: true,
        centeredSlides: true,
        spaceBetween:0,
        grabCursor: true,
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
       
        breakpoints: {
            240: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });
}
  /*-----------------------------
swiper_ no center items
-----------------------------*/

function creote_swipe_four_nocenter() {

    var swiper = new Swiper('.swipe_four_nocenter', {
        slidesPerView: 4,
        loop: true,
        centeredSlides: false,
        spaceBetween:0,
        grabCursor: true,
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true 
        },
        breakpoints: {
            240: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });
}

  /*-----------------------------
swiper_ client logo
-----------------------------*/
function creote_client_logo_swiper() {

    var swiper = new Swiper('.client_logo_swiper', {
        slidesPerView: 4,
        loop: false,
        spaceBetween:0,
        grabCursor: true,
        paginationClickable: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true 
        },
        breakpoints: {
            240: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });
}
function creote_client_logo_swiper_two() {

    var swiper = new Swiper('.client_logo_swiper_two', {
        slidesPerView: 4,
        loop: false,
        spaceBetween:30,
        grabCursor: true,
        paginationClickable: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true 
        },
        breakpoints: {
            240: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });
}
function creote_client_logo_swiper_three() {

    var swiper = new Swiper('.client_logo_swiper_three', {
        slidesPerView: 5,
        loop: false,
        spaceBetween:30,
        grabCursor: true,
        paginationClickable: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true 
        },
        breakpoints: {
            240: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
        }
    });
}

    /*-----------------------------
      swiper_ center items
    -----------------------------*/
    function creote_swiper_single() {

        var swiper = new Swiper('.swiper_single', {
            slidesPerView: 1,
            centeredSlides: false,
            loop: true,
            spaceBetween: 0,
            grabCursor: true,
            paginationClickable: true,
            navigation: {
                nextEl: '.next-single-one',
                prevEl: '.prev-single-one',
            },
            pagination: {
                el: ".number-pagination",
                type: "fraction",
            },
           
        });
    }
 

   /*-----------------------------
     grid_layour
    -----------------------------*/
    function creote_grid_filter_layout() {
 
   
            if ($('.project_container').length) {
                $('.project_container').isotope({
                    layoutMode: 'masonry',
                    itemSelector: '.project-wrapper',
                    transitionDuration: '1s',
                });
            }
            if ($('.project_filter').length) {
            // filter items on button click
            $('.project_filter').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $('.project_container').isotope({ filter: filterValue });
                $('.project_filter li').removeClass('current');
                $(this).addClass('current');
            });
        }
    }
    /*-----------------------------
    grid_layour
-----------------------------*/
function creote_grid_layout() {
    jQuery(document).ready(function() {
        if ($('.grid_layout').length) {
            $('.grid_layout').isotope({
                layoutMode: 'masonry',
                itemSelector: '.grid_box',
                transitionDuration: '1s',
                percentPosition: true,
            });
        }
    });
}
   /*-----------------------------
     funfacts
    -----------------------------*/
        function creote_funfacts_one() {
        if($('.count-box').length){
            $('.count-box').appear(function(){
        
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);
                    
                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function() {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }
                
            },{accY: 0});
        }
    }
  /*-----------------------------
     progress bar
    -----------------------------*/
    function creote_progress_bar() {
        // Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}
}

  /*-----------------------------
   tab slider
    -----------------------------*/
    function creote_swiper_with_tab() {
        var swiper = new Swiper(".single_swiper_tab", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".single_swiper", {
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
            spaceBetween: 30,
            grabCursor: true,
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                540: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }   


    function creote_tabone() {
        /*-----------------showcasre Tabs-----------------*/
        if ($('.tabs_all_box_start').length) {
            $('.tabs_all_box_start .showcase_tabs_btns .s_tab_btn').on('click', function(e) {
                e.preventDefault();
                var target = $($(this).attr('data-tab'));

                if ($(target).hasClass('active-tab show')) {
                    return false;
                } else {
                    $('.tabs_all_box_start .showcase_tabs_btns .s_tab_btn').removeClass('active');
                    $(this).addClass('active');
                    $('.tabs_all_box_start .s_tabs_content .s_tab').removeClass('active-tab show');
                    $(target).addClass('active-tab show');
                }
            });
        }
    }

 /*-----------------showcasre Tabs-----------------*/
    function creote_countdown_timer() {
        if ($('.countdown').length) {
        $(".countdown").countdown();
        }
    }
     /*-----------------creote_parallax-----------------*/
    function creote_parallax_pg() {
        var image = document.getElementsByClassName('cover-parallax');
        new simpleParallax(image, {
            delay: .6,
            transition: 'cubic-bezier(0,0,0,1)'
        });

        var image = document.getElementsByClassName('basic-parallax');
        new simpleParallax(image, {
            delay: .6,
            transition: 'cubic-bezier(0,0,0,1)'
        });

        var image = document.getElementsByClassName('horizontal-parallax');
        new simpleParallax(image, {
            orientation: 'right'
        });

        var image = document.getElementsByClassName('scale-parallax');
        new simpleParallax(image, {
            scale: 1.5
        });

        var image = document.getElementsByClassName('transition-parallax');
        new simpleParallax(image, {
            delay: .6,
            transition: 'cubic-bezier(0,0,0,1)'
        });

        var image = document.getElementsByClassName("overlay_parallax");
        new simpleParallax(image, {
          delay: 0.6,
          transition: "cubic-bezier(0,0,0,1)",
        });
    }


 /*-----------------------------
     light box
-----------------------------*/
function creote_sidemenu() {
    if($(".sidemenu_area").length) {
        //adding a new class on button element
        $('#side_menu_toggle_btn').on('click',function () {
            $('body').addClass('side_menu_toggled');   
        });
        //removing a existing class from button element
        $('#side_menu_toggle_btn_close').on('click',function () {
            $('body').removeClass('side_menu_toggled');
        });
    }
}

/*-----------------------------
     light box
-----------------------------*/
function creote_floating_menu() {
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('body').addClass('floating-menu');
     
    }
    else {
        $('body').removeClass('floating-menu');
       
    }
});

if ($(".float_menu_box").length) {
    $(".float_menu_box .close").on("click", function(){
        $('body').addClass('floating_close');
    })
}
}


      /* ==========================================================================
       Elementor front end start
       ========================================================================== */
    $(window).on('elementor/frontend/init', function() {

        elementorFrontend.hooks.addAction('frontend/element_ready/creote-faqs-v1.default', creote_faqsall);
        // header v1
        
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-header-v1.default', creote_search_popup);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-header-v1.default', creote_modal_popup );
        // header v2
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-header-v2.default', creote_search_popup);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-header-v2.default', creote_modal_popup );
        // header v3
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-header-v3.default', creote_search_popup);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-header-v3.default', creote_modal_popup );
        // header v4
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-header-v4.default', creote_search_popup);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-header-v4.default', creote_modal_popup );
        // header v5
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-header-v5.default', creote_search_popup);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-header-v5.default', creote_modal_popup );
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-floating-menu-v1.default', creote_floating_menu );
        
        // slider v1
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-slider-v1.default', creote_theme_owl_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-slider-v2.default', creote_theme_owl_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-slider-v3.default', creote_theme_owl_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-slider-v4.default', creote_theme_owl_carousel);
         // expertise v1
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-expertise-v1.default', creote_light_box);
        // project-carousel-v1
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-project-carousel-v1.default', creote_swipe_center);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-project-carousel-v1.default', creote_swipe_center_three);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-project-carousel-v1.default', creote_swipe_four_nocenter);     
         // project-carousel-v1
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-service-carousel-v1.default', creote_swipe_four_nocenter);
  
        // testimonial-v1
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-testimonial-v1.default', creote_swiper_single);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-testimonial-v1.default', creote_swiper_with_tab);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-testimonial-v1.default', creote_swipe_center_three_tesimionail);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-testimonial-v1.default', creote_swipe_center_two_tesimionail);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-testimonial-v2.default', creote_swiper_single);
        
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-expertise-v1.default', creote_parallax_pg);
        

        // blog-post-grid-v1
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-fun-facts-box-v1.default', creote_funfacts_one);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-fun-facts-box-v2.default', creote_funfacts_one);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-progress-bar-v1.default', creote_progress_bar);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-project-filter-v1.default', creote_grid_filter_layout);
        //elementorFrontend.hooks.addAction('frontend/element_ready/creote-blog-post-v1.default', creote_grid_layout);
        //elementorFrontend.hooks.addAction('frontend/element_ready/creote-fun-facts-box-v1.default', creote_grid_layout);
        //elementorFrontend.hooks.addAction('frontend/element_ready/creote-service-post-v1.default', creote_grid_layout);
        // product-post-grid-v1
        //elementorFrontend.hooks.addAction('frontend/element_ready/creote-product-post-v1.default', creote_grid_layout);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-product-post-v1.default', creote_light_box);

        elementorFrontend.hooks.addAction('frontend/element_ready/creote-project-filter-v1.default', creote_light_box);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-timeline-v1.default', creote_swipe_timeline);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-timeline-v1.default', creote_swipe_center_three_tesimionail);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-tab-v1.default', creote_tabone);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-multi-tab-v1.default', creote_tabone);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-client-brand-v1.default', creote_client_logo_swiper);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-client-brand-v1.default', creote_client_logo_swiper_two);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-client-brand-v1.default', creote_client_logo_swiper_three);
        
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-countdown-v1.default', creote_countdown_timer);
        elementorFrontend.hooks.addAction('frontend/element_ready/creote-offer-v1.default', creote_countdown_timer);

        elementorFrontend.hooks.addAction('frontend/element_ready/creote-mega-menu-image-carouse-v1.default', creote_theme_owl_carousel);
       
    });



    jQuery(window).on('load', function() {
        (function($) {
            creote_search_popup();
            creote_swiper_with_tab();
            creote_funfacts_one();
            creote_grid_filter_layout();
            creote_swipe_center();
            creote_swiper_single();
            creote_swipe_timeline();
            creote_light_box();
            creote_modal_popup ();
            creote_tabone();
            creote_swipe_center_three_tesimionail();
            creote_theme_owl_carousel();
            creote_client_logo_swiper();
            creote_countdown_timer();
            creote_faqsall();
            creote_progress_bar();
            creote_swipe_center_three();
            creote_grid_layout();
            creote_sidemenu();
            creote_floating_menu();
        })(jQuery);
    });

      
})(jQuery);