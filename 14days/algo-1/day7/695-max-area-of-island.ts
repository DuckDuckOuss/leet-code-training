/**
 * https://leetcode.com/problems/max-area-of-island
 */

function maxAreaOfIsland(grid: number[][]): number {
  const visited = new Set<string>();

  const calculateIslandSize = (i, j) => {
    let count = 0;
    let toVisit = [[i, j]];
    while (toVisit.length) {
      const current = toVisit.pop()!;
      if (visited.has(`${current[0]}-${current[1]}`)) {
        continue;
      }
      visited.add(`${current[0]}-${current[1]}`);
      count++;
      const condidates = [
        [current[0] - 1, current[1]],
        [current[0], current[1] - 1],
        [current[0], current[1] + 1],
        [current[0] + 1, current[1]],
      ];

      for (let condidate of condidates) {
        if (
          grid[condidate[0]]?.[condidate[1]] === 1 &&
          !visited.has(`${condidate[0]}-${condidate[1]}`)
        ) {
          toVisit.push(condidate);
        }
      }
    }
    return count;
  };

  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0 || visited.has(`${i}-${j}`)) {
        continue;
      }
      maxArea = Math.max(maxArea, calculateIslandSize(i, j));
    }
  }

  return maxArea;
}
