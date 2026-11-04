/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans =[]
    for(i=0;i<nums.length;i++){
        ans[i] = nums[nums[i]]
    }
    return ans
};