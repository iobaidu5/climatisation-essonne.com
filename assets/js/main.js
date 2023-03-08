const nav = document.querySelector('.Navbar');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}


$(document).ready(function () {
    $('#slide1').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
        }
    })
});

$(document).ready(function () {
    $('#slide2').owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
        }
    })
});


$(document).ready(function () {
    $('#slide3').owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        repeat: false,
        items: 3,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        navigation : true,
        navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],

        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })
});

$('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});