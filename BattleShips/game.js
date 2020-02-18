console.log('Hello')

// Задаем координаты палуб корабля
let location1 = 5
let location2 = 6
let location3 = 7

// Переменная, чтобы хранить координату выстрела
let currentShot

// Сколько было сделано выстрелов
let shots = 0

// Сколько раз игрок попал по кораблю
let hits = 0

// Утонул ли корабль
let isSunk = false

// Пишем цикл, который работает, пока корабль не утонул
while (isSunk === false) {
  // Спрашиваю координату выстрела у игрока
  currentShot = Number(prompt('Введите цифру от 0 до 9:'))
  if (currentShot < 0) {
    alert('Ошибка!')
  } else if (currentShot > 9) {
    alert('Ошибка!')
  }
  // Увеличиваю кол-во выстрелов
  shots += 1
  // Проверяю, попал ли человек по кораблю
  // Для этого сверяю координату выстрела с каждой координатой корабля
  // Если игрок попал, то увеличиваю кол-во попаданий
  if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
    alert('Попадание!')
    hits += 1
  // } else if (currentShot === location2) {
  //   alert('Попадание!')
  //   hits += 1
  // } else if (currentShot === location3) {
  //   alert('Попадание!')
  //   hits += 1
  } else {
    alert('Промах!')
    // hits = hits
  }
  // Если игрок попал три раза, то топлю корабль
  if (hits === 3) {
    alert('Победа!')
    isSunk = true
  }
}
