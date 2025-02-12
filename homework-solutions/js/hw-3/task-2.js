/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

const number = 8;
const stringNumber = String(number);
const result = number + Number(stringNumber + stringNumber) + Number(stringNumber + stringNumber + stringNumber);
console.log(result)
