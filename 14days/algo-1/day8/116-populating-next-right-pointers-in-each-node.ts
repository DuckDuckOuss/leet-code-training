/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node
 */

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// @ts-nocheck

function connect(root: Node | null): Node | null {
  if (!root) {
    return root;
  }

  let queue: Node[] = [root];

  while (queue.length) {
    const currentQueueLength = queue.length;

    for (let i = 0; i < currentQueueLength; i++) {
      const currentNode = queue.shift()!;
      currentNode.next = i === currentQueueLength - 1 ? null : queue[0];
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  return root;
}
