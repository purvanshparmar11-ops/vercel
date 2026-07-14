

(function($) {
    "use strict";
     const $documentOn = $(document);
    const $windowOn = $(window);

    $(document).ready( function() {
       
         //>> Mobile Menu Js Start <<//
       //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

         $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });
        
        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

         $(".img-popup2").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {
            }
        });
        
        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Testimonial Slider Start <<//
        if($('.testimonail-slider').length > 0) {
            const testimonailSlider = new Swiper(".testimonail-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                 navigation: {
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                },
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
            });
        }

         //>> Testimonial Slider Start <<//
        if($('.testimonial-slider-2').length > 0) {
            const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                 navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                 pagination: {
                    el: ".dot",
                    clickable: true,
                },
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                 breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                     0: {
                        slidesPerView: 1,
                    },
                },
            });
        }


        //>> Brand Slider Start <<//
        if($('.brand-slide').length > 0) {
            const BrandSlide = new Swiper(".brand-slide", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    // 1399: {
                    //     slidesPerView: 7,
                    // },
                    1199: {
                        slidesPerView: 7,
                    },
                    991: {
                        slidesPerView: 5,
                    },
                    767: {
                        slidesPerView: 4,
                    },
                    575: {
                        slidesPerView: 3,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                     0: {
                        slidesPerView: 2,
                    },
                },
            });
        }

         //>> Brand Slider Start <<//
        if($('.project-slider').length > 0) {
            const ProjectSlider = new Swiper(".project-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                     0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        if ($('.single-select').length) {
            $('.single-select').niceSelect();
        }

         //>> Mouse Cursor Start <<//
         function mousecursor() {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function(s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "a, .cursor-pointer", function() {
                        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
        $(function() {
            mousecursor();
        });
        
         //>> Back To Top Slider Start <<//
         $(window).on('scroll', function() {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });
        
        $(document).on('click', '#back-top', function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });

    }); // End Document Ready Function

   
    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }

    loader();

})(jQuery); // End jQuery

