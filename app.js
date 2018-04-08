$(document).ready(function(){

  $("#who-link").click(function() {
      $('html,body').animate({
          scrollTop: $("#who").offset().top},
          'slow');
  });

  $("#what-link").click(function() {
      $('html,body').animate({
          scrollTop: $("#what").offset().top},
          'slow');
  });

  $("#how-link").click(function() {
      $('html,body').animate({
          scrollTop: $("#how").offset().top},
          'slow');
  });









});
