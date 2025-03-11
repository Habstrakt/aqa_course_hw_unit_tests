import { countOccurrences } from '../../../homework-solutions/js/hw-10/task-2.mjs';

describe('[JS] - [HW 10] - Task 2', () => {
  describe('countOccurrences', () => {
    it('should count the occurrences of numbers in an array', () => {
      const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
      const expected = { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 };
      expect(countOccurrences(numbers)).toEqual(expected);
    });

    it('should return an empty object for an empty array', () => {
      const numbers = [];
      const expected = {};
      expect(countOccurrences(numbers)).toEqual(expected);
    });

    it('should work with an array of one number', () => {
      const numbers = [42];
      const expected = { 42: 1 };
      expect(countOccurrences(numbers)).toEqual(expected);
    });

    it('should handle arrays with all the same numbers', () => {
      const numbers = [7, 7, 7, 7];
      const expected = { 7: 4 };
      expect(countOccurrences(numbers)).toEqual(expected);
    });

    it('should handle negative numbers and zeros', () => {
      const numbers = [0, -1, -1, 0, 0, -2];
      const expected = { 0: 3, '-1': 2, '-2': 1 };
      expect(countOccurrences(numbers)).toEqual(expected);
    });

    it('should handle floating-point numbers', () => {
      const numbers = [1.5, 1.5, 2.5, 3.5];
      const expected = { 1.5: 2, 2.5: 1, 3.5: 1 };
      expect(countOccurrences(numbers)).toEqual(expected);
    });
  });
});
