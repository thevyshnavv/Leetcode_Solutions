/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = 0;
    for(let n of x.toString()){
        sum+=Number(n)
    }
    console.log("sum:"+sum)
    return x%sum===0?sum:-1
};