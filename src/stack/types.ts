/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Node } from '@linkedList/types';

export interface StackI<T> {
  push: (item: T) => void;
  pop: (shouldReturnNode?: boolean) => Node<T> | T | undefined;
  peek: () => T | undefined;
  getLength: () => number;
}
