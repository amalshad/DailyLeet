/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let finishing=[]
    for(let i=0;i<order.length;i++){
        if(friends.includes(order[i])){
            finishing.push(order[i])
        }
    }

    return finishing
};