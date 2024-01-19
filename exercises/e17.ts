export const minBy = <T, N>(array: T[], cb: (value: T) => N) => {
  return array.length !== 0
    ? array.reduce((acc, curr) => (cb(acc) <= cb(curr) ? acc : curr))
    : undefined;
};

export function maxBy<T, N>(array: T[], cb: (value: T) => N) {
  return array.length !== 0
    ? array.reduce((acc, curr) => (cb(acc) >= cb(curr) ? acc : curr))
    : undefined;
}
