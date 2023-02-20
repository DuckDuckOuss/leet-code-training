/**
 * https://leetcode.com/problems/rotate-array
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const numberOfRotations = k % nums.length;
  const cache: number[] = [];

  for (let i = nums.length - numberOfRotations; i < nums.length; i++) {
    cache.push(nums[i]);
  }

  for (let i = 0; i < nums.length - numberOfRotations; i++) {
    cache.push(nums[i]);
  }

  for (let i = 0; i < cache.length; i++) {
    nums[i] = cache[i];
  }
}
