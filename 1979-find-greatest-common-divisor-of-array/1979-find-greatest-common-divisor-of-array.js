/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let div =0
    let small =Math.min(...nums)
    let largest =Math.max(...nums)


    for(let i=1;i<=small;i++){
        if(small%i===0&&largest%i===0){
            if(div<i){
                div=i
            }
        }
    }
    return div
};