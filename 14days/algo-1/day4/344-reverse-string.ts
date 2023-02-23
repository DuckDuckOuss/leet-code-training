/**
 * https://leetcode.com/problems/reverse-string
 */

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let aux;
  let inv;

  for (let i = 0; i < s.length / 2; i++) {
    aux = s[i];
    inv = s.length - 1 - i;
    s[i] = s[inv];
    s[inv] = aux;
  }
}
