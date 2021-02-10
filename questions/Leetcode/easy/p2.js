/**
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit 
 * integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0
 * 
 */


 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = false
    x = x.toString()
    if ( x[0] === '-') {
        sign = true;
        x.substring(1)
    }
    let xRev = x.split("").reverse().join("")
    xRev = sign? parseInt('-'+xRev ) :parseInt(xRev)
    if (xRev>=2147483648 || xRev <= -2147483648) {
        return 0
    }
    return xRev;
};
function isEqual(a,b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

console.log(isEqual(reverse(123),321))
console.log(isEqual(reverse(-123),-321))
console.log(isEqual(reverse(120),21))
console.log(isEqual(reverse(0),0))
console.log(isEqual(reverse(1534236469),0))