/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
*/


var matchSubString = function (intialSubString, string) {
    let temp = '';

    for (let i = 0; i < intialSubString.length; i++) {
        if (intialSubString[i] === string[i]) {
            temp = temp + string[i];
        } else {
            break;
        }
    }

    return temp;

}

var longestCommonPrefix = function(strs) {
    let intialSubString = strs[0];

    for (let i = 1; i < strs.length; i++) {
        intialSubString = matchSubString(intialSubString, strs[i])
    }

    return intialSubString;
};