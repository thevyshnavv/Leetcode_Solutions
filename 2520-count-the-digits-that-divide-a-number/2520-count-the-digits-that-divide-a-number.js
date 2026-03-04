/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    result = []
    for(let n of String(num)){
        if(num%n===0){
            result.push(n)
        }
    }
    return result.length
};