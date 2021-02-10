/**
 * 
 * Given two strings A and B of lowercase letters, 
 * return true if you can swap two letters in A so the 
 * result is equal to B, otherwise, return false.

Swapping letters is defined as taking two indices i and j 
(0-indexed) such that i != j and swapping the characters at A[i] and A[j]. 
For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

 

Example 1:
Input: A = "ab", B = "ba"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.

Example 2:
Input: A = "ab", B = "ab"
Output: false
Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.

Example 3:
Input: A = "aa", B = "aa"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.

Example 4:
Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true

Example 5:
Input: A = "", B = "aa"
Output: false
 

Constraints:

0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist of lowercase letters.
 */

 /**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(A.length != B.length) return false;
    if(A == B){
        var characters = {};
        for(var index = 0; index < A.length; index++){
            characters[A[index]] = characters[A[index]] != null ? ++characters[A[index]] : 1;
            if(characters[A[index]] > 1) { return true;}
        }
        return false;
    }
    var swap_count = 0;
    var swap_locations = [];
    for(var index = 0; index < A.length; index++) {
        if(A[index] != B[index]){
            swap_count++;
            swap_locations.push(index);
        }
    }
    if(swap_count != 2 && swap_locations.length != 2){
        return false;
    }
    if(A[swap_locations[0]] == B[swap_locations[1]] && 
       A[swap_locations[1]] == B[swap_locations[0]]) {
        return true;
    }
    return false;
};

console.log(buddyStrings("a","b")==false)
console.log(buddyStrings("ab","ba")==true)
console.log(buddyStrings("ab","ab")==false)
console.log(buddyStrings("aa","aa")==true)
console.log(buddyStrings("aaaaaaacb","aaaaaaabc")==true)
console.log(buddyStrings("","aa")==false)
console.log(buddyStrings("abcd","badc")==false)