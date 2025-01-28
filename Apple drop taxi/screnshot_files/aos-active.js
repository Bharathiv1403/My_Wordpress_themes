/*-----------------------------
animation on Scroll AOS.js  active
--------------------------*/
(function($) {
    "use strict";
    AOS.init({
        startEvent: 'load',
        once: true, // whether animation should happen only once - while scrolling down
        easing: 'ease', // default easing for AOS animations
        anchorPlacement: 'top-bottom',
    });
}(jQuery));