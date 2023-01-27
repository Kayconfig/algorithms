/* eslint-disable @typescript-eslint/member-delimiter-style */
export interface LinkedList<T> {
  getHead?: () => T | undefined;
  getTail?: () => T | undefined;
  append: (item: T) => void;
  prepend: (item: T) => void;
  getLength: () => number;
  get: (index: number) => Node<T> | T | undefined;
  remove: (item: T) => Node<T> | T | undefined;
}

export interface Node<T> {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
}
