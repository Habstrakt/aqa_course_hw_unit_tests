import { forOf, result, first, second, rest, mergedArray } from '../../../homework-solutions/js/hw-6/task-1';

describe('[JS] - [HW 6] - Task 1', () => {
  test('[forOf] array should contain squared even numbers and cubed odd numbers', () => {
    expect(forOf).toEqual([1, 4, 27, 16, 125, 36, 343, 64, 729, 100]);
  });

  test('[result] should be [0, 1, 3, 4, 5]', () => {
    expect(result).toEqual([0, 1, 3, 4, 5]);
  });

  test('[first] should be 3', () => {
    expect(first).toBe(3);
  });

  test('[second] should be 11', () => {
    expect(second).toBe(11);
  });

  test('[rest] should be [32, 7, 20]', () => {
    expect(rest).toEqual([32, 7, 20]);
  });

  test('[mergedArray] should be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect(mergedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
