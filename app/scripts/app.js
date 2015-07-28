'use strict';

Waves.attach('.btn-search', ['waves-block']);

$(document).ready(function(){
  $('.bxslider').bxSlider({
  nextSelector: '#slider-next',
  prevSelector: '#slider-prev',
  auto:'true',
  autoControls:'true',
  mode: 'fade'
  });
});

$(document).ready(function() {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});
