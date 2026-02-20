/**
 * @param {string} s
 * @return {number}
 */
function countBinarySubstrings(s) {
  let prev = 0;      // previous group length
  let curr = 1;      // current group length
  let result = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      curr++; // same group
    } else {
      result += Math.min(prev, curr);
      prev = curr;
      curr = 1;
    }
  }

  result += Math.min(prev, curr);
  return result;
}