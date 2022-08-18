$('.carousel_arrow_left').click(function() {
    event.preventDefault();
    $('.team_carousel').animate({
      scrollLeft: "-=775px"
    }, "slow");
  });
  
   $('.carousel_arrow_right').click(function() {
    event.preventDefault();
    $('.team_carousel').animate({
     scrollLeft: "+=775px"
    }, "slow");
  });