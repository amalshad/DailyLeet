/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let freq1 ={}
    let freq2 ={}
    let vowels =['a', 'e', 'i', 'o','u']

    for(let char of s){
        if(vowels.includes(char)){
        freq1[char]=(freq1[char]||0)+1

        }else{

        freq2[char]=(freq2[char]||0)+1
        }

    }

   return (
  Math.max(0, ...Object.values(freq1)) +
  Math.max(0, ...Object.values(freq2))
);

};