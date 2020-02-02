$(function () {
  function rotate() {
    ang = 0;
    setInterval(function () {
      var rand = (Math.floor(Math.random() * 1000)) - 500;
      ang += rand;

      $('#cube').attr('style', 'transform: rotateY(' + ang + 'deg) rotateZ(' + ang + 'deg);');
      

    }, 2000);
  };
  rotate();

  function rotateLivingry() {
    var ang = 3600;
    $('p.livingry').attr('style', 'transform: rotateY(' + ang + 'deg)');

  }
  rotateLivingry();
});