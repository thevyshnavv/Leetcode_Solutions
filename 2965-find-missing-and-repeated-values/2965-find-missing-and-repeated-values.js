/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const n = grid.length
    const size = n * n
    const count = new Array(size + 1).fill(0)
    for (let row of grid) {
        for (let num of row) {
            count[num]++
        }
    } let repeating = -1;
    let missing = -1;
    for (let i = 1; i <= size; i++) {
        if (count[i] === 2) repeating = i
        if (count[i] === 0) missing = i
    } return [repeating, missing]
};