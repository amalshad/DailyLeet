/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let ans =[]
    nums.sort((a, b) => a - b);

    for(let i=0;i<nums.length;i+=2){
        ans.push(nums[i+1])
        ans.push(nums[i])
    }
    return ans
};