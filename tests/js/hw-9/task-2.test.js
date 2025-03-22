import {
  getCharacter,
  addCharacter,
  getCharactersByAge,
  updateCharacter,
  removeCharacter,
  characters,
} from '../../../homework-solutions/js/hw-9/task-2';

describe('[JS] - [HW 9] - Task 2', () => {
  beforeEach(() => {
    characters.length = 0;
    characters.push({ name: 'Barney', age: 36 }, { name: 'Fred', age: 40 }, { name: 'Jack', age: 50 });
  });

  describe('addCharacter', () => {
    test('addCharacter should add a new character to the array', () => {
      const newCharacter = { name: 'Wilma', age: 30 };
      addCharacter(newCharacter);
      expect(characters).toContainEqual(newCharacter);
    });

    test('addCharacter should throw an error for invalid input', () => {
      expect(() => addCharacter({})).toThrow();
      expect(() => addCharacter({ name: 'Wilma' })).toThrow();
    });
  });

  describe('getCharacter', () => {
    test('getCharacter should return a character by name', () => {
      const result = getCharacter('Fred');
      expect(result).toEqual({ name: 'Fred', age: 40 });
    });

    test('getCharacter should return undefined if the character is not found', () => {
      const result = getCharacter('Nonexistent');
      expect(result).toBeUndefined();
    });
  });

  describe('getCharactersByAge', () => {
    test('getCharactersByAge should return characters older than or equal to minAge', () => {
      const result = getCharactersByAge(40);
      expect(result).toEqual([
        { name: 'Fred', age: 40 },
        { name: 'Jack', age: 50 },
      ]);
    });

    test('getCharactersByAge should throw an error for invalid input', () => {
      expect(() => getCharactersByAge('43')).toThrow();
    });
  });

  describe('updateCharacter', () => {
    test('updateCharacter should update the character data', () => {
      updateCharacter('Fred', { name: 'Frederick', age: 45 });
      expect(characters).toContainEqual({ name: 'Frederick', age: 45 });
    });

    test('updateCharacter should throw an error if the character is not found', () => {
      expect(() => updateCharacter('Nonexistent', { name: 'New', age: 20 })).toThrow();
    });
  });

  describe('removeCharacter', () => {
    test('removeCharacter should remove a character by name', () => {
      removeCharacter('Fred');
      expect(characters).not.toContainEqual({ name: 'Fred', age: 40 });
      expect(characters.length).toBe(2);
    });

    test('removeCharacter should throw an error if the character is not found', () => {
      expect(() => removeCharacter('Nonexistent')).toThrow();
    });
  });
});
