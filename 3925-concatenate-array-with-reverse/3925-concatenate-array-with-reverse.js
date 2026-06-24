/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    let ans=[...nums,...nums.reverse()]
    return ans
};