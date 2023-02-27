/**
 * https://leetcode.com/problems/rotting-oranges
 */

function orangesRotting(grid: number[][]): number {
  let queue: Array<number[]> = [];
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length) {
    const currentQueueLength = queue.length;

    for (let i = 0; i < currentQueueLength; i++) {
      const [x, y] = queue.shift()!;
      const condidates = [
        [x - 1, y],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y],
      ];

      for (let [cx, cy] of condidates) {
        if (grid[cx]?.[cy] === 1) {
          grid[cx][cy] = 2;
          queue.push([cx, cy]);
        }
      }
    }

    if (queue.length) result++;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return result;
}
