/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let map = {};
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        map[char] = (map[char] || 0) + 1;

        while (map[char] > 2) {
            map[s[left]]--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};