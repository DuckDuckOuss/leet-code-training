/**
 * https://leetcode.com/problems/move-zeroes
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === 0) {
      let j = i;
      while (nums[j] === 0 && j < nums.length) {
        j++;
      }
      if (j !== nums.length) {
        let aux = nums[i];
        nums[i] = nums[j];
        nums[j] = aux;
      }
    }
    i++;
  }
}
