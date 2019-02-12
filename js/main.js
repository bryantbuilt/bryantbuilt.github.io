console.log("Main Connected");

let switchPic = function() {};

let switchQuote = function() {};

$('document').ready(function(){
  console.log("jQuery Connected");

  // Header Code
  $('.dropdown-trigger').dropdown();

  $(window).on('resize', function() {
    if ($(window).width() <= 992 ) {
    $('#dropdown').removeClass('hide-on-med-and-down');
    $('#dropdown').addClass('dropdown-content'); }
    else {
    $('#dropdown').addClass('hide-on-med-and-down');
    $('#dropdown').removeClass('dropdown-content');
    };
  });

  $(window).on('scroll',function() {
    if  ($(window).scrollTop() >= $('#about-section').offset().top &&
         $(window).scrollTop() < $('#portfolio-section').offset().top) {
      $('.about-section').addClass('underline-nav');
    } else {
      $('.about-section').removeClass('underline-nav');
    }
  });

  // Portfolio Code
  $(window).on('scroll',function() {
    if  ($(window).scrollTop() >= $('#portfolio-section').offset().top &&
         $(window).scrollTop() < $('#quotes-section').offset().top) {
      $('.portfolio-section').addClass('underline-nav');
    } else {
      $('.portfolio-section').removeClass('underline-nav');
    }
  });

  $('.carousel').carousel();

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  $('.next-slide').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
  });

  $('.prev-slide').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
  });

  switchPic = function() {$('.carousel').carousel('next')};

  setInterval(switchPic,3000);

   // Quotes Code

  $(window).on('scroll',function() {
    if  ($(window).scrollTop() >= $('#quotes-section').offset().top &&
         $(window).scrollTop() < $('#contact-section').offset().top) {
      $('.quotes-section').addClass('underline-nav');
    } else {
      $('.quotes-section').removeClass('underline-nav');
    }
  });

  switchQuote = function() {
    let currentQuote = $('.active-quote');
    let nextQuote = $('.active-quote').next('.quote');
    if (nextQuote.length === 0) {
      currentQuote.removeClass('active-quote');
      $('.quote:first-child').addClass('active-quote');
    } else {
      currentQuote.removeClass('active-quote');
      nextQuote.addClass('active-quote');
    }
  };

  setInterval(switchQuote,2500);

   // Contact Code

  $(window).on('scroll',function() {
    if  ($(window).scrollTop() >= $('#contact-section').offset().top) {
      $('.contact-section').addClass('underline-nav');
    } else {
      $('.contact-section').removeClass('underline-nav');
    }
  });

});
