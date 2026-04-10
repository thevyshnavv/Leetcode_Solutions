/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let first = ""
    for(let w of words){
        first+=w[0]
    }
    return first === s
};