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
    });

    test('should remove item', () => {
      Array(6).forEach((_, index) => {
        expect(list.remove(values[index])).toBe(values[index]);
        expect(list.getLength()).toBe(values.length - 2 - index);
      });
    });
  });
});
