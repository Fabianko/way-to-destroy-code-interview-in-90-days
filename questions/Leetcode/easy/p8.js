/**
 * 
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...

Example 1:
Input: 1
Output: "A"

Example 2:
Input: 28
Output: "AB"

Example 3:
Input: 701
Output: "ZY"

 */

 /**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (n==0) {
        return "Z"
    }
    if (n < 27) {
        return chars[n-1];
    }
    else {
        if (n%26 == 0) {
            return convertToTitle(parseInt(n/26)-1) + convertToTitle(parseInt(n%26))
        } 
        else {
            return convertToTitle(parseInt(n/26)) + convertToTitle(n%26)
        }
    }
};


console.log(convertToTitle(1)=="A")
console.log(convertToTitle(28)=="AB")
console.log(convertToTitle(701)=="ZY")
console.log(convertToTitle(52)=="AZ")
console.log(convertToTitle(702))
console.log(convertToTitle(702)=="ZZ")
