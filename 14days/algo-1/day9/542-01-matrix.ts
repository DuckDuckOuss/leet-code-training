/**
 * https://leetcode.com/problems/01-matrix
 */

function updateMatrix(mat: number[][]): number[][] {
  const queue: number[][] = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        continue;
      }
      mat[i][j] = -1;
    }
  }

  let counter = 0;

  while (queue.length) {
    const currentQueueLength = queue.length;

    for (let i = 0; i < currentQueueLength; i++) {
      const [x, y] = queue.shift()!;
      if (mat[x][y] === -1) {
        mat[x][y] = counter;
        continue;
      }
      const condidates = [
        [x - 1, y],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y],
      ];

      for (let [cx, cy] of condidates) {
        if (!mat[cx]?.[cy]) {
          continue;
        }

        queue.push([cx, cy]);
      }
    }

    counter++;
  }

  return mat;
}
