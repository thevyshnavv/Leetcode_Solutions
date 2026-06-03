/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
    let count = 0
    let n = 0
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "L") count--
        if (moves[i] === "R") count++
        if (moves[i] === "_") n++
    }return Math.abs(count)+n
};