import { BTNode } from './types';

function walk(currNode: BTNode<number> | null, path: number[]): number[] {
  // base case
  if (currNode === null) {
    return path;
  }

  // pre-recurse
  // recurse
  walk(currNode.left, path);
  path.push(currNode.value);
  walk(currNode.right, path);

  // post-recurse

  return path;
}

export default function BTInOrder(node: BTNode<number>): number[] {
  return walk(node, []);
}
