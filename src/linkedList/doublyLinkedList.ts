import { LinkedListI, Node } from './types';

export class DoublyLinkedList<T> implements LinkedListI<T> {
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

  private pop(shouldReturnNode = false): Node<T> | undefined | T {
    if (this.tail === undefined) {
      return undefined;
    }

    const prevTail = this.tail;

    // update tail reference
    this.tail = prevTail.prev;
    if (this.tail !== undefined) this.tail.next = undefined;

    prevTail.prev = undefined;
    this.length--;

    // Update head and tail
    if (this.length === 0) this.head = this.tail;

    return shouldReturnNode ? prevTail : prevTail.value;
  }

  private shift(shouldReturnNode = false): Node<T> | undefined | T {
    if (this.head === undefined) {
      return undefined;
    }
    const prevHead = this.head;

    // update reference to head
    this.head = prevHead.next;
    if (this.head !== undefined) this.head.prev = undefined;

    prevHead.next = undefined;
    this.length--;

    // reset tail and head
    if (this.length === 0) this.tail = this.head;

    return shouldReturnNode ? prevHead : prevHead.value;
  }

  /**
   * removes the item from the list
   * @param {T} item - the item to remove
   * @param [returnNode=false] - boolean - if true, the removed node is
   * returned, otherwise the value of the removed node is returned
   * @returns The value of the node or Node that was removed.
   */
  remove(item: T, shouldReturnNode = false): Node<T> | T | undefined {
    if (this.head === undefined) {
      return undefined;
    }

    if (item === this.head.value) {
      return this.shift(shouldReturnNode);
    }
    if (item === this.tail?.value) {
      return this.pop(shouldReturnNode);
    }

    let currNode: Node<T> | undefined = this.head;
    while (currNode !== undefined) {
      const currValue = currNode.value;

      if (currValue === item) {
        this.length--;
        if (currNode.prev !== undefined) {
          const prevNode = currNode.prev;
          prevNode.next = currNode.next;
        }
        if (currNode.next !== undefined) {
          const nextNode = currNode.next;
          nextNode.prev = currNode.prev;
        }

        currNode.prev = undefined;
        currNode.next = undefined;
        return shouldReturnNode ? currNode : currValue;
      }
      currNode = currNode.next;
    }

    return undefined;
  }

  /**
   * removes the item at the given index from the list
   * @param {number} index - the index of the item to remove
   * @param [shouldReturnNode=false] - boolean - if true, the removed node is
   * returned, otherwise the value of the removed node is returned
   * @returns The value of the node or Node that was removed.
   */
  removeAt(index: number, shouldReturnNode = false): Node<T> | T | undefined {
    if (this.head === undefined) {
      return undefined;
    }

    if (index === 0) {
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
      return shouldReturnNode ? prevHead : prevHead.value;
    }

    let currNode = this.head;
    let currIndex = 0;
    while (currNode.next !== undefined) {
      const nextNode = currNode.next;
      const nextNodeValue = nextNode.value;
      if (currIndex + 1 === index) {
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
        return shouldReturnNode ? nextNode : nextNodeValue;
      }
      currNode = currNode.next;
      currIndex++;
    }
    return undefined;
  }
}

export default DoublyLinkedList;
