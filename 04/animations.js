function reset() {
  window.location.reload()
}
let box = document.querySelector(".box")

function paintItBlack() {
  box.style.backgroundColor = "black"
}

function makeCircle() {
  box.style.borderRadius = "100%"
}

function move() {
  box.style.transform = 'translateX(100px)'
}
function changeColor() {
  let colorInput = document.querySelector('#colorInput')
  box.style.backgroundColor = colorInput.value
}
