/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let answer = []
    for(let i=0; i<boxes.length; i++){
    let moves = 0
    for(let j=0; j<boxes.length; j++){
        if(boxes[j]==="1")moves+=Math.abs(i-j)
    }answer.push(moves)
    }return answer
};