/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count =0

    for(let char of patterns){
        if(word.includes(char)) count++;
    }

    return count;
};