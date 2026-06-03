/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x>=0&&x.toString().split("").reverse().join("")===x.toString())return true
    else return false 
};