$(function () {
    function rotate() {
        angY = angZ = angX = 0;
        setInterval(function () {
            var rand = (Math.floor(Math.random() * 1000)) - 500;
            angX += rand;
            var rand1 = (Math.floor(Math.random() * 1000)) - 500;
            angY += rand1;
            var rand2 = (Math.floor(Math.random() * 1000)) - 500;
            angZ += rand2;
            $('#cube').attr('style', 'transform: rotateX(' + angX + 'deg) rotateY(' + angY + 'deg) rotateZ(' + angZ + 'deg);');
        }, 3000);
    };
    rotate();


    function parallax() {
        window.addEventListener('scroll', scrollParallax);
    }
    parallax();

    function scrollParallax() {
        var parallax = document.querySelector('.parallax');
        let scrollTop = document.documentElement.scrollTop;
        parallax.style.transform = 'translateY(' + (scrollTop) * 0.9 + 'px)';
    }

});