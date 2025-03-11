import { findMissingNumber } from '../../../homework-solutions/js/hw-8/task-3';

describe('[JS] - [HW 8] - Task 3', () => {
  describe('findMissingNumber', () => {
    test('finds missing number in an unsorted array', () => {
      const arr = [5, 2, 7, 3, 8, 1, 6];
      expect(findMissingNumber(arr)).toBe(4); // 4 is missing
    });

    test('finds missing number in an array where the missing number is at the beginning', () => {
      const arr = [2, 3, 4, 5];
      expect(findMissingNumber(arr)).toBe(1); // 1 is missing
    });

    test('finds missing number in an array where the missing number is at the end', () => {
      const arr = [1, 2, 3, 4];
      expect(findMissingNumber(arr)).toBe(5); // 5 is missing
    });

    test('finds missing number in an array with only two numbers', () => {
      const arr = [2];
      expect(findMissingNumber(arr)).toBe(1); // Only number 1 should be missing
    });

    test('finds missing number in a large array', () => {
      const arr = Array.from({ length: 99 }, (_, i) => i + 1).filter((num) => num !== 50);
      expect(findMissingNumber(arr)).toBe(50); // 50 is missing in a large array
    });
  });
});
