/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    const friendSet = new Set(friends)
    const result = []
    for(const id of order){
        if(friendSet.has(id)){
            result.push(id)
        }
    }return result
};