/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
    let L = 0;
    let R = 0;
    let dash = 0
    for (let i = 0; i < moves.length; i++) {
        if(moves[i]==="L")L++
        else if(moves[i]==="R")R++
        else dash++
    }
    return Math.abs(L-R)+dash
};