/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let large = a<b?b:a
    let count = 0
    for(let i=1; i<=large; i++){
        if(a%i===0&&b%i===0)count++
    }return count 
};