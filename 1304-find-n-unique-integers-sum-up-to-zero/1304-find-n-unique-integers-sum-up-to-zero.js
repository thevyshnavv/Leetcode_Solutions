/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let result = []
    if (n % 2 !== 0) {
        result.push(0)
    }
    i = 1;
    while (result.length < n) {
        result.push(-i)
        result.push(i)
        i++
    } return result
};