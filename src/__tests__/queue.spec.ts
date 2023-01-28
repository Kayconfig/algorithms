import SinglyLinkedList from '@linkedList/singlyLinkedList';
import { QueueI } from '@queue/types';
import Queue from 'queue';

let queue: QueueI<number>;

describe('Queue', () => {
  beforeAll(() => {
    const singlyLinkedList = new SinglyLinkedList<number>();
    queue = new Queue<number>(singlyLinkedList);
  });

  test('should enqueue and peek item', () => {
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    expect(queue.getLength()).toBe(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    expect(queue.getLength()).toBe(2);

    queue
      .enqueue(3)
      .enqueue(4)
      .enqueue(5);

    expect(queue.peek()).toBe(1);
    expect(queue.getLength()).toBe(5);
  });

  test('should deque item', () => {
    expect(queue.deque()).toBe(1);
    expect(queue.deque()).toBe(2);
    queue.deque();

    expect(queue.deque()).toBe(4);
    expect(queue.peek()).toBe(5);
  });
});
