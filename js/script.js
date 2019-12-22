function animateCSS(listClass, animationName,timer, callback) {

    for (let index = 0; index < listClass.length; index++) {

        const node = document.querySelector(listClass[index])
    node.classList.add('animated', animationName,timer)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName,timer)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
    }
}

Visibility.onVisible(function(){
    setTimeout(function(){
        var fadeInUp = ['.linhaDescricao'];
        animateCSS(fadeInUp,'fadeInDownBig')
        $(".linhaDescricao").css("opacity", 1)
    },1000)
    setTimeout(function(){
        var fadeInLeft = ['.linha1Animacao', '.AnimacaoKelvin'];
        var fadeInRight = ['.linha2Animacao', '.AnimacaoHermano'];
        var fadeIn = ['.cuAnimado'];
        animateCSS(fadeInLeft, 'fadeInLeft');
        animateCSS(fadeInRight, 'fadeInRight');
        animateCSS(['.cuAnimado'], '.fadeInRight');
        $(".linha1Animacao, .linha2Animacao, .AnimacaoKelvin, .AnimacaoHermano, .cuAnimado").css("opacity", 1)
    },1000)
    setTimeout(function () {
        var flip = ['.card1Animacao'];
        animateCSS(flip, 'flip')
        $(".card1Animacao")
    }, 3000)
    setTimeout(function () {
        var flip = ['.card2Animacao'];
        animateCSS(flip, 'flip')
        $(".card1Animacao")
    }, 3500)
    setTimeout(function () {
        var flip = ['.card3Animacao'];
        animateCSS(flip, 'flip')
        $(".card1Animacao")
    }, 4000)
});
