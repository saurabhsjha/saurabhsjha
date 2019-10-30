"use strict";

/* -------------------------------------
 CUSTOM FUNCTION WRITE HERE
 -------------------------------------- */
$(function() {
    /* -------------------------------------
     POST SLIDER
     -------------------------------------- */
    $("#xp-post-slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        pagination: false,
        autoPlay: true
    });
    /* -------------------------------------
     HOME SLIDER
     -------------------------------------- */
    $("#home-slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        pagination: false,
        autoPlay: true
    });
    /* -------------------------------------
     POST SLIDER
     -------------------------------------- */
    $("#categories-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [639, 1],
        navigation: false,
        pagination: false,
        autoPlay: false
    });
    //+++++++++++++++++++++++++++++++++++++++++++
//       Banner Slid Demo Code Strat
//+++++++++++++++++++++++++++++++++++++++++++
    var owl = $("#banner-slid-demo");
    owl.owlCarousel({
        items: 3,
        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 2],
            [991, 2],
            [1600, 3]
        ],
        navigation: false,
        pagination: false

    });

    /* -------------------------------------
     MASNORY GALLERY
     -------------------------------------- */
    $(window).on('load', function () {
        $('#filter-masonry').isotope({
            itemSelector: '.masonry-grid',
            masonry: {columnWidth: 2}
        });
    });
    /* -------------------------------------
     Google Map
     -------------------------------------- */
    $("#map").gmap3({
        marker: {address: "Haltern am See, Weseler Str. 151"},
        map: {options: {zoom: 16, scrollwheel: false}}
    });
    /* -------------------------------------
     OPEN CLOSE
     -------------------------------------- */
    var sliding = $(".sliding");
    var show_hide = $(".show_hide");
    sliding.hide();
    show_hide.show();
    show_hide.on('click', function () {
        sliding.slideToggle();
    });
    /* -------------------------------------
     STICKY SIDEBAR
     -------------------------------------- */
    $('#sidebar').theiaStickySidebar({
        additionalMarginTop: 30
    });
        /* position of the <li> that is currently shown */
        var current = 0;

        var loaded = 0;
        for (var i = 1; i < 4; ++i)
            $('<img />').on('load', function () {
                ++loaded;
                if (loaded === 3) {
                    $('#bg1,#bg2,#bg3').mouseover(function (e) {

                        var $this = $(this);
                        /* if we hover the current one, then don't do anything */
                        if ($this.parent().index() === current)
                            return;

                        /* item is bg1 or bg2 or bg3, depending where we are hovering */
                        var item = e.target.id;

                        /*
                         this is the sub menu overlay. Let's hide the current one
                         if we hover the first <li> or if we come from the last one,
                         then the overlay should move left -> right,
                         otherwise right->left
                         */
                        if (item === 'bg1' || current === 2)
                            
//                            Radix defined here as 10 ---------->
                            $('#menu .sub' + parseInt(current + 1, 10)).stop().animate({backgroundPosition: "(-266px 0)"}, 300, function () {
                                $(this).find('li').hide();
                            });
                        else
//                            Radix defined here as 10 ---------->
                            $('#menu .sub' + parseInt(current + 1, 10)).stop().animate({backgroundPosition: "(266px 0)"}, 300, function () {
                                $(this).find('li').hide();
                            });

                        if (item === 'bg1' || current === 2) {
                            /* if we hover the first <li> or if we come from the last one, then the images should move left -> right */
                            $('#menu > li').animate({backgroundPosition: "(-800px 0)"}, 0).removeClass('bg1 bg2 bg3').addClass(item);
                            move(1, item);
                        } else {
                            /* if we hover the first <li> or if we come from the last one, then the images should move right -> left */
                            $('#menu > li').animate({backgroundPosition: "(800px 0)"}, 0).removeClass('bg1 bg2 bg3').addClass(item);
                            move(0, item);
                        }

                        /*
                         We want that if we go from the first one to the last one (without hovering the middle one),
                         or from the last one to the first one, the middle menu's overlay should also slide, either
                         from left to right or right to left.
                         */
                        if (current === 2 && item === 'bg1') {
//                         Radix defined here as 10 ----------->
                            $('#menu .sub' + parseInt(current, 10)).stop().animate({backgroundPosition: "(-266px 0)"}, 300);
                        }
                        if (current === 0 && item === 'bg3') {
//                            Radix defined here as 10 ----------->
                            $('#menu .sub' + parseInt(current + 2, 10)).stop().animate({backgroundPosition: "(266px 0)"}, 300);
                        }


                        /* change the current element */
                        current = $this.parent().index();

                        /* let's make the overlay of the current one appear */
//                         Radix defined here as 10 ---------->
                        $('#menu .sub' + parseInt(current + 1, 10)).stop().animate({backgroundPosition: "(0 0)"}, 300, function () {
                            $(this).find('li').fadeIn();
                        });
                    });
                }
            }).attr('src', 'images/' + i + '.jpg');


        /*
         dir:1 - move left->right
         dir:0 - move right->left
         */
        function move(dir, item) {
            if (dir) {
                $('#bg1').parent().stop().animate({backgroundPosition: "(0 0)"}, 200);
                $('#bg2').parent().stop().animate({backgroundPosition: "(-266px 0)"}, 300);
                $('#bg3').parent().stop().animate({backgroundPosition: "(-532px 0)"}, 400, function () {
                    $('#menuWrapper').removeClass('bg1 bg2 bg3').addClass(item);
                });
            } else {
                $('#bg1').parent().stop().animate({backgroundPosition: "(0 0)"}, 400, function () {
                    $('#menuWrapper').removeClass('bg1 bg2 bg3').addClass(item);
                });
                $('#bg2').parent().stop().animate({backgroundPosition: "(-266px 0)"}, 300);
                $('#bg3').parent().stop().animate({backgroundPosition: "(-532px 0)"}, 200);
            }
        }
    //+++++++++++++++++++++++++++++++++++++++++++
