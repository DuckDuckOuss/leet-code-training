/**
 * https://leetcode.com/problems/merge-two-sorted-lists
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  const queue: ListNode[] = [];

  while (list1 || list2) {
    if (!list2 || (list1 && list1.val <= list2.val)) {
      queue.push(list1!);
      list1 = list1?.next!;
      continue;
    }
    if (!list1 || (list2 && list1.val > list2.val)) {
      queue.push(list2);
      list2 = list2?.next;
      continue;
    }
  }

  let result: ListNode = queue.shift()!;
  const resultHead: ListNode = result;

  while (queue.length) {
    result.next = queue.shift()!;
    result = result.next;
  }

  return resultHead;
}
