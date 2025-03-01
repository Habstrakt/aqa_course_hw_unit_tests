/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if(typeof word !== "string") {
    return false;
  }
  word = word.toLowerCase().replace(/[^a-zа-я0-9]/g, "");
  let palindromWord = word.split("").reverse().join("");
  return word === palindromWord;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') {
    return [];
  }

  let words = sentence.split(' ');

  let filteredWords = [];
  for (let word of words) {
    if (word !== '') {
      filteredWords.push(word);
    }
  }

  if (filteredWords.length === 0) {
    return [];
  }

  let maxLength = 0;
  for (let word of filteredWords) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  let result = [];
  for (let word of filteredWords) {
    if (word.length === maxLength) {
      result.push(word);
    }
  }

  return result;
}

export { isPalindrom, findLongestWords };
