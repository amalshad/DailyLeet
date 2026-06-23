/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleaned = "";

    for (let char of s) {
        if ((char >= 'a' && char <= 'z') ||(char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        ) {
            cleaned += char.toLowerCase();
        }
    }

    let reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
};