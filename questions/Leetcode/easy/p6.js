/**
 * Longest Common Prefix
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return ""
   // create a invert dicctionary hash
   let response = "";
   strs = strs.sort((a,b)=> a.length-b.length);
   let maxLength = strs[0].length;
   let i = 0;
   while (i < maxLength) {
       let candidate = "";
       for (let str of strs) {
           if (candidate === "" ) {
               candidate = str[i];
           }
           else {
               if (candidate != str[i]) {
                   return response;
               }
           }
           
       }
       response+=candidate;
       i++;
   }
   return response;
};

console.log(longestCommonPrefix(["hola","h"])=="h")
console.log(longestCommonPrefix([""],""))


let a = ["hola","a","asd","asdasdasd"]
console.log(a.sort((a,b)=> b.length-a.length))