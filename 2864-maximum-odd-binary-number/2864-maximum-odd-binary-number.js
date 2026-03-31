/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let once = s.split('').filter((element) => "1" === element).length
    let zeros = s.length - once
    return '1'.repeat(once - 1)+'0'.repeat(zeros)+'1'
};