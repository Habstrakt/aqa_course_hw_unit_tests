/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const vowels = 'aeiou';

let vowelCount = 0;
let consonantCount = 0;

let vowelsAndConsonantsResult = '';

for(let i = 0; i < word.length; i++) {
  const char = word[i].toLowerCase();
  if(vowels.includes(char)) {
    vowelCount++;
  } else {
    consonantCount++;
  }
}

export { vowelsAndConsonantsResult };
