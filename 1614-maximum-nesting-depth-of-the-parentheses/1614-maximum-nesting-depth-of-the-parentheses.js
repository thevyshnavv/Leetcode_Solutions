/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let maxDepth = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]==="("){
            depth++
            if(depth>=maxDepth){
                maxDepth=depth
            }
        }else if(s[i]===")"){
            depth--
        }
        
    }return maxDepth
};
console.log(maxDepth("(1+(2*3)+((8)/4))+1"))