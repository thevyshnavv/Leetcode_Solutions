/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let sum = 0
    while (num > 9) {
        sum = num.toString().split("")
        .reduce((sum, element) => sum + Number(element), 0)
        num = sum
    }return num
};