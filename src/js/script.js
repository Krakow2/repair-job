var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close')


button.addEventListener('click', function (){
  modal.classList.add('modal_active');
});

close.addEventListener('click', function () {
  modal.classList.remove('modal_active');
});

setInterval(function(){
  modal.classList.remove('modal_active');
}, 3000);


$(function () {

  $(window).scroll(function () {

    if ($(this).scrollTop() != 0) {

      $('#toTop').fadeIn();

    } else {

      $('#toTop').fadeOut();

    }

  });

  $('#toTop').click(function () {

    $('body,html').animate({ scrollTop: 0 }, 800);

  });

});