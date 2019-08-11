var layananAnimation = false;
$(document).ready(function() {
    $(".semo").css("display", "none");
    $(".trigsemo").click(function() {
        if (!layananAnimation) {
            layananAnimation = true;
            $(".semo").fadeIn(500);
        } else {
            layananAnimation = false;
            $(".semo").fadeOut(500);
        }
    });

    $('.carousel-sync').on('slide.bs.carousel', function(ev) {
        // get the direction, based on the event which occurs
        var dir = ev.direction == 'right' ? 'prev' : 'next';
        // get synchronized non-sliding carousels, and make'em sliding
        $('.carousel-sync').not('.sliding').addClass('sliding').carousel(dir);
    });
    $('.carousel-sync').on('slid.bs.carousel', function(ev) {
        // remove .sliding class, to allow the next move
        $('.carousel-sync').removeClass('sliding');
    });



});