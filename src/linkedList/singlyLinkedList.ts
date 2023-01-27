import { LinkedList, Node } from './types';

export class SinglyLinkedList<T> implements LinkedList<T> {
  private head: Node<T> | undefined;

  private tail: Node<T> | undefined;

  private length: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  /**
   * If the head exists, return the value of the head, otherwise return undefined.
   * @returns The value of the head node.
   */
  getHead(): T | undefined {
    return this.head?.value;
  }

  /**
   * If the tail exists, return its value
   * @returns The value of the tail node.
   */
  getTail(): T | undefined {
    return this.tail?.value;
  }

  /**
   * adds new item to the end of list
   * @param {T} item - T - the item to be added to the list
   * @returns The value of the node at the given index.
   */
  append(item: T): void {
    const node: Node<T> = { value: item };
    this.length++;
    if (this.tail === undefined) {
      this.head = node;
      this.tail = this.head;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  /**
   * adds new item to the beginning of the list.
   * @param {T} item - T - the item to be added to the list
   */
  prepend(item: T): void {
    const node: Node<T> = { value: item };
    this.length++;

    node.next = this.head;
    this.head = node;

    if (this.tail === undefined) {
      this.tail = this.head;
    }
  }

  /**
   * GetLength() returns the number of nodes in the list.
   * @returns The length of the list.
   */
  getLength(): number {
    return this.length;
  }

  /**
   * returns the value of the node at the specified position
   * @param {number} index - number - The index of the item you want to get.
   * @returns The value of the node at the given index if index exist,
   * otherwise it returns undefined
   */
  get(index: number): T | undefined {
    let currNode = this.head;
    let currIndex = 0;
    do {
      if (currIndex === index) {
        return currNode?.value;
      }

      currNode = currNode?.next;
      currIndex++;
    } while (currNode !== undefined);

    return undefined;
  }

  /**
   * removes item from the list if item exists
   * @param {T} item - The item to remove from the list.
   * @returns The value of the node that was removed if value exist otherwise returns undefined.
   */
  remove(item: T): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    if (this.head?.value === item) {
      const prevHead = this.head;
      this.head = prevHead.next;
      // head node is also the tail node, update tail as well
      if (this.length === 1) {
        this.tail = this.head;
      }
      // disconnect previous head
      prevHead.next = undefined;
      // update length;
      this.length--;
      return prevHead.value;
    }

    let currNode = this.head;
    while (currNode?.next !== undefined) {
      const nextNode = currNode.next;
      const nextNodeValue = nextNode.value;
      if (nextNodeValue === item) {
        currNode.next = nextNode.next;
        if (nextNode.next === undefined) {
          // we about to remove the tail, update tail to point to head
          this.tail = currNode;
        }
        this.length--;
        return nextNodeValue;
      }
      currNode = currNode.next;
    }

    return undefined;
  }
}

export default SinglyLinkedList;
