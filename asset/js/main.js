// for text changing 
var typed = new Typed(".text",{
 strings:["Frontend Developer", 'Web Developer', 'Freelancer' , 'Web Designer' , 'UX-UI Designer'],
 typeSpeed : 10,
 backSpeed : 100,
 backDelay : 1000,
 loop : true
});


// for about work 
  $(document).ready(function() {
    // Smooth scroll to section when the page loads with a hash (fragment) identifier
    if (window.location.hash) {
      var target = $(window.location.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800); // Adjust the speed of scrolling (in milliseconds)
      }
    }
    
    // Smooth scroll to section when a navigation link with a hash is clicked
    $('nav a[href^="#"]').click(function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      var targetElement = $(target);
      if (targetElement.length) {
        $('html, body').animate({
          scrollTop: targetElement.offset().top
        }, 800); // Adjust the speed of scrolling (in milliseconds)
      }
    });
  });

