/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
        let sum1=0;
    let sum2=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>9){
            sum1+=nums[i]
        }else{
            sum2+=nums[i];
        }

        
    }
    if(sum1>sum2 || sum1<sum2){
        return true;
    }else{
        return false
    }
 
};