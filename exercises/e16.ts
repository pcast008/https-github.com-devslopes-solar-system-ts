// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find<T>(array: T[], callback: (element: T) => T) {
  for (const element of array) callback(element) ? element : undefined;
}
