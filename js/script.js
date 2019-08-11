$(document).ready(function(){
    $('#resume-title').fadeIn('slow');
    $('#slow-fade-in').fadeIn(4000);
    $('.resume-button').hover(
        function(){
            $(this).text('Thank you!');
        }, function(){
            $(this).text('Download My Resume');
        }
    );
    $(window).on('scroll', function() {
        const topNav = document.getElementById("top-nav");
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            topNav.classList.add("smaller");
        } else {
            topNav.classList.remove("smaller");
        }   
    });
});

function addResponsive() {
    const topNav = document.getElementById("top-nav");
    if (topNav.classList.contains("responsive")) {
    topNav.classList.remove("responsive");
    } else {
    topNav.classList.add("responsive");
    }
}