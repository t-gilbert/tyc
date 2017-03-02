// Main JavaScript
(function ($) {
    "use strict"; // Start of use strict


    // JavaScript- Active Page for Navigation
    $("#mainNav ul li a")
        .each(function () {
            if (this.href == window.location.href) {
                $(this)
                    .parent()
                    .addClass("active");
            }
        });
    
 
    $(document)
        .ready(function () {
            // MagnificPopup
            var magnifPopup = function () {
                $('.image-popup')
                    .magnificPopup({
                        type: 'image'
                        , removalDelay: 300
                        , mainClass: 'mfp-with-zoom'
                        , gallery: {
                            enabled: true
                        }
                        , zoom: {
                            enabled: true, // By default it's false, so don't forget to enable it

                            duration: 300, // duration of the effect, in milliseconds
                            easing: 'ease-in-out', // CSS transition easing function

                            // The "opener" function should return the element from which popup will be zoomed in
                            // and to which popup will be scaled down
                            // By defailt it looks for an image tag:
                            opener: function (openerElement) {
                                // openerElement is the element on which popup was initialized, in this case its <a> tag
                                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                                return openerElement.is('img') ? openerElement : openerElement.find('img');
                            }
                        }
                    });
            };



            // Call the functions 
            magnifPopup();
            magnifVideo();

        });




    // Highlight the top nav as scrolling occurs
    $('body')
        .scrollspy({
            target: '.navbar-fixed-top'
            , offset: 51
        });


    // Offset for Main Navigation
    $('#mainNav')
        .affix({
            offset: {
                top: 100
            }
        })


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.page-scroll')
            .bind('click', function (event) {
                var $anchor = $(this);
                $('html, body')
                    .stop()
                    .animate({
                        scrollTop: $($anchor.attr('href'))
                            .offset()
                            .top
                    }, 200, 'easeInOutExpo');
                event.preventDefault();
            });
    });



})(jQuery); // End of use strict
