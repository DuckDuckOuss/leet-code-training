/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii
 */

function reverseWords(s: string): string {
  let result: string = "";
  let stack: string[] = [];

  for (let i = 0; i <= s.length; i++) {
    if (s[i] != " " && i < s.length) {
      stack.push(s[i]);
    } else {
      while (stack.length) {
        result += stack.pop();
      }
      if (i < s.length) {
        result += " ";
      }
    }
  }

  return result;
}
