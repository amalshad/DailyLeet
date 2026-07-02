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
var mergeNodes = function (head) {
    let arr = []
    let temp = new ListNode(0)
    let curr = temp
    let sum = 0

    head = head.next

    while (head) {
        if (head.val === 0) {
            arr.push(sum)
            sum = 0
        } else {
            sum += head.val
        }

        head = head.next
    }

    for (let val of arr) {
        curr.next = new ListNode(val)
        curr = curr.next
    }
    return temp.next
};