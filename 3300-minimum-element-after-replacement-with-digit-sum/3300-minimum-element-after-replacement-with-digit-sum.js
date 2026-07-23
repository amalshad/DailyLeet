/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let answer = Infinity;

    for (let num of nums) {
        let sum = 0;
        let temp = num;

        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        answer = Math.min(answer, sum);
    }

    return answer;
};