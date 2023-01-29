import SinglyLinkedList from '@linkedList/singlyLinkedList';
import Stack from 'stack';
import { StackI } from 'stack/types';

describe('Stack', () => {
  let stack: StackI<number>;
  const items = [2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16];

  beforeAll(() => {
    const list = new SinglyLinkedList<number>();
    stack = new Stack(list);
  });

  test('should push to stack', () => {
    items.forEach((item, index) => {
      stack.push(item);

      expect(stack.peek()).toBe(item);
      expect(stack.getLength()).toBe(index + 1);
    });
  });

  test('should pop from stack', () => {
    for (let index = items.length - 1; index >= 0; index--) {
      const item = items[index];

      expect(stack.getLength()).toBe(index + 1);
      expect(stack.pop()).toBe(item);
      expect(stack.getLength()).toBe(index);
    }
  });
});
