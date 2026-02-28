/**
 * @param {number} n
 * @return {boolean}
 */
function isThree(n) {
    let root = Math.sqrt(n);

    // must be perfect square
    if (root !== Math.floor(root)) return false;

    // check if root is prime
    for (let i = 2; i <= Math.sqrt(root); i++) {
        if (root % i === 0) return false;
    }

    return root > 1;
}