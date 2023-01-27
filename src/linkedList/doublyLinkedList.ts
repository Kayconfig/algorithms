import { LinkedList, Node } from './types';

export class DoublyLinkedList<T> implements LinkedList<T> {
  private head: Node<T> | undefined;

  private tail: Node<T> | undefined;

  private length: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  /**
   * @returns The value of the head node.
   */
  getHead(): T | undefined {
    return this.head?.value;
  }

  /**
   * @returns The value of the tail node.
   */
  getTail(): T | undefined {
    return this.tail?.value;
  }

  /** adds item to the end of the list
   * @param {T} item - T - the item to be added to the list
   */
  append(item: T): void {
    const node: Node<T> = { value: item };
    this.length++;
    if (this.tail === undefined) {
      this.head = node;
      this.tail = this.head;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;

    this.tail = node;
  }

  /** adds item to the beginning of the list
   * @param {T} item - T - the item to be added to the list
   */
  prepend(item: T): void {
    const node: Node<T> = { value: item };
    this.length++;
    if (this.head === undefined) {
      this.head = node;
      this.tail = this.head;
      return;
    }

    node.next = this.head;
    this.head.prev = node;

    this.head = node;
  }

  /**
   *
   * @returns the length of list
   */
  getLength(): number {
    return this.length;
  }

  /**
   * gets the value of the node or the Node at the given index.
   * @param {number} index - The index of the node you want to get.
   * @param [returnNode=false] - boolean - if true, the function will return the node at the given
   * index. If false, it will return the value of the node at the given index.
   * @returns The value of the node at the given index.
   */

  get(index: number, returnNode = false): Node<T> | T | undefined {
    let currIndex = 0;
    let currNode = this.head;
    while (currNode !== undefined) {
      if (currIndex === index) {
        return returnNode ? currNode : currNode.value;
      }
      currNode = currNode.next;
      currIndex++;
    }

    return undefined;
  }

  /**
   * removes the item from the list
   * @param {T} item - the item to remove
   * @param [returnNode=false] - boolean - if true, the removed node is
   * returned, otherwise the value of the removed node is returned
   * @returns The value of the node or Node that was removed.
   */
  remove(item: T, returnNode = false): Node<T> | T | undefined {
    if (this.head === undefined) {
      return undefined;
    }

    if (this.head.value === item) {
      const prevHead = this.head;
      this.head = this.head.next;
      if (this.head !== undefined) {
        this.head.prev = undefined;
      }
      this.length--;

      if (this.length === 1 && this.tail !== undefined) {
        this.tail.prev = undefined;
      }

      prevHead.next = undefined;
      return returnNode ? prevHead : prevHead.value;
    }

    let currNode = this.head;
    while (currNode.next !== undefined) {
      const nextNode = currNode.next;
      const nextNodeValue = nextNode.value;
      if (nextNodeValue === item) {
        this.length--;
        currNode.next = nextNode.next;
        if (nextNode.next !== undefined) {
          nextNode.next.prev = currNode;
        } else {
          // nextNode is the tail, update tail reference
          this.tail = currNode;
        }

        // diconnect nextNode
        nextNode.next = undefined;
        nextNode.prev = undefined;
        return returnNode ? nextNode : nextNode.value;
      }
      currNode = currNode.next;
    }
    return undefined;
  }
}

export default DoublyLinkedList;
