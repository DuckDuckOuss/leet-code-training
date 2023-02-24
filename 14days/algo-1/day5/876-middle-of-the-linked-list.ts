/**
 * https://leetcode.com/problems/middle-of-the-linked-list
 */

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

import { ListNode } from "../types";

function middleNode(head: ListNode | null): ListNode | null {
  let count = 0;
  let cursor: ListNode | null = head;

  while (cursor !== null) {
    count++;
    cursor = cursor.next;
  }

  cursor = head;

  for (let i = 0; i < Math.floor(count / 2); i++) {
    cursor = cursor!.next;
  }

  return cursor;
}
