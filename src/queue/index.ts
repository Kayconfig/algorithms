import { LinkedListI, Node } from '@linkedList/types';
import { QueueI } from './types';

export class Queue<T> implements QueueI<T> {
  constructor(readonly list: LinkedListI<T>) {}

  enqueue(item: T): Queue<T> {
    this.list.append(item);
    return this;
  }

  deque(shouldReturnNode = false): Node<T> | T | undefined {
    return this.list.removeAt(0, shouldReturnNode);
  }

  peek(): T | undefined {
    return this.list.getHead();
  }

  getLength(): number {
    return this.list.getLength();
  }
}

export default Queue;
