/*-------------------------------------------------------------
=========================theme-js==============================
-------------------------------------------------------------*/

(function($) {
	
	"use strict";
	
/*---====================---preloader---======================---*/
 
  function creote_preloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
		TweenMax.to($(".loader-wrap .overlay"), 1.2, {
            force3D: true,
            left: "100%",
            ease: Expo.easeInOut,
        });
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
  }

 /*---====================---preloader---======================---*/
  $.fn.creoteProgressbar = function(options){
      options = $.extend({
        animate     : true,
        animateText : true
      }, options);
      var $this = $(this);
      var $progressBar = $this;
      var $progressCount = $progressBar.find('.ProgressBar-percentage--count');
      var $circle = $progressBar.find('.ProgressBar-circle');
      var percentageProgress = $progressBar.attr('data-progress');
      var percentageRemaining = (100 - percentageProgress);
      var percentageText = $progressCount.parent().attr('data-progress');
      //Calcule la circonférence du cercle
      var radius = $circle.attr('r');
      var diameter = radius * 2;
      var circumference = Math.round(Math.PI * diameter);
      //Calcule le pourcentage d'avancement
      var percentage =  circumference * percentageRemaining / 100;
      $circle.css({
        'stroke-dasharray' : circumference,
        'stroke-dashoffset' : percentage
      });
      //Animation de la barre de progression
      if(options.animate === true){
        $circle.css({
          'stroke-dashoffset' : circumference
        }).animate({
          'stroke-dashoffset' : percentage
        }, 3000)
      }
      //Animation du texte (pourcentage)
      if(options.animateText == true){
        $({ Counter: 0 }).animate(
        { Counter: percentageText },
          { duration: 3000,
            step: function () {
              $progressCount.text( Math.ceil(this.Counter) + '%');
            }
          });
        }else{
          $progressCount.text( percentageText + '%');
    }
  };
$(document).ready(function(){
  $('.ProgressBar--animateNone').creoteProgressbar({
    animate : false,
    animateText : false
  });
  $('.ProgressBar--animateCircle').creoteProgressbar({
    animate : true,
    animateText : false
  });
  $('.ProgressBar--animateText').creoteProgressbar({
    animate : false,
    animateText : true
  });
  $('.ProgressBar--animateAll').creoteProgressbar();
});
/*---====================---header drop down button---======================---*/
if($('header .navbar_nav li.dropdown ul').length){
  $('header .navbar_nav li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
}
if($('header .navbar_nav li.mega_menu  ul').length){
  $('header .navbar_nav li.mega_menu a.nav-link').append('<span class="fa fa-angle-down"></span>');
}
if($('.crt_mobile_menu .navbar_nav li.dropdown ul').length){
  $('.crt_mobile_menu .navbar_nav li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
}
if($('.crt_mobile_menu .navbar_nav li.mega_menu  ul').length){
  $('.crt_mobile_menu .navbar_nav li.mega_menu a.nav-link').append('<span class="fa fa-angle-down"></span>');
}
/*---====================---mobile navbar append---======================---*/
	if($('.crt_mobile_menu').length){
		//Menu Toggle Btn
		$('.navbar_togglers').on('click', function() {
			$('body').toggleClass('crt_mobile_menu-visible');
		});
		//Menu Toggle Btn
		$('.crt_mobile_menu .menu-backdrop,.crt_mobile_menu .close-btn').on('click', function() {
			$('body').removeClass('crt_mobile_menu-visible');
		});
	}
/*---====================---shop min cart side navbar---======================---*/
if($('.side_bar_cart').length){
  //Menu Toggle Btn
  $('.mini_cart_togglers').on('click', function() {
    $('body').toggleClass('side_bar_cart-visible');
  });
  //Menu Toggle Btn
  $('.side_bar_cart  .close_btn_mini , .side_bar_cart .cart_overlay').on('click', function() {
    $('body').removeClass('side_bar_cart-visible');
  });
}
/*---====================---header drop down toggle---======================---*/
  $(function() {
    $('.crt_mobile_menu li.dropdown .dropdown-btn').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('open');
        $(this).parent().find('ul.dropdown-menu').first().toggle(300);

        $(this).parent().siblings().find('ul.dropdown-menu').hide(200);

        //Hide menu when clicked outside
        $(this).parent().find('ul.dropdown-menu').parent().mouseleave(function() {
            var thisUI = $(this);
            $('html').click(function() {
                thisUI.children(".dropdown-menu").hide();
                thisUI.children("span").removeClass('open');

                $('html').unbind('click');
            });
        });
    });
});

/*---====================---creote Parallax---======================---*/
function creote_parallax() {
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

/*---====================---fixSide_scroll---======================---*/
  $(document).ready(function() {
    var $sticky = $('.fixSide_scroll');
    $sticky.hcSticky({
      stickTo: '.all_side_bar',
      responsive: {
        980: {
          disable: true
        }
      }
    });
  });

/*---====================---hamburger_menu---======================---*/
  $(document).ready(function(){
    $(".hamburger_menu").click(function(){
      $(this).toggleClass("is-active");
    });
    $('.crt_mobile_menu .menu-backdrop').on('click', function() {
			$('.hamburger_menu ').removeClass('is-active');
		});
  
  });

 
 
/*---====================---back-to-top---======================---*/
if($('.prgoress_indicator path').length){
var progressPath = document.querySelector('.prgoress_indicator path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var progress = pathLength - (scroll * pathLength / height);
  progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).on('scroll', updateProgress);
var offset = 250;
var duration = 550;
jQuery(window).on('scroll', function () {
  if (jQuery(this).scrollTop() > offset) {
    jQuery('.prgoress_indicator').addClass('active-progress');
  } else {
    jQuery('.prgoress_indicator').removeClass('active-progress');
  }
});
jQuery('.prgoress_indicator').on('click', function (event) {
  event.preventDefault();
  jQuery('html, body').animate({ scrollTop: 0 }, duration);
  return false;
});
}
/*---====================---creote_related_posts---======================---*/
function creote_related_posts() {
  var swiper = new Swiper('.related_posts_swiper', {
      slidesPerView: 3,
      loop: true,
      spaceBetween:30,
      grabCursor: true,
      navigation: {
        nextEl: '.related-button-next',
        prevEl: '.related-button-prev',
    },
      breakpoints: {
          240: {
              slidesPerView: 1,
          },
          540: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: 2,
          },
          1024: {
              slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
        },
          
      }
  });
}

/*---====================---Universal Code for All Owl Carousel Sliders---======================---*/
	if ($('.theme_carousel').length) {
    $(".theme_carousel").each(function (index) {
    var $owlAttr = {},
    $extraAttr = $(this).data("options");
    $.extend($owlAttr, $extraAttr);
    $(this).owlCarousel($owlAttr);
  });
}
/*---====================---related_posts_swiper_two---======================---*/
function creote_related_posts_two() {
  var swiper = new Swiper('.related_posts_swiper_two', {
      slidesPerView: 2,
      loop: true,
      spaceBetween:30,
      grabCursor: true,
      navigation: {
        nextEl: '.related-button-next',
        prevEl: '.related-button-prev',
    },
      breakpoints: {
          240: {
              slidesPerView: 1,
          },
          540: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: 2,
          },
          1024: {
              slidesPerView: 2,
          },

          1200: {
            slidesPerView: 2,
        },
          
      }
  });
}



function creote_sidemenu_content_bx() {
  var header = $(".sidemenu_content_bx");

  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 600) {
          header.addClass("scrolled");
      } else {
          header.removeClass("scrolled");
      }
  });
}



$(document.body).trigger('wc_fragment_refresh');
	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			creote_parallax();
      creote_related_posts();
      creote_related_posts_two();
      creote_sidemenu_content_bx();
  
		})(jQuery);
	});


/* ==========================================================================
   When document is loaded, do
========================================================================== */

  $(window).on('load', function() {
		creote_preloader();
	});

})(window.jQuery);