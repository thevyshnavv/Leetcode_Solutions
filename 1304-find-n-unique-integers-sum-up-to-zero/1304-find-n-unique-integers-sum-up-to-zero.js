/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    result = []
    if(n%2===1){
        result.push(0);
    }

    let i=1
    while (result.length < n) {
    result.push(i);
    result.push(-i);
    i++;
  }return result 
};