import { Node } from '@linkedList/types';
import { SinglyLinkedList } from 'linkedList';
import { QueueI } from './types';

export class Queue<T> implements QueueI<T> {
  private readonly list: SinglyLinkedList<T>;

  constructor() {
    this.list = new SinglyLinkedList();
  }

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
