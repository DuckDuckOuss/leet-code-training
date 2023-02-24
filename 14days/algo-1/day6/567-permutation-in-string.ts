/**
 * https://leetcode.com/problems/permutation-in-string
 */

function areEqual(c1: Record<string, number>, c2: Record<string, number>) {
  const keys1 = Object.keys(c1);
  const keys2 = Object.keys(c2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (c1[key] !== c2[key]) {
      return false;
    }
  }

  return true;
}

function checkInclusion(s1: string, s2: string): boolean {
  if (s1 === s2) {
    return true;
  }

  const count: Record<string, number> = {};

  for (let i = 0; i < s1.length; i++) {
    if (!count[s1[i]]) {
      count[s1[i]] = 0;
    }
    count[s1[i]]++;
  }

  for (let i = 0; i < s2.length; i++) {
    let tmpCount: Record<string, number> = {};

    let j = i;

    while (
      count[s2[j]] &&
      (!tmpCount[s2[j]] || tmpCount[s2[j]] < count[s2[j]])
    ) {
      if (!tmpCount[s2[j]]) {
        tmpCount[s2[j]] = 0;
      }
      tmpCount[s2[j]]++;
      j++;
    }

    if (areEqual(count, tmpCount)) {
      return true;
    }
  }

  return false;
}
