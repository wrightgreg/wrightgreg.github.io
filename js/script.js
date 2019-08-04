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
        const topNav = document.getElementById("topNav");
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            topNav.classList.add("smaller");
        } else {
            topNav.classList.remove("smaller");
        }   
    });
});

function addResponsive() {
    const topNav = document.getElementById("topNav");
    if (topNav.classList.contains("responsive")) {
    topNav.classList.remove("responsive");
    } else {
    topNav.classList.add("responsive");
    }
}