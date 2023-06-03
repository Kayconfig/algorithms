/* eslint-disable prefer-destructuring */
import BTInOrder from 'binaryTree/BTInOrder';
import BTPostOrder from 'binaryTree/BTPostOrder';
import BTPreOrder from 'binaryTree/BTPreOrder';
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

describe('BTPreOrder', () => {
  test('should traverse the graph pre-order', (done) => {
    const expectedResult = [3, 10, 12, 5, 8, 7, 9];
    const result = BTPreOrder(parentNode);
    expect(result).toEqual(expectedResult);
    done();
  });
});

describe('BTInOrder', () => {
  test('should traverse the graph in-order', (done) => {
    const expectedResult = [12, 10, 5, 3, 7, 8, 9];
    expect(BTInOrder(parentNode)).toEqual(expectedResult);
    done();
  });
});

describe('BTPostOrder', () => {
  test('should traverse the graph post-order', (done) => {
    const expectedResult = [12, 5, 10, 7, 9, 8, 3];
    expect(BTPostOrder(parentNode)).toEqual(expectedResult);
    done();
  });
});
