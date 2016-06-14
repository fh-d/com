jQuery(document).ready(function($) {
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');

    updateNavigation();
    $(window).on('scroll', function() {
        updateNavigation();
    });

    //smooth scroll to the section
    navigationItems.on('click', function(event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function() {
        $('.touch #cd-vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function() {
        $('.touch #cd-vertical-nav').removeClass('open');
    });

    function updateNavigation() {
        contentSections.each(function() {
            $this = $(this);
            var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigationItems.eq(activeSection).addClass('is-selected');
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate({
                'scrollTop': target.offset().top
            },
            600
        );
    }
});

//lazy loader
$("img.lazy").lazyload();

//animistion
$(document).ready(function() {
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function(url) {
            window.location.href = url;
        }
    });
});
//scrollreaveal
window.sr = ScrollReveal({});;
sr.reveal('.foo', {
    duration: 400,
    scale: 0.8,
    delay: 100,
    opacity: 0
});
sr.reveal('.folio', {
    duration: 900,
    delay: 0,
    opacity: 0.6
});
sr.reveal('.foliotwo', {
    duration: 500,
    delay: 0,
    opacity: 0.6
});
//flowtype
$('body').flowtype({
    minimum: 500,
    maximum: 800,
    minFont: 14,
    maxFont: 30,
    fontRatio: 30
});
//vivus svg
new Vivus('logosvg', {
    type: 'scenario',
    duration: 50,
    animTimingFunction: Vivus.EASE,
    selfDestroy: true,
    file: 'logo.svg',
}, function doDone(obj) {
    obj.el.classList.add('finished');
});