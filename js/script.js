$(document).ready(function(){
    $('#resumeTitle').fadeIn('slow');
    $('#slowFadeIn').fadeIn(2000);

    $(document.getElementById('resume-download')).hover(function(){
        $(this).html('Thank you!');
    }, function(){
        $(this).text('Download My Resume');
    });

});

