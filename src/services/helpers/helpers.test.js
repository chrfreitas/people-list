const { toggleItemArray, capitalize } = require('.');

describe('toggleItemArray', () => {
  test('should return an array with a single item', () => {
    const array = null;
    const newItem = 4;

    const result = toggleItemArray(array, newItem);

    expect(result).toEqual([4]);
  });

  test('should add the new item into the array and return it', () => {
    const array = [1, 2, 3];
    const newItem = 4;

    const result = toggleItemArray(array, newItem);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should remove the item from the array with the same value and return it', () => {
    const array = [1, 2, 3];
    const newItem = 2;

    const result = toggleItemArray(array, newItem);

    expect(result).toEqual([1, 3]);
  });
});

describe('capitalize', () => {
  test('should return the string with the first letter uppercase', () => {
    const value = 'john maia';

    const result = capitalize(value);

    expect(result).toEqual('John maia');
  });
});
