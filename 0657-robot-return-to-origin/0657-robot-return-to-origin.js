/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0
    let y = 0
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "R":
                x++;
                continue;
            case "L":
                x--;
                continue;
            case "U":
                y++;
                continue;
            case "D":
                y--;
                continue;
            default:
        }
    }
    return x === 0 && y === 0
};