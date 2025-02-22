
  // Initialize AOS animations
  AOS.init({
    duration: 1000,
    once: true
  });

  // Initialize Venobox Lightbox
  $('.venobox').venobox();

  // Portfolio Filtering
  $('.filter-btn').on('click', function() {
    var filter = $(this).attr('data-filter');
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    if(filter === 'all'){
      $('.portfolio-item').fadeIn();
    } else {
      $('.portfolio-item').each(function(){
        if($(this).data('category') === filter){
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      });
    }
  });

  // Back to Top Button Behavior
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });

  // Contact Form Submission (demo behavior)
  $('#contactForm').submit(function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    $(this)[0].reset();
  });
});
