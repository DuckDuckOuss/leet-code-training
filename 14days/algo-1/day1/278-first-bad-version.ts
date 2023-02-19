/**
 * https://leetcode.com/problems/first-bad-version
 */

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: (n: number) => boolean) {
  return function (n: number): number {
    let min = 1;
    let max = n;

    while (min <= max) {
      const current = Math.floor((max - min) / 2) + min;

      if (isBadVersion(current)) {
        max = current - 1;
      } else {
        min = current + 1;
      }
    }

    return min;
  };
};
