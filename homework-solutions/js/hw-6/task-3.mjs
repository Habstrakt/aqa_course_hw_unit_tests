/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let unique = [];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];

for(let i = 0; i < numbers.length; i++) {
  let dublicate = false;
  for(let j = 0; j < unique.length; j++) {
    if(numbers[i] === unique[j]) {
      dublicate = true;
      break;
    }
  }
  if(!dublicate) {
    unique.push(numbers[i])
  }
}


export { unique };
