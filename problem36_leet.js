/*

    Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
*/

var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) {
      return -1;
    }  
    let i = 0;
    let j = 0;
    let startOfNeedle = -1; 

    while (i < haystack.length && j < needle.length) {          
        if (needle[j] === haystack[i]) {
            if (j === 0) {
                startOfNeedle = i;
            }

            j++;
            
        } else {
            if (j > 0) {
                i = i - j;
                j = 0;
            }
            
        }
        
        i++
    }
    return j === needle.length ? startOfNeedle : -1;
};