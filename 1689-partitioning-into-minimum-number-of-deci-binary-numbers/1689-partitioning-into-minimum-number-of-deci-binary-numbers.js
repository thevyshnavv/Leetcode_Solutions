/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let maxDigit = 0;

    for (let digit of n) {
        maxDigit = Math.max(maxDigit, Number(digit));
    }

    return maxDigit;
};