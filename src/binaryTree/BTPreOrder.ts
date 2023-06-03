import { BTNode } from './types';

function walk(currNode: BTNode<number> | null, path: number[]): number[] {
  // base case
  if (currNode === null) {
    return path;
  }

  // pre-recurse
  path.push(currNode.value);
  // recurse
  walk(currNode.left, path);
  walk(currNode.right, path);

  // post-recurse

  return path;
}

export default function BTPreOrder(node: BTNode<number>): number[] {
  return walk(node, []);
}
