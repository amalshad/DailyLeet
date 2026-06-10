/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let ip=''
    for(let char of address){
        if(char==='.'){
            ip+='[.]'
        }else{
            ip+=char
        }
    }
    return ip
};