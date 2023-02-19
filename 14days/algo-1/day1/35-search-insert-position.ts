/**
 * https://leetcode.com/problems/search-insert-position
 */

function searchInsert(nums: number[], target: number): number {
  let minIndex = 0;
  let maxIndex = nums.length - 1;

  while (minIndex <= maxIndex) {
    let currentIndex = Math.floor((maxIndex - minIndex) / 2) + minIndex;
    let currentValue = nums[currentIndex];

    if (currentValue === target) {
      return currentIndex;
    }

    if (currentValue > target) {
      maxIndex = currentIndex - 1;
    } else {
      minIndex = currentIndex + 1;
    }
  }

  return minIndex;
}
