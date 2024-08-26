/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

*/

//better solution will be to use two pointers

// my solution not so optimized

var lengthOfLastWord = function(s) {
    let result = 0;
    let wordFound = false;
    for (let i = s.length - 1; i >= 0 ; i--) {
        console.log(s[i], i)
        if (s[i] === ' ' && !wordFound) {
            continue;
        } 
        
        if (s[i] === ' ' && wordFound) {
            break;
        } 
        
        if (s[i] !== ' ' && !wordFound) {
            wordFound = true;            
        }

        result++;
    }

    return result;
};

//little optimized

var lengthOfLastWord = function(s) {
    let result = 0;
    let wordFound = false;
    for (let i = s.length - 1; i >= 0 ; i--) {
        if (s[i] !== ' ') {
            wordFound = true;
            result++;
        } 

        if (s[i] === ' ' && wordFound) {
            break;
        }  
    }

    return result;
};