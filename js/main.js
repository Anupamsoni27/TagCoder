 (function($) {

     /* --------------------------------------------
      Page height mange
      --------------------------------------------- */

     function page_height_mange() {
         var minheight = $(window).height();
         var headerhight = $('header').outerHeight(true);
         var hightoutput = minheight - headerhight;
         var half_height = minheight / 2;
         var thirdhaflhight = (hightoutput / 4) * 3.4;

         $(".full_height").css({
             'min-height': minheight,
             'height': minheight
         });

         $(".full_height").css({
             'min-height': minheight,
             'height': minheight
         });
         $(".half_height_min").css({
             'min-height': minheight / 2,
         });

         $(".thirdhalf_height, .thirdhalf_height .item").css({
             'height': thirdhaflhight
         });

         $(".halfheight_screen, .halfheight_screen  .item").css({
             'height': half_height
         });

         $(".full-screen .work-item, .full-screen .item").css({
             'min-height': minheight,
             'height': minheight
         });

         $(".full-screen-minus-header .work-item, .full-screen-minus-header .item").css({
             'min-height': hightoutput,
             'height': hightoutput
         });
     }

     /* --------------------------------------------
      Nav Menu
      --------------------------------------------- */

     function et_nav_menu() {

         $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
         $('.menu > ul ul li:has( > ul)').addClass('menu-dropdown-arrow-icon');
         //Checks if li has sub (ul) and adds class for toggle icon - just an UI

         $(".main-nav").before("<div class=\"menu-mobile-holder\"> <a href=\"#\" class=\"menu-mobile\"><span>Menu</span></a></div>");

         //Adds menu-mobile class (for mobile toggle menu) before the normal menu
         //Mobile menu is hidden if width is more then 943px, but normal menu is displayed
         //Normal menu is hidden if width is below 943px, and jquery adds mobile menu
         //Done this way so it can be used with wordpress without any trouble

         if ($("header").hasClass("sideheader")) {
             if ($(window).width() > 943) {
                 $(".menu > ul > li").on('click', function() {
                     $(this).children("ul").slideToggle(300);
                     $(this).closest(".menu-dropdown-icon").toggleClass('menu-dropdown-icon-open');
                 });
             }
         }

         //If width is more than 943px dropdowns are displayed on hover

         $(".menu > ul > li").on('click', function(e) {
             if ($(window).width() <= 943) {
                 $(this).children("ul").slideToggle(300);
                 $(this).closest(".menu-dropdown-icon").toggleClass('menu-dropdown-icon-open');
                 e.preventDefault();
             }
         });


         //If width is less than 943px dropdowns are displayed on Click
         $(".menu-mobile").on('click', function(e) {
             if ($(window).width() <= 943) {
                 $(".menu > ul").toggleClass('show-on-mobile');
                 $(".menu > ul").slideToggle(300);
             }
             $(".menu-mobile").toggleClass('menu-open');
             e.preventDefault();
             return false;
         });

         // Menu for side header that displayed on Click
         $(".sideheader .menu-mobile").on('click', function(e) {
             if ($(window).width() > 943) {
                 $('.menu-content').fadeToggle(200);
                 $(".sideheader .menu-content-wrap").toggleClass('open-menu-wrap');
                 e.preventDefault();
             }
             return false;
         });

         // Adding active class to Menu nav link
         $(function() {
             var url = window.location.pathname,
                 urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
             // now grab every link from the navigation
             $('.menu-nav a').each(function() {
                 // and test its normalized href against the url pathname regexp
                 if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                     $(this).parent().addClass('current').parent().parent().addClass('current');
                 }
             });
         });

         // Menu search bar that displayed on Click
         $("#search-label").on('click', function() {
             $(".search-bar").slideToggle("slow");
             return false;
         });

     }

     /* --------------------------------------------
      Sticky header
      --------------------------------------------- */

     function sticky_header() {

         var stickyNavTop = $('.sticky_header').offset().top;

         if ($("header").hasClass("absolute_header")) {

         } else if ($("header").hasClass("center_header")) {
             var menu = document.querySelector('.sticky_header');

             var menuPosition = menu.getBoundingClientRect();
             var placeholder = document.createElement('div');
             placeholder.style.width = menuPosition.width + 'px';
             placeholder.style.height = menuPosition.height + 'px';
             menu.parentNode.insertBefore(placeholder, menu);

         } else {
             var menu = document.querySelector('.sticky_header');
             var menuPosition = menu.getBoundingClientRect();
             var bodymarginforheader = menuPosition.height + 'px';
             $('body').css("margin-top", bodymarginforheader);
         }

         var stickyNav = function() {
             var scrollTop = $(window).scrollTop();
             if ($("header").hasClass("center_header")) {

                 var fromtop = 0;
                 if ($('.top_header').length) {
                     var fromtop = $(".top_header").outerHeight();
                 }
                 $(".sticky_header").css({
                     top: fromtop + 'px'
                 });

                 if (scrollTop > stickyNavTop + 700) {

                     $(".sticky_header").css({
                         top: '0px'
                     });
                     $('.sticky_header').addClass('sticky_header_runing');
                 } else {
                     $('.sticky_header').removeClass('sticky_header_runing');

                 }
             } else {

                 if (scrollTop > stickyNavTop) {
                     $('.sticky_header').addClass('sticky_header_runing');
                 } else {
                     $('.sticky_header').removeClass('sticky_header_runing');
                 }
             }

         };

         if (!$("header").hasClass("sideheader")) {
             stickyNav();

             $(window).scroll(function() {
                 stickyNav();
             });
         }
     }

     /* --------------------------------------------
      owl carousel calling function
      --------------------------------------------- */

     function owl_main_carousel() {
         if ($('#main-carousel').length) {
             var owl = $("#main-carousel");
             owl.owlCarousel({
                 nav: true, // Show next and prev buttons
                 smartSpeed: 1000,
                 dotsSpeed: 1000,
                 dragEndSpeed: true,
                 dragEndSpeed: 1000,
                 singleItem: true,
                 pagination: false,
                 items: 1,
             });
         }
     }

     function owl_second_carousel() {
         if ($('#second_carousel').length) {
             var owl = $("#second_carousel");
             owl.owlCarousel({
                 nav: false, // Show next and prev buttons
                 smartSpeed: 1000,
                 dotsSpeed: 1000,
                 items: 1,
             });
         }
     }

     function owl_loop_carousel() {
         if ($('#loop_carousel').length) {
             $('#loop_carousel').owlCarousel({
                 items: 5,
                 itemsDesktop: [1000, 5],
                 itemsDesktopSmall: [900, 3],
                 itemsTablet: [600, 2],
                 dots: false,
                 nav: false,
                 itemsMobile: false

             });

         }
     }

     /* --------------------------------------------
       Isotope  calling function
      --------------------------------------------- */

     function Isotope_masonry_layout() {
         if ($('.masonry_layout').length) {
             // init Isotope
             var $grid = $('.masonry_layout').isotope({
                 percentPosition: true,
                 hiddenStyle: {
                     opacity: 0,
                     transform: 'scale(0.001)'
                 },
                 visibleStyle: {
                     opacity: 1,
                     transform: 'scale(1)'
                 },
                 transitionDuration: '0.6s',
                 masonry: {
                     // use element for option
                     columnWidth: 0
                 }
             });
             // Isotope filter
             $('.work_filter li span').on('click', function() {
                 var filterValue = $(this).attr('data-filter');
                 jQuery('.work_filter li').removeClass('active');
                 jQuery(this).parent().addClass('active');
                 $grid.isotope({
                     filter: filterValue
                 });
             });

             // layout Isotope after each image loads
             $grid.imagesLoaded().progress(function() {
                 $grid.isotope('layout');
             });
         }
     }


     /* --------------------------------------------
      Number Counter 
      --------------------------------------------- */

     function countToNumber() {
         if ($('.timer').length) {
             $('.timer').countTo();
         }
     }

     /* --------------------------------------------
      Finding first word in hover effect box
      --------------------------------------------- */
     function firstWord() {
         $('.hover_effect figure h2').each(function() {
             var word = $(this).html();
             var index = word.indexOf(' ');
             if (index == -1) {
                 index = word.length;
             }
             $(this).html('<span>' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
         });

     }

     function popup_gallery_int() {
         $('.popup_gallery').magnificPopup({
             delegate: 'img',
             type: 'image',
             mainClass: 'mfp-with-zoom mfp-img-mobile',
             fixedContentPos: false,
             gallery: {
                 enabled: true
             },
             zoom: {
                 enabled: true,
                 duration: 300, // don't foget to change the duration also in CSS

             },

             callbacks: {
                 elementParse: function(qw) {
                     qw.src = qw.el.attr('src');
                 }
             }

         });

         // For video popup (PLAY VIDEO TRIGGER)
         if ($('.video-play-trigger').length) {
             $('.video-play-trigger').magnificPopup({
                 disableOn: 700,
                 type: 'iframe',
                 mainClass: 'mfp-with-fade',
                 removalDelay: 160,
                 preloader: false,
                 fixedContentPos: false
             });
         };

         $('.popup-modal').magnificPopup({
             type: 'inline',
             preloader: false,
             focus: '#username',
             modal: true,
             removalDelay: 300,
             mainClass: 'mfp-fade',
         });
         $(document).on('click', '.popup-modal-dismiss', function(e) {
             e.preventDefault();
             $.magnificPopup.close();
         });
     }


     /* --------------------------------------------
       Element Animate effect
     --------------------------------------------- */

     function et_animate_item() {
         AOS.init({
             offset: 160,
             duration: 600,
             easing: 'ease-in-sine',
             delay: 100,
         });
     }


     /* ---------------------------------------------
      Scripts initialization
      --------------------------------------------- */

     $(window).load(function() {
         "use strict"; // Start of use strict
     });

     $(document).ready(function() {
         "use strict"; // Start of use strict  

         $(".fit").fitVids();
         owl_main_carousel();
         owl_second_carousel();
         owl_loop_carousel();
         popup_gallery_int();
         Isotope_masonry_layout();
         countToNumber();
         firstWord();
         et_nav_menu();
         et_animate_item();
         sticky_header();
     });





     /* ---------------------------------------------
      On resize calling function
      --------------------------------------------- */
     $(window).on('resize', function() {
         "use strict"; // Start of use strict
         page_height_mange();

     }).trigger('resize');


 })(jQuery)
