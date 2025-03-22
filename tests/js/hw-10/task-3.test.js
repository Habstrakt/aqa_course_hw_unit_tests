import { uniqueRandomGenerator } from '../../../homework-solutions/js/hw-10/task-3.mjs';

describe('[JS] - [HW 10] - Task 3', () => {
  describe('uniqueRandomGenerator', () => {
    test('Generates unique random numbers up to n', () => {
      const n = 5;
      const randomGenerator = uniqueRandomGenerator(n);

      const generatedNumbers = new Set();
      for (let i = 0; i < n; i++) {
        const number = randomGenerator();
        expect(generatedNumbers.has(number)).toBe(false);
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(n);
        generatedNumbers.add(number);
      }

      expect(randomGenerator()).toBe('All numbers were received');
      expect(randomGenerator()).toBe('All numbers were received');
    });

    test("Returns 'All numbers were received' immediately if n is 0", () => {
      const randomGenerator = uniqueRandomGenerator(0);
      expect(randomGenerator()).toBe('All numbers were received');
    });
  });
});
