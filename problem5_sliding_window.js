// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function(s) {
    let widowStart = 0;
    let windowEnd = 0;
    let maxLength = Number.NEGATIVE_INFINITY;
    let charChecker = {}

    for (windowEnd = 0; windowEnd < s.length; windowEnd++) {
        if (charChecker[s[windowEnd]]) {
           maxLength = Math.max(maxLength, (windowEnd - widowStart));

            while (charChecker[s[windowEnd]]) {
               delete charChecker[s[widowStart]];
               widowStart++;
            }             
        }

        charChecker[s[windowEnd]] = 1; 
    }

    maxLength = Math.max(maxLength, (windowEnd - widowStart));

    return maxLength;
};