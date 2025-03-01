/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  number = Math.abs(number);
  const sum = String(number)
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);
  return sum > 9 ? digitalRoot(sum) : sum;
}

export { digitalRoot };
