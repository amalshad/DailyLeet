/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let score =0
    let str =n.toString()

    for(let num of str){
        score+=Number(num)
    }

    return score
};