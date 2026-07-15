/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let sumOdd=0
    let sumEven=0
    let GCD=0

    for(let i=1;i<=n;i++){
        if(i%2==0) sumEven+=i
        else sumOdd+=i
    }

    for(let i=1;i<=sumOdd;i++){
        if(sumOdd%i==0&&sumEven%i==0){
            GCD=Math.max(GCD,i)
        }
    }

    return n
    
};