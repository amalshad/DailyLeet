/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    let count = new Map();

    for (let i = 0; i <= nums.length - k; i++) {

        let set = new Set();

        // Create one subarray
        for (let j = i; j < i + k; j++) {
            set.add(nums[j]);
        }

        // Count this subarray for every unique number
        for (let num of set) {
            count.set(num, (count.get(num) || 0) + 1);
        }
    }

    let answer = -1;

    for (let [num, freq] of count) {
        if (freq === 1) {
            answer = Math.max(answer, num);
        }
    }

    return answer;
};