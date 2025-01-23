// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Select the hamburger menu and the navbar
    const hamburger = document.querySelector('.hamburger-menu');
    const navbarNav = document.querySelector('.navbar-nav');

    // Add event listener to toggle navbar visibility
    hamburger.addEventListener('click', function() {
        // Toggle the 'show' class on the navbar to display/hide it
        navbarNav.classList.toggle('show');
    });
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the call-to-action buttons
    const primaryBtn = document.querySelector('.primary-btn');
    const secondaryBtn = document.querySelector('.secondary-btn');

    // Smooth scroll for "Our Services" button
    primaryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#services').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Smooth scroll for "Get in Touch" button
    secondaryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Scroll Animation for Call-to-Action buttons (Highlight effect)
    const heroSection = document.querySelector('#hero');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            primaryBtn.classList.add('highlight');
            secondaryBtn.classList.add('highlight');
        } else {
            primaryBtn.classList.remove('highlight');
            secondaryBtn.classList.remove('highlight');
        }
    });
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get all the service cards
    const serviceCards = document.querySelectorAll('.service-card');

    // Hover effect: Animation for service cards
    serviceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });

    // Smooth scroll to each service card when clicked
    serviceCards.forEach(function(card, index) {
        card.addEventListener('click', function() {
            window.scrollTo({
                top: card.offsetTop - 100, // Adjust scroll position for better view
                behavior: 'smooth'
            });
        });
    });
});
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get all the "Why Choose Us" items
    const whyChooseItems = document.querySelectorAll('.why-choose-item');

    // Hover effect: Animation for "Why Choose Us" items
    whyChooseItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            item.style.transform = "scale(1.05)";
            item.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        });

        item.addEventListener('mouseleave', function() {
            item.style.transform = "scale(1)";
            item.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });

    // Smooth scroll to each "Why Choose Us" item when clicked
    whyChooseItems.forEach(function(item) {
        item.addEventListener('click', function() {
            window.scrollTo({
                top: item.offsetTop - 100, // Adjust scroll position for better view
                behavior: 'smooth'
            });
        });
    });
});
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get all testimonial items
    const testimonials = document.querySelectorAll('.testimonial-item');
    
    // Set up automatic carousel scrolling
    let currentIndex = 0;
    const totalTestimonials = testimonials.length;
    const carouselInterval = 5000; // Change testimonial every 5 seconds
    let carouselTimer;

    // Function to show the next testimonial in the carousel
    function showNextTestimonial() {
        // Remove the active class from the current testimonial
        testimonials[currentIndex].classList.remove('active');
        
        // Increment the index (wrap around if it's the last item)
        currentIndex = (currentIndex + 1) % totalTestimonials;
        
        // Add the active class to the next testimonial
        testimonials[currentIndex].classList.add('active');
    }

    // Initially show the first testimonial
    testimonials[0].classList.add('active');
    
    // Start the automatic carousel rotation
    carouselTimer = setInterval(showNextTestimonial, carouselInterval);

    // Pause the carousel on hover over a testimonial item
    testimonials.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            clearInterval(carouselTimer); // Pause carousel rotation
        });

        item.addEventListener('mouseleave', function() {
            carouselTimer = setInterval(showNextTestimonial, carouselInterval); // Resume carousel rotation
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the contact form
    const form = document.querySelector('.contact-form');
    
    // Select the input fields
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    
    // Select the success and error messages
    const successMessage = document.createElement('p');
    const errorMessage = document.createElement('p');
    
    successMessage.textContent = "Your message has been sent successfully!";
    successMessage.style.color = 'green';
    successMessage.style.fontWeight = '600';
    
    errorMessage.textContent = "There was an error submitting your message. Please try again.";
    errorMessage.style.color = 'red';
    errorMessage.style.fontWeight = '600';
    
    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Check if all fields are filled out
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            alert("Please fill out all fields.");
            return;
        }

        // Form validation (basic email validation)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulate form submission success (replace with actual server-side code)
        form.reset(); // Reset the form fields

        // Display success message
        form.appendChild(successMessage);
        setTimeout(function() {
            successMessage.remove(); // Remove the success message after 5 seconds
        }, 5000);
        
        // If there's an error in the submission process, display error message
        // form.appendChild(errorMessage);
        // setTimeout(function() {
        //     errorMessage.remove(); // Remove the error message after 5 seconds
        // }, 5000);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the mission and values sections
    const missionSection = document.querySelector('.about-details');
    const valuesSection = document.querySelector('.about-values');
    
    // Select the buttons that toggle the visibility of these sections
    const toggleMissionButton = document.createElement('button');
    const toggleValuesButton = document.createElement('button');
    
    toggleMissionButton.textContent = "See Our Mission";
    toggleValuesButton.textContent = "See Our Values";
    
    toggleMissionButton.classList.add('toggle-button');
    toggleValuesButton.classList.add('toggle-button');
    
    // Add buttons to the About section
    missionSection.appendChild(toggleMissionButton);
    valuesSection.appendChild(toggleValuesButton);
    
    // Initially hide the mission and values sections
    missionSection.querySelector('.about-details-text').style.display = 'none';
    valuesSection.querySelector('.about-values-list').style.display = 'none';

    // Toggle mission visibility on button click
    toggleMissionButton.addEventListener('click', function() {
        const missionText = missionSection.querySelector('.about-details-text');
        if (missionText.style.display === 'none') {
            missionText.style.display = 'block';
            toggleMissionButton.textContent = "Hide Our Mission";
        } else {
            missionText.style.display = 'none';
            toggleMissionButton.textContent = "See Our Mission";
        }
    });

    // Toggle values visibility on button click
    toggleValuesButton.addEventListener('click', function() {
        const valuesList = valuesSection.querySelector('.about-values-list');
        if (valuesList.style.display === 'none') {
            valuesList.style.display = 'block';
            toggleValuesButton.textContent = "Hide Our Values";
        } else {
            valuesList.style.display = 'none';
            toggleValuesButton.textContent = "See Our Values";
        }
    });
});
