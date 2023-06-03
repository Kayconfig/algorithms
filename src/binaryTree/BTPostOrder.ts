import { BTNode } from './types';

function walk(currNode: BTNode<number> | null, path: number[]): number[] {
  // base case
  if (currNode === null) {
    return path;
  }

  // pre-recurse
  // recurse
  walk(currNode.left, path);
  walk(currNode.right, path);
  path.push(currNode.value);

  // post-recurse

  return path;
}

export default function BTPostOrder(node: BTNode<number>): number[] {
  return walk(node, []);
}
