import { sortedByVowels } from '../../../homework-solutions/js/hw-8/task-2';

describe('[JS] - [HW 8] - Task 2', () => {
  describe('sortedByVowels', () => {
    test('sorts words by ascending number of vowels', () => {
      const words = ['apple', 'banana', 'cat'];
      const result = sortedByVowels(words);
      expect(result).toEqual(['cat', 'apple', 'banana']);
    });

    test('handles words with all vowels', () => {
      const words = ['aeiou', 'eio', 'ai'];
      const result = sortedByVowels(words);
      expect(result).toEqual(['ai', 'eio', 'aeiou']);
    });

    test('handles words with mixed vowel counts', () => {
      const words = ['hello', 'world', 'abc', 'def'];
      const result = sortedByVowels(words);
      expect(result).toEqual(['world', 'abc', 'def', 'hello']);
    });

    test('returns an empty array if input array is empty', () => {
      const words = [];
      const result = sortedByVowels(words);
      expect(result).toEqual([]);
    });
  });
});
