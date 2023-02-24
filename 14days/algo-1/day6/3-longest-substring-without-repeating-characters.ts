/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters
 */

function lengthOfLongestSubstring(s: string): number {
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let cache = new Set();
    let j = i;

    while (!cache.has(s[j]) && j < s.length) {
      cache.add(s[j]);
      j++;
    }

    max = Math.max(max, j - i);
  }

  return max;
}
