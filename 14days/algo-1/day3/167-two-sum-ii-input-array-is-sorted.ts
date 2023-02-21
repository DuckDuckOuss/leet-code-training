/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 */

function twoSum(numbers: number[], target: number): number[] {
  const passed: Map<number, number> = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const currentTarget = target - numbers[i];

    if (passed.has(currentTarget)) {
      return [passed.get(currentTarget)! + 1, i + 1];
    }

    passed.set(numbers[i], i);
  }

  return [];
}
