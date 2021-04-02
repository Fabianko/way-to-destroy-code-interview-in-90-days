/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Example 3:
Input: root = []
Output: 0

Example 4:
Input: root = [0]
Output: 1

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
 */

/**
 * Definition for a binary tree node.*/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root) return 0;
    let largestDepth = [1];
    findMaxDepth(root, 1, largestDepth);
    return largestDepth[0];
};

function findMaxDepth(tree, currentDepth, maxDepth) {
    if (tree === null) return; 
    if (currentDepth > maxDepth[0]) {
        maxDepth[0] = currentDepth;
    }
    findMaxDepth(tree.left, currentDepth + 1, maxDepth);
    findMaxDepth(tree.right, currentDepth + 1, maxDepth);
}


