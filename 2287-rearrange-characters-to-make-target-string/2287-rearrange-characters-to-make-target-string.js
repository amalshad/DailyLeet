/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let sCount = {};
    let tCount = {};

    for (let char of s) {
        sCount[char] = (sCount[char] || 0) + 1;
    }

    for (let char of target) {
        tCount[char] = (tCount[char] || 0) + 1;
    }

    let ans = Infinity;

    for (let char in tCount) {
        ans = Math.min(ans,Math.floor((sCount[char] || 0) / tCount[char]));
    }

    return ans;
};