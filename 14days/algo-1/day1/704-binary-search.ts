/**
 * https://leetcode.com/problems/binary-search
 */

function search(nums: number[], target: number): number {
  let minIndex = 0,
    maxIndex = nums.length - 1;

  while (minIndex <= maxIndex) {
    const midIndex = Math.floor((maxIndex - minIndex) / 2) + minIndex;
    const midValue = nums[midIndex];

    if (midValue === target) {
      return midIndex;
    }

    if (midValue > target) {
      maxIndex = midIndex - 1;
    } else {
      minIndex = midIndex + 1;
    }
  }

  return -1;
}
