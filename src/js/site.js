//highlight the current nav item

$(document).ready(function () {
    var current = location.pathname;
    if (current == "/") {
        $('.navMenu .navLinks a').first().addClass('current');
    } else {
        $('.navMenu .navLinks a').each(function () {
            var $this = $(this);
            // if the current path is like this link, make it active
            if ($this.attr('href').indexOf(current) !== -1) {
                $this.addClass('current');
            }
        })
    }
});

//navigation menu

$(document).ready(function () {
    $('#navMenuButton').click(function () {
        $('#navMenu').toggleClass('active');
    });
});

$(document).ready(function () {
    $('.hamburgerButton').click(function () {
        $(this).toggleClass('clicked');
    });
})

//slider

var sliders = $('.slider');
var sliderDots = $('.sliderDots');
var slideSpeed = 5000;

var slideShowTimer = window.setInterval(switchSlides, slideSpeed);

function switchSlides() {
    sliders.each(function () {
        var slides = $(this).children('.slide');
        var sliderName = $(this).attr("id");

        var currentSlide = $(this).children('.slide.active');
        var currentIndex = $(currentSlide).attr("id");
        var maxIndex = parseInt($(slides).length) - 1;

        var dots = $('.sliderDots[slider=' + sliderName + ']').children('span');

        $(currentSlide).removeClass('active');
        $(dots).eq(currentIndex).removeClass('active');

        if (currentIndex < maxIndex) {
            var nextSlideIndex = parseInt(currentIndex) + 1;
            var nextSlide = $(this).children('#' + nextSlideIndex);

            $(nextSlide).addClass('active');
            $(dots).eq(nextSlideIndex).addClass('active');
        } else if (currentIndex = maxIndex) {
            var nextSlideIndex = 0;
            var nextSlide = $(this).children('#' + nextSlideIndex);

            $(nextSlide).addClass('active');
            $(dots).eq(nextSlideIndex).addClass('active');
        }
    });
}

$('.sliderDots span').click(function () {
    var dotIndex = $(this).attr('id');

    var sliderName = $(this).parent().attr('slider');
    var slider = $('#' + sliderName);

    var currentSlide = $(slider).children('.slide.active');
    var currentIndex = $(currentSlide).attr('id');

    $(currentSlide).removeClass('active');
    $(slider).children('#' + dotIndex).addClass('active');

    $(this).parent().children('#' + currentIndex).removeClass('active');
    $(this).addClass('active');

    clearInterval(slideShowTimer);
    slideShowTimer = window.setInterval(switchSlides, slideSpeed);
});

//filterbutton

$('.mobileFilterButton').click(function () {
    var contentFilter = $(this).closest('.contentFilter');

    $(contentFilter).toggleClass('active');

    if ($(this).closest('.contentFilter').hasClass('active')) {
        $(this).children(".text").text("Sluiten");
    } else {
        $(this).children(".text").text("Filters");
    }
});

//select

$("select").change(function () {
    if ($(this).val() == "default") {
        $(this).addClass("placeHolder");
    } else {
        $(this).removeClass("placeHolder")
    }
});

$("select").change();


//itemlist

$(document).ready(function() {
    $(document).on('click', '.itemList .item .tumbnail, .itemList .item .title', function() {
        var item = $(this).closest('.item');
        var windowOfset;
        var iframe = $(item).find('iframe');
    
        $(item).closest('.itemList').find('.item').each(function () {
            $(this).removeClass('opened');
        });
    
        $(item).addClass('opened');
    
        if (window.innerWidth > 640) {
            windowOfset = 146;
        } else if (window.innerWidth > 480) {
            windowOfset = 120;
        } else {
            windowOfset = 100;
        }
    
        setTimeout(function () {
            $("html, body").animate({
                scrollTop: $(item).offset().top - windowOfset
            }, 300);
    
            $(iframe).attr("src", $(iframe).attr("page"));
        }, 300)
    });

    $(document).on('click', '.itemList .item .cross', function() {
        var item = $(this).closest('.item');
        var windowOfset;
        var iframe = $(item).find('iframe');
    
        $(item).removeClass('opened');
    
        if (window.innerWidth > 640) {
            windowOfset = 146;
        } else if (window.innerWidth > 480) {
            windowOfset = 120;
        } else {
            windowOfset = 100;
        }
    
        setTimeout(function () {
            $("html, body").animate({
                scrollTop: $(item).offset().top - windowOfset
            }, 300);
    
            $(iframe).attr("src", "");
        }, 300)
    });
});


//set dynamic viewheight

$(document).ready(function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


