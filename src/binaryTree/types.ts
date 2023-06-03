/* eslint-disable @typescript-eslint/member-delimiter-style */
export interface BTNode<T> {
  value: T;
  left: BTNode<T> | null;
  right: BTNode<T> | null;
}
