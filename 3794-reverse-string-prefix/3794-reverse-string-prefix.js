/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let firstPart = s.slice(0,k)
    let secondPart = s.slice(k)
    firstPart = firstPart.split("").reverse().join("")
    return firstPart + secondPart
};