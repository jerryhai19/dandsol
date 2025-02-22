// Replace this with your actual Google Maps API key.
var googleMapsAPIKey = "YOUR_API_KEY";

// This function initializes the map once the API script is loaded.
function initMap() {
  var location = {lat: 40.7128, lng: -74.0060}; // Default location: New York City.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

// Immediately load the Google Maps API script dynamically.
(function loadGoogleMapsScript() {
  var script = document.createElement('script');
  script.src = "https://maps.googleapis.com/maps/api/js?key=" + googleMapsAPIKey + "&callback=initMap&v=weekly";
  script.async = true;
  script.defer = true;
  // In case of an error loading the script (like an authentication failure)
  script.onerror = function() {
    alert('Google Maps authentication failed. Please check your API key and usage restrictions in the Google Cloud Console.');
  };
  document.head.appendChild(script);
})();

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
