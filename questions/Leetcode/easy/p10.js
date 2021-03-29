/**
 * Given a string s, determine if it is a palindrome, 
 * considering only alphanumeric characters and ignoring cases.

 

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let i =0;
    let j = s.length-1;
    while (j>i) {
        if (s[i]!= s[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")==true);
console.log(isPalindrome("race a car")==false);
console.log(isPalindrome("ab_a")==true);
console.log(isPalindrome("0p")==false);