/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    let freq = {}
    let pairs = 0
    let leftover = 0
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1
    }
    for (let key in freq) {
        pairs += Math.floor(freq[key] / 2)
        leftover += freq[key] % 2
    }
    return [pairs, leftover]
};