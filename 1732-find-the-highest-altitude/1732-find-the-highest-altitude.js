/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let curr =0
    let alt=0

    for(let num of gain){
        curr+=num

        alt =Math.max(alt,curr)
    }
    return alt
};