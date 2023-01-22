import bubbleSort from '../bubbleSort';

describe('Bubble Sort Test', () => {
  const items = [23, 1, 3, 2, 5, 4, 7, 6, 10, 8, 9];
  it('should sort the items', () => {
    const sortedItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 23];

    expect(bubbleSort(items)).toEqual(sortedItems);
  });
});
