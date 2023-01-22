export default function<T>(arrayOfItems: T[]): T[] {
  const swap = <Type>(arr: Type[], index1: number, index2: number): void => {
    // eslint-disable-next-line no-param-reassign
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };
  for (let i = 0; i < arrayOfItems.length; i++) {
    for (let j = 0; j < arrayOfItems.length - 1 - i; ++j) {
      const [currItem, nextItem] = [arrayOfItems[j], arrayOfItems[j + 1]];
      if (currItem > nextItem) {
        swap(arrayOfItems, j, j + 1);
      }
    }
  }

  return arrayOfItems;
}
