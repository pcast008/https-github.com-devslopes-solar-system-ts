// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  let max = 0;
  let maxYear = 0;

  asteroids.reduce((acc, curr) => {
    const year = curr.discoveryYear;

    acc.has(year) ? acc.set(year, acc.get(year) + 1) : acc.set(year, 1);

    if (acc.get(year) > max) {
      max = acc.get(year);
      maxYear = year;
    }

    return acc;
  }, new Map());

  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
