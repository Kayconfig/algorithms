/* eslint-disable operator-linebreak */
import SinglyLinkedList from '@linkedList/singlyLinkedList';
import Queue from '@queue/index';
import { BTNode } from 'binaryTree/types';

type NodeType = BTNode<number>;

export default function bfs(head: NodeType, needle: number): boolean {
  const queue = new Queue<NodeType>(new SinglyLinkedList<NodeType>());
  queue.enqueue(head);
  while (queue.getLength() > 0) {
    const curr = queue.deque() as NodeType;
    const needleFound =
      curr.value === needle ||
      curr.left?.value === needle ||
      curr.right?.value === needle;

    if (needleFound) {
      return true;
    }

    if (curr.left !== null) queue.enqueue(curr.left);
    if (curr.right !== null) queue.enqueue(curr.right);
  }
  return false;
}
