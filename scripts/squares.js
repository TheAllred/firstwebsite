$(window).resize(function(){
  var size = window.innerWidth/100 * 1.3;
  if (size < 18)
    size = 18;
  $('html').css({'font-size': size +'px'})
}).resize()

window.setTimeout(function(){

  var size = 50
  var canvas = $('.canvas')

  for(var x = 0; x < canvas.width(); x += size) {
    for(var y = 0; y < canvas.height(); y += size) {
      var seed = ((x+y*.5)/300)
      var hue = 280 - (x/canvas.width()) * 120
      $('<div>')
        .addClass('square')
        .css({
          top: y + 'px',
          left: x + 'px',
          animationDelay: seed+'s',
          background: 'hsl('+hue+', 78%, 56%)'
        })
        .appendTo(canvas)
    }
  }

},1)
