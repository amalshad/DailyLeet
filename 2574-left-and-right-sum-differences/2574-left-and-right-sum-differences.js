/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
 let total = 0;

    for(let num of nums){
        total += num;
    }

    let left = 0;
    let right = total;

    let ans = [];

    for(let num of nums){
        
        right -= num;
        ans.push(Math.abs(left - right));
        left += num;
    }

    return ans;
};