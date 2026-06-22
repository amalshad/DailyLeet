/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let count = {};

    for (let char of text) {
        count[char] = (count[char] || 0) + 1;
    }

    let b = count['b'] || 0;
    let a = count['a'] || 0;
    let l = count['l'] || 0;
    let o = count['o'] || 0;
    let n = count['n'] || 0;

    return Math.min(b,a,Math.floor(l / 2),Math.floor(o / 2),n);
};