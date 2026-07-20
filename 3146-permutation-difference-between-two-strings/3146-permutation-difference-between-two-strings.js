/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    const position = {};
    let difference = 0;

    // Store the index of each character in s
    for (let i = 0; i < s.length; i++) {
        position[s[i]] = i;
    }

    // Calculate the permutation difference
    for (let i = 0; i < t.length; i++) {
        difference += Math.abs(position[t[i]] - i);
    }

    return difference;
};
