/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0
    let product = 1
    let str = n.toString()
    for(let i =0; i<str.length; i++){
        sum +=Number(str[i])
        product*=Number(str[i])
    }return product - sum
};