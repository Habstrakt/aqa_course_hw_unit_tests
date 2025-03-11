import { digitalRoot } from '../../../homework-solutions/js/hw-7/task-3';

describe('[JS] - [HW 7] - Task 3', () => {
  describe('digitalRoot', () => {
    test('should return the correct digital root for a single-digit number', () => {
      expect(digitalRoot(5)).toBe(5);
    });

    test('should return the correct digital root for a number with multiple digits', () => {
      expect(digitalRoot(19)).toBe(1); // 1 + 9 = 10 -> 1 + 0 = 1
    });

    test('should return 0 for an input of 0', () => {
      expect(digitalRoot(0)).toBe(0);
    });

    test('should return the correct digital root for a very large number', () => {
      expect(digitalRoot(987654321)).toBe(9); // 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45 -> 4 + 5 = 9
    });
  });
});
