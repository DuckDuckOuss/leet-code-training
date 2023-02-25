/**
 * https://leetcode.com/problems/flood-fill
 */

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  if (image[sr][sc] === color) {
    return image;
  }

  const originalColor = image[sr][sc];
  const toFill = [[sr, sc]];

  while (toFill.length) {
    const current = toFill.pop()!;
    const condidates = [
      [current[0] - 1, current[1]],
      [current[0], current[1] - 1],
      [current[0], current[1] + 1],
      [current[0] + 1, current[1]],
    ];
    for (let condidate of condidates) {
      if (
        image[condidate[0]] &&
        image[condidate[0]][condidate[1]] === originalColor
      ) {
        toFill.push(condidate);
      }
    }
    image[current[0]][current[1]] = color;
  }

  return image;
}
