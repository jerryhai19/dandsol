// Google Maps Initialization (ensure to replace YOUR_API_KEY in index.html)
function initMap() {
  // Default location (e.g., New York City)
  var location = {lat: 40.7128, lng: -74.0060};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

$(document).ready(function() {
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
