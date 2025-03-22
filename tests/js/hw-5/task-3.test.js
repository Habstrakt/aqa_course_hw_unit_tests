import { vowelsAndConsonantsResult } from '../../../homework-solutions/js/hw-5/task-3';

describe('[JS] - [HW 5] - Task 3', () => {
  test('countVowelsAndConsonants should return correct vowel and consonant count', () => {
    expect(vowelsAndConsonantsResult).toBe('hello contains 2 vowels and 3 consonants');
  });
});
