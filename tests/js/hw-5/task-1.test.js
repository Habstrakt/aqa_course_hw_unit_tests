import {
  evenNumbersResult,
  smilePatternResult,
  replaceSpacesWithOneResult,
} from '../../../homework-solutions/js/hw-5/task-1';

describe('[JS] - [HW 5] - Task 1', () => {
  test('getEvenNumbers should return even numbers from 10 to 0 as a string', () => {
    expect(evenNumbersResult).toBe('10-8-6-4-2-0');
  });

  test('generateSmilePattern should return correct smile pattern', () => {
    expect(smilePatternResult).toBe(':)\n' + ':):)\n' + ':):):)\n' + ':):):):)\n' + ':):):):):)');
  });

  test('replaceSpacesWithOne should replace spaces with 1', () => {
    expect(replaceSpacesWithOneResult).toBe('Hello!1I1am1a1JS1student!');
  });
});
