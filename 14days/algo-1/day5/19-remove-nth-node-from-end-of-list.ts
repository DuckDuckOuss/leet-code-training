/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let cursor: ListNode | null = head;
  let prev: ListNode | null = null;
  let count = 1;

  if (!head!.next) {
    return null;
  }

  while (cursor!.next) {
    prev = cursor;
    cursor = cursor!.next;
    count++;
  }

  // TAIL is to be deleted
  if (n === 1) {
    prev!.next = null;
    return head;
  }

  // HEAD is to be deleted
  if (count === n) {
    return head!.next;
  }

  cursor = head;

  for (let i = 1; i < count - n; i++) {
    cursor = cursor!.next;
  }

  cursor!.next = cursor!.next!.next;

  return head;
}
