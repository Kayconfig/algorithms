import binarySearch from '../binarySearch';

describe('Binary Search Test', () => {
  const hayStack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 24, 27, 38];
  test('should find item at the beginning of hayStack', () => {
    const needle = hayStack[0];
    expect(binarySearch(hayStack, needle)).toBe(0);
  });

  test('should find item in between the haystack', () => {
    const index = (hayStack.length / 2) | 0;
    const needle = hayStack[index];
    expect(binarySearch(hayStack, needle)).toBe(index);
  });

  test('should find item at the end of haystack', () => {
    const index = hayStack.length - 1;
    const needle = hayStack[index];
    expect(binarySearch(hayStack, needle)).toBe(index);
  });

  test('should return -1 when needle is not in haystack', () => {
    expect(binarySearch(hayStack, Infinity)).toBe(-1);
  });
});
