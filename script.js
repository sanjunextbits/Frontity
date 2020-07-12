$(document).on('click','.uVTs-1',function() { 
  $('.left-panel > div').removeClass('active');
  $('.right-panel > div').removeClass('active');
  $(this).addClass('active');
  $('#uVTs-1').addClass('active');
});

$(document).on('click','.uVTs-2',function() { 
  $('.left-panel > div').removeClass('active');
  $('.right-panel > div').removeClass('active');
  $(this).addClass('active');
  $('#uVTs-2').addClass('active');
}); 

$(document).on('click','.uVTs-3',function() { 
  $('.left-panel > div').removeClass('active');
  $('.right-panel > div').removeClass('active');
  $(this).addClass('active');
  $('#uVTs-3').addClass('active');
}); 

$(document).on('click','.uVTs-4',function() { 
  $('.left-panel > div').removeClass('active');
  $('.right-panel > div').removeClass('active');
  $(this).addClass('active');
  $('#uVTs-4').addClass('active');
}); 


$(window).scroll(function(){
  var sticky = $('header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

$(document).ready(function(){
  var sticky = $('header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});


