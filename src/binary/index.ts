/**
 * Binary search function, performs binary search to find the index of the needle in the haystack
 * Rules followed for implementation
 * - high index is exclusive
 * - low index is inclusive
 * - never check the middle item twice
 * @param hayStack array of items that needs to be searched
 * @param needle item to search for.
 * @returns the index of the needle( if it exist) in the hayStack otherwise -1
 */
export function binary<T>(hayStack: Array<T>, needle: T): number {
  let low = 0;
  let high = hayStack.length;

  do {
    const middleIndex = (low + (high - low)) / 2;
    const value = hayStack[middleIndex];

    if (value === needle) {
      return middleIndex;
    } else if (value > needle) {
      high = middleIndex;
    } else {
      low = middleIndex + 1;
    }
  } while (low < high);

  return -1;
}
