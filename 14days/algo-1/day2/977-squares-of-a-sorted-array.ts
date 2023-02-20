/**
 * https://leetcode.com/problems/squares-of-a-sorted-array
 */

function sortedSquares(nums: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];

    if (currentNumber < 0) {
      stack.push(Math.abs(currentNumber));
      continue;
    }

    while (stack.length && currentNumber > stack[stack.length - 1]) {
      result.push(stack.pop()! ** 2);
    }

    result.push(currentNumber ** 2);
  }

  while (stack.length) {
    result.push(stack.pop()! ** 2);
  }

  return result;
}
