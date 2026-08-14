/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let left = 0;
    let maxLength = 0;

    let count = {};

    for (let right = 0; right < s.length; right++) {

        count[s[right]] = (count[s[right]] || 0) + 1;

        // If current character appears more than 2 times
        while (count[s[right]] > 2) {
            count[s[left]]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};