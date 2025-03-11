import { unique } from '../../../homework-solutions/js/hw-6/task-3';

describe('[JS] - [HW 6] - Task 3', () => {
  test('should not contain duplicates', () => {
    expect(unique).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
