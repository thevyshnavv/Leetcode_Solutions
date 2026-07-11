/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelsSet = new Set(jewels)
    let count = 0
    for(let stone of stones){
        if(jewelsSet.has(stone)){
            count++
        }
    }return count
};