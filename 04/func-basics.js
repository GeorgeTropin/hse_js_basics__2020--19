let secondName = "Иванов"
function logUser() {
  let name = "Иван"
  console.log(name + " " + secondName);
}


logUser()
console.log("secondName: " + secondName);
console.log("name: " + name);

function getFullName(name, secondName) {
  return `Полное имя: ${name} ${secondName}`
}

console.log(getFullName("Марк", "Марков"));
let leoFullName = getFullName("Леонард", "Леонтьев")
console.log(leoFullName);


function sayHello (name) {
  if (name === undefined) {
    name = "stranger"
  }
  // name = || "stranger"
  alert (`Hello ${name}!`)
}


function makeCoffee(cups, withMilk) {
  if (withMilk) {
    return console.log(`Варю ${cups} кофе с молоком...`);
  }
  return console.log(`Варю ${cups} кофе без добавок...`);
}

makeCoffee(22, true)
makeCoffee(10, false)


function findMax(a, b) {
  return
}
findMax()


function showQuote(text, author) {

}
