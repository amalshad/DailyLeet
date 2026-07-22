/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    return Math.abs(y-z)<Math.abs(x-z)?2:Math.abs(y-z)>Math.abs(x-z)?1:0;
};