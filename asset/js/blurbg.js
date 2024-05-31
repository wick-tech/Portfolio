
// blur bg navbar 
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('fixed-top');
            $('.navbar').addClass('blur-bg');
        } else {
            $('.navbar').removeClass('fixed-top');
            $('.navbar').removeClass('blur-bg');
        }
    });
});
