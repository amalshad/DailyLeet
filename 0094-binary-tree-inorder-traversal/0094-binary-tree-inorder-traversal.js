/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result=[]

    function inorder(node,result){
        if(!node) return []
        inorder(node.left,result)
        result.push(node.val)
        inorder(node.right,result)

        return result
    }

    return inorder(root,result)

};