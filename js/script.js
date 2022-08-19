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

  $(".smm_footer_elem").click(function(){
    let url = $(this).find("a").attr("href");
    window.location.replace(url);
  });


  $(".botton_send").click(function(){
    let tel = $('input[type=tel]').val();
    let name = $('input[type=text1]').val();
    let message = 'Name: ' + name + ' Phone number: ' + tel;
    let token = '5400413990:AAGCSpa1oBwWQEMu_vrG348fZCel2gSkCF8';
    let chat_id = 5135005850;

  $.ajax({
      url:'https://api.telegram.org/bot'+token+'/sendMessage',
      method:'POST',
      data:{chat_id:chat_id,text:message},
      success:function(){
        alert('Дякуєм за звернення, наш менеджер незабаром вам затедефонує!');
      }
    });
  });