//       Pre Loding Code Strat
//+++++++++++++++++++++++++++++++++++++++++++
    setTimeout(function () {
        $('#preloader').velocity({
            opacity: 0.1,
            translateY: "-80px"
        }, {
            duration: 400,
            complete: function () {
                $('#hola').velocity({
                    translateY: "-100%"
                }, {
                    duration: 1000,
                    easing: [0.7, 0, 0.3, 1],
                    complete: function () {
                        $('.home').addClass('animate-border divide');
                    }
                });
            }
        });
    }, 500);

    $('#tick2').html($('#tick').html());
//alert($('#tick2').offset.left);

    var temp = 0, intervalId = 0;
    $('#tick li').each(function () {
        var offset = $(this).offset();
        var offsetLeft = offset.left;
        $(this).css({'left': offsetLeft + temp});
        temp = $(this).width() + temp + 10;
    });
    $('#tick').css({'width': temp + 40, 'margin-left': '20px'});
    temp = 0;
    $('#tick2 li').each(function () {
        var offset = $(this).offset();
        var offsetLeft = offset.left;
        $(this).css({'left': offsetLeft + temp});
        temp = $(this).width() + temp + 10;
    });
    $('#tick2').css({'width': temp + 40, 'margin-left': temp + 40});

    function abc(a, b) {
//                            Radix defined here as 10 ---------->
        var marginLefta = (parseInt($("#" + a).css('marginLeft'), 10));
//                            Radix defined here as 10 ---------->
        var marginLeftb = (parseInt($("#" + b).css('marginLeft'), 10));
        if ((-marginLefta <= $("#" + a).width()) && (-marginLefta <= $("#" + a).width())) {
            $("#" + a).css({'margin-left': (marginLefta - 1) + 'px'});
        } else {
            $("#" + a).css({'margin-left': temp});
        }
        if ((-marginLeftb <= $("#" + b).width())) {
            $("#" + b).css({'margin-left': (marginLeftb - 1) + 'px'});
        } else {
            $("#" + b).css({'margin-left': temp});
        }
    }

    function start() {
        intervalId = window.setInterval(function () {
            abc('tick', 'tick2');
        }, 50);
    }

        $('#outer').mouseenter(function () {
            window.clearInterval(intervalId);
        });
        $('#outer').mouseleave(function () {
            start();
        });
        start();

$('.buttons a.fa-search').magnificPopup({type: 'image'});
$('.instagram-gallery a').magnificPopup({type: 'image'});
$('.xp-instagram a').magnificPopup({type: 'image'});
});