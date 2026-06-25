/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
        let map = new Map();

    let prefix = 0;
    let ans = 0;


    map.set(0,1);


    for(let num of nums) {

        if(num === target) {
            prefix += 1;
        } 
        else {
            prefix -= 1;
        }


        for(let [sum,count] of map) {

            if(prefix - sum > 0) {
                ans += count;
            }
        }


        map.set(
            prefix,
            (map.get(prefix) || 0) + 1
        );
    }


    return ans;
};