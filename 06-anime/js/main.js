let targsAnimation01 = anime({
  targets: '.box.is-moving',
  translateX: 300,
  autoplay: false
})
let targsBtn01 = document.getElementById('targsBtn01')
targsBtn01.onclick = targsAnimation01.play

let propsAnimation01 = anime({
  targets: '.props .box',
  translateX: 500,
  rotate: 180,
  backgroundColor: '#00ffff',
  borderRadius: [0, '50%'],
  easing: 'easeInOutQuad',
  autoplay: false
})
let propsBtn01 = document.getElementById('propsBtn01')
propsBtn01.onclick = propsAnimation01.play

let valsAnimation01 = anime({
  targets: '.vals .triangle',
  translateX: 500,
  easing: 'easeInOutQuint',
  delay: anime.stagger(100),
  rotate: anime.stagger([-270, 270]),
  autoplay: false
})
let valsBtn01 = document.getElementById('valsBtn01')
valsBtn01.onclick = valsAnimation01.play

let path = anime.path('path')
let svgMotion = anime({
  targets: '.svgAnim .circle',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 5000,
  loop: true
})

let funcAnim01 = anime ({
  targets: '.funk-move .box',
  translateX: function() {
    return 250
  },
  changeComplete: function(el) {
    console.log('Анимация завершена');
  },
  autoplay: false
})

let funcBtn01 = document.getElementById('funcBtn01')
funcBtn01.onclick = funcAnim01.play
