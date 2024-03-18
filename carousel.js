$(document).ready(function() {
    // Configuration
    var slideIndex = 0;
    var slides = $('.carousel-slide img');
    var slideLength = slides.length;
    const banners = ["Banner1", "Banner2", "Banner3", "Banner4", "Banner5"];

  
    // Function to show the current slide
    function showSlide() {
      slides.hide(); // Hide all slides
      slides.eq(slideIndex).show(); // Show the current slide
    }
  
    // Function to move to the next slide
    function nextSlide() {
      slideIndex = (slideIndex + 1) % slideLength; // Increment slide index and handle wrapping
      showSlide();
    }
  
    // Function to move to the previous slide
    function prevSlide() {
      slideIndex = (slideIndex - 1 + slideLength) % slideLength; // Decrement slide index and handle wrapping
      showSlide();
    }
  
    // Set up event handlers for next and previous buttons
    $('.next').on('click', nextSlide);
    $('.prev').on('click', prevSlide);
  
    // Show the initial slide
    showSlide();
  });