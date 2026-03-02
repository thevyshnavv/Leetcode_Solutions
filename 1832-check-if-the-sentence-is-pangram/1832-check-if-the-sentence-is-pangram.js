/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let count = new Array(26).fill(0)
    for(let i = 0; i<sentence.length; i++){
        let index = sentence.charCodeAt(i)-97
        count[index] = 1
    } 
for(let i=0; i<26; i++){
    if(count[i]===0){
        return false
    }
}return true
};