/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max = 0
    let nexted = 0
    for(let i=0; i<s.length; i++){
        if(s[i]==="("){
            max++
        }
        if(max>nexted){
            nexted = max
        }
        if(s[i]===")"){
            max--
        }
    }return nexted
};