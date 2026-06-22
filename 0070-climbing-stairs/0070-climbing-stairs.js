/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev = 1;
    let curr = 2;

    for (let i = 3; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return n === 1 ? prev : curr;
};