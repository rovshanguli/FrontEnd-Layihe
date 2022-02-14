
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    console.log(ul);
    li = ul.getElementsByTagName("li");
    console.log(li);
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
$(function () {
    //Slider
    const nexticon = '<i class="fas fa-arrow-right"></i>';
    const previcon = '<i class="fas fa-arrow-left"></i>';
    $(".home-slider").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        smartSpeed: 450,
        nav: true,
        dots: false,
        animateIn: true,
        animateOut: true,
        navText: [previcon, nexticon],
        loop: true
    });

    //Search
    function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        console.log(ul);
        li = ul.getElementsByTagName("li");
        console.log(li);
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    //CountDown(Timer)
    var clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function () {
                $('.message').html('The clock has stopped!')
            }
        }
        
    });
    // set time
    clock.setTime(220880);

    // countdown mode
    clock.setCountdown(true);

    // start the clock
    clock.start();

    
    //Slider2
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

})

