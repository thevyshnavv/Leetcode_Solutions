/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0
    let num = String(n)
    for(let i=0; i<num.length; i++){
        product*=num[i]
        sum+=Number(num[i])
    }
    let res=product - sum
    return res
};