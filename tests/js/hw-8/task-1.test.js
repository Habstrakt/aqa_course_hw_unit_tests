import { forEach, map, every, some, reduce, find, filter, sort } from '../../../homework-solutions/js/hw-8/task-1';

describe('[JS] - [HW 8] - Task 1', () => {
  describe('Array methods tests', () => {
    test('forEach - logs all numbers divisible by 3', () => {
      expect(forEach).toEqual([30]);
    });

    test('map - creates a new array with each element minus the length of the original array', () => {
      expect(map).toEqual([-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]);
    });

    test('filter - creates a new array with values greater than the previous value', () => {
      expect(filter).toEqual([8, 30, 85, 95, 94]);
    });

    test('find - finds the element equal to its index', () => {
      expect(find).toBe(2);
    });

    test('sort - creates a sorted array in ascending order without modifying the original', () => {
      expect(sort).toEqual([2, 7, 8, 30, 31, 37, 77, 85, 94, 95]);
    });

    test('reduce - calculates the sum of all numbers in the array', () => {
      expect(reduce).toBe(466);
    });

    test('some - checks if there are elements greater than 90', () => {
      expect(some).toBe(true);
    });

    test('every - checks if all elements are two-digit numbers', () => {
      expect(every).toBe(false);
    });
  });
});
