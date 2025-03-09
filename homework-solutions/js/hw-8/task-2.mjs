/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const countVowels = (word) => {
    const matches = word.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  };

  return [...wordsArr].sort((a, b) => {
    const countA = countVowels(a);
    const countB = countVowels(b);
    return countA - countB;
  });
}

export { sortedByVowels };
