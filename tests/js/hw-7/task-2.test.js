import { isPalindrom, findLongestWords } from '../../../homework-solutions/js/hw-7/task-2';

describe('[JS] - [HW 7] - Task 2', () => {
  describe('isPalindrom', () => {
    test('returns true for a single-character word', () => {
      expect(isPalindrom('a')).toBe(true);
    });

    test('returns true for a simple palindrome', () => {
      expect(isPalindrom('madam')).toBe(true);
    });

    test('returns false for a non-palindrome word', () => {
      expect(isPalindrom('hello')).toBe(false);
    });

    test('returns true for a mixed-case palindrome', () => {
      expect(isPalindrom('MadAm')).toBe(true);
    });

    test('returns true for an empty string', () => {
      expect(isPalindrom('')).toBe(true);
    });

    test('returns false if input is not a string', () => {
      expect(isPalindrom(12321)).toBe(false);
      expect(isPalindrom(null)).toBe(false);
      expect(isPalindrom(undefined)).toBe(false);
      expect(isPalindrom({})).toBe(false);
    });
  });

  describe('findLongestWords', () => {
    test('returns the longest word in a simple sentence', () => {
      expect(findLongestWords('The quick bron fox')).toEqual(['quick']);
    });

    test('returns all words when all words are of the same length', () => {
      expect(findLongestWords('one two six')).toEqual(['one', 'two', 'six']);
    });

    test('returns multiple longest words when there is a tie', () => {
      expect(findLongestWords('The quick rown fox jumps')).toEqual(['quick', 'jumps']);
    });

    test('returns an empty array for an empty string', () => {
      expect(findLongestWords('')).toEqual([]);
    });

    test('returns an empty array for non-string input', () => {
      expect(findLongestWords(123)).toEqual([]);
      expect(findLongestWords(null)).toEqual([]);
      expect(findLongestWords(undefined)).toEqual([]);
    });

    test('ignores extra spaces between words', () => {
      expect(findLongestWords('The   quick  brwn    fox')).toEqual(['quick']);
    });
  });
});
