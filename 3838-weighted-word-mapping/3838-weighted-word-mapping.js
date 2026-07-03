/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let result = "";

    for (let word of words) {
        let sum = 0;

        for (let char of word) {
            let index = char.charCodeAt(0) - 97;

            sum += weights[index];
        }

        let value = sum % 26;

        result += String.fromCharCode(122 - value);
    }

    return result;
};