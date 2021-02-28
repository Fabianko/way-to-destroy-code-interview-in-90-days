/**
 * Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, 
and only the integer part of the result is returned.

Example 1:
Input: x = 4
Output: 2

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 

Constraints:

0 <= x <= 2^(31) - 1
 */


 /**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 0;
    while (i*i <= x) {
        if  (i*i==x) {
            return i;
        }
        i++;
    }
    return i-1;
};

console.log(mySqrt(0)==0)
console.log(mySqrt(4)==2)
console.log(mySqrt(8)==2)
console.log(mySqrt(9)==3)
console.log(mySqrt(10)==3)
console.log(mySqrt(15)==3)
console.log(mySqrt(16)==4)