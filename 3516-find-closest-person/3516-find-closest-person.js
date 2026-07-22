/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    let dist1 =Math.abs(x - z) 
    let dist2 = Math.abs(y - z) 
    if(dist1===dist2) return 0;
    
    if (dist1 < dist2) {
        return 1
    } else {
        return 2
    }
};