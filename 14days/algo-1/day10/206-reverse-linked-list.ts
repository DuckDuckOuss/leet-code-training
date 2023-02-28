/**
 * https://leetcode.com/problems/reverse-linked-list
 */

import { ListNode } from "../types";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  const stack: ListNode[] = [];

  if (!head || !head.next) {
    return head;
  }

  while (head) {
    stack.push(head);
    head = head.next;
  }

  let result = stack.pop()!;
  const resultHead = result;

  while (stack.length) {
    result.next = stack.pop()!;
    result.next.next = null;
    result = result.next;
  }

  return resultHead;
}
