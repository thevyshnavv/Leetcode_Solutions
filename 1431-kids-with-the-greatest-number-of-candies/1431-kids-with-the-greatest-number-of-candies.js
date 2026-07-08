/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let result = []
    let largest = (candies) => {
        lar = 0
        for (let i = 0; i < candies.length; i++) {
            if (lar < candies[i]) lar = candies[i]
        } return lar
    }
    for (let p of candies) {
        if (p + extraCandies >= largest(candies)) {
            result.push(true)
        } else {
            result.push(false)
        }
    } return result
};