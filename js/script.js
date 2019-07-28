$(document).ready(function(){
    $('#resumeTitle').fadeIn('slow');
    $('#slowFadeIn').fadeIn(4000);
    $('#resume-download').hover(
        function(){
            $(this).html('Thank you!');
        }, function(){
            $(this).text('Download My Resume');
        }
    );
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 1) {
            $('.navbar').addClass('compressed');
        } else {
            $('.navbar').removeClass('compressed');
        }    
    });
});

