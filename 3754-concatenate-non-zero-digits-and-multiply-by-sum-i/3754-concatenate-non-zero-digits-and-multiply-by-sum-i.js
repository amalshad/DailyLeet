/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
       let str = String(n);

    let newNum = "";
    let sum = 0;

    for(let ch of str){

        if(ch !== '0'){

            newNum += ch;
            sum += Number(ch);

        }
    }

    return Number(newNum) * sum;
};