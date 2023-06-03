/* eslint-disable prefer-destructuring */
import bfs from 'BT-BFS';
import { BTNode } from 'binaryTree/types';

function createBTNode<T>(value: T): BTNode<T> {
  return {
    value,
    left: null,
    right: null,
  };
}

function createTree(): BTNode<number> {
  const nodes = [3, 10, 8, 12, 5, 7, 9].map((value) => createBTNode(value));
  const parentNode = nodes[0];
  parentNode.left = nodes[1];
  parentNode.right = nodes[2];
  nodes[1].left = nodes[3];
  nodes[1].right = nodes[4];
  nodes[2].left = nodes[5];
  nodes[2].right = nodes[6];

  return parentNode;
}

let parentNode: BTNode<number>;
beforeEach(() => {
  // create the tree
  parentNode = createTree();
});

describe('BFS', () => {
  describe('test for present needles', () => {
    [3, 10, 8, 12, 5, 7, 9].forEach((needle) => {
      test(`should find the needle: ${needle}`, (done) => {
        const expectedResult = true;
        const result = bfs(parentNode, needle);
        expect(result).toEqual(expectedResult);
        done();
      });
    });
  });
});
