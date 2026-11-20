/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let root = 0;

    for (let i = 1; i <= n; i++) {
        if (i * i === n) {
            root = i;
            break;
        }
    }

    if (root === 0) {
        return false;
    }

    let count = 0;

    for (let i = 1; i <= root; i++) {
        if (root % i === 0) {
            count++;
        }
    }

    return count === 2;
};