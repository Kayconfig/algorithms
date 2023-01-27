import DoublyLinkedList from '@linkedList/doublyLinkedList';
import { Node } from '@linkedList/types';
import SinglyLinkedList from 'linkedList/singlyLinkedList';

describe('LinkedList', () => {
  describe('SinglyLinkedList', () => {
    const list = new SinglyLinkedList<number>();
    const values = [1, 2, 3, 4, 5, 6];
    test('should append item', () => {
      list.append(4);
      expect(list.getLength()).toBe(1);
      expect(list.getTail()).toBe(4);

      list.append(5);
      list.append(6);
      expect(list.getLength()).toBe(3);
      expect(list.getTail()).toBe(6);
    });

    test('should prepend item', () => {
      list.prepend(3);
      expect(list.getLength()).toBe(4);
      expect(list.getHead()).toBe(3);

      list.prepend(2);
      list.prepend(1);
      expect(list.getLength()).toBe(6);
      expect(list.getHead()).toBe(1);
    });

    test('should get item by index', () => {
      Array(6).forEach((_, index) => {
        expect(list.get(index)).toBe(values[index]);
      });
      const badIndex = 20;
      expect(list.get(badIndex)).toBeUndefined();
    });

    test('should remove item', () => {
      Array(6).forEach((_, index) => {
        expect(list.remove(values[index])).toBe(values[index]);
        expect(list.getLength()).toBe(values.length - 2 - index);
      });

      expect(list.remove(14)).toBeUndefined();
    });
  });

  describe('DoublyLinkedList', () => {
    const list = new DoublyLinkedList<number>();
    const values = [1, 2, 3, 4, 5, 6];
    test('should append item', () => {
      list.append(4);
      expect(list.getLength()).toBe(1);
      expect(list.getTail()).toBe(4);
      expect(list.getHead()).toBe(4);

      list.append(5);
      list.append(6);
      expect(list.getLength()).toBe(3);
      expect(list.getTail()).toBe(6);
    });

    test('should prepend item', () => {
      list.prepend(3);
      expect(list.getLength()).toBe(4);
      expect(list.getHead()).toBe(3);

      list.prepend(2);
      list.prepend(1);
      expect(list.getLength()).toBe(6);
      expect(list.getHead()).toBe(1);
    });

    test('should get item by index', () => {
      Array(6).forEach((_, index, arr) => {
        const shouldReturnNode = true;
        const node = list.get(index, shouldReturnNode) as Node<number>;
        expect(node.value).toBe(values[index]);
        if (index > 0) {
          expect(node.prev?.value).toBe(values[index - 1]);
        }
        if (index < arr.length - 1) {
          expect(node.next?.value).toBe(values[index + 1]);
        }
      });

      const badIndex = 20;
      expect(list.get(badIndex)).toBeUndefined();
    });

    test('should remove item', () => {
      Array(6).forEach((_, index) => {
        const shouldReturnNode = true;
        const removedNode = list.remove(
          values[index],
          shouldReturnNode
        ) as Node<number>;
        expect(removedNode.value).toBe(values[index]);
        expect(list.getLength()).toBe(values.length - 2 - index);
        expect(removedNode.prev).toBeUndefined();
        expect(removedNode.next).toBeUndefined();
      });

      expect(list.remove(14)).toBeUndefined();
    });
  });
});
