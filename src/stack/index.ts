import SinglyLinkedList from '@linkedList/singlyLinkedList';
import { Node } from '@linkedList/types';
import { StackI } from './types';

export class Stack<T> implements StackI<T> {
  constructor(readonly list: SinglyLinkedList<T>) {}

  push(item: T): void {
    this.list.append(item);
  }

  pop(shouldReturnNode = false): Node<T> | T | undefined {
    return this.list.removeAt(this.list.getLength() - 1, shouldReturnNode);
  }

  peek(): T | undefined {
    return this.list.getTail();
  }

  getLength(): number {
    return this.list.getLength();
  }
}

export default Stack;
