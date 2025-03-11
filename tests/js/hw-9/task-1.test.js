import {
  keyWithFourChars,
  hasSalaryKey1stOption,
  hasSalaryKey2ndOption,
  stringValues,
  keyValuePairs,
  logSpy,
} from '../../../homework-solutions/js/hw-9/task-1';
const character = { name: 'Barney', age: 36, gender: 'male', isQa: true };

describe('[JS] - [HW 9] - Task 1', () => {
  test('Keys with 4 letters should be ["name", "isQa"]', () => {
    expect(keyWithFourChars).toEqual(['name', 'isQa']);
  });

  test('Values with type string should be ["Barney", "male"]', () => {
    expect(stringValues).toEqual(['Barney', 'male']);
  });

  test('Should check created "keyValuePairs" value', () => {
    expect(keyValuePairs).toEqual([
      ['name', 'Barney'],
      ['age', 36],
      ['gender', 'male'],
      ['isQa', true],
    ]);
  });

  test('Should correctly log key-value pairs using a for loop', () => {
    expect(logSpy).toHaveBeenCalledWith('key = name, value = Barney');
    expect(logSpy).toHaveBeenCalledWith('key = age, value = 36');
    expect(logSpy).toHaveBeenCalledWith('key = gender, value = male');
    expect(logSpy).toHaveBeenCalledWith('key = isQa, value = true');
    logSpy.mockRestore();
  });

  test('Should check if key "salary" exists (method 1)', () => {
    expect(hasSalaryKey1stOption).toBe(false);
  });

  test('Should check if key "salary" exists (method 2)', () => {
    expect(hasSalaryKey2ndOption).toBe(false);
  });
});
