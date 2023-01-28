/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Node } from '@linkedList/types';

export interface QueueI<T> {
  enqueue: (item: T) => QueueI<T>;
  deque: (shouldReturnNode?: boolean) => Node<T> | T | undefined;
  peek: () => T | undefined;
  getLength: () => number;
}
