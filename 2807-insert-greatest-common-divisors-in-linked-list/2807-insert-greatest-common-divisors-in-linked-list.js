/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {

    let current = head;

    while(current && current.next){

        let a = current.val;
        let b = current.next.val;

        let gcd = findGCD(a, b);

        let node = new ListNode(gcd);

        node.next = current.next;
        current.next = node;

        current = node.next;
    }

    return head;
};

function findGCD(a, b){

    while(b !== 0){

        let temp = b;
        b = a % b;
        a = temp;

    }

    return a;
}