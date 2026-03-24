/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let row = 0;
    let col = n - 1;
    let count = 0;

    while (row < m && col >= 0) {
        if (grid[row][col] < 0) {
            // all elements below are negative
            count += (m - row);
            col--; // move left
        } else {
            row++; // move down
        }
    }

    return count;
};