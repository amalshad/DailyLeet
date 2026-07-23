/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let ans = "";

    for (let word of words) {
        let sum = 0;

        for (let ch of word) {
            sum = (sum + weights[ch.charCodeAt(0) - 97]) % 26;
        }
        ans += String.fromCharCode(97 + (25 - sum));
    }

    return ans;
};