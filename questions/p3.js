/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 *  Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let v1 = l1.val.toString();
    let v2 = l2.val.toString();

    while (l1.next != null) {
        l1 = l1.next;
        v1 = l1.val.toString() + v1;
    }
    while (l2.next != null) {
        l2 = l2.next;
        v2 = l2.val.toString() + v2;
    }
    let result = (parseInt(v1) + parseInt(v2)).toString();
    let objTemp = null
    for (let i = 0; i < result.length; i++) {
        objTemp = {'val':parseInt(result[i]),'next':objTemp}
    }
    return objTemp
};

let a = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
let b = [5,6,4]

function sum (a, b) {
    return a.join("").
}