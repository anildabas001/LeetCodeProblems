// Given two strings s and p, return an array of all the start indices of p's 
// anagrams
//  in s. You may return the answer in any order.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
 


var findAnagrams = function(s, p) {

    function isMatch (obj1, obj2) {
        for (let key in obj1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        return true;
    }

    if (p.length > s.length) {
        return [];
    }

    let pCharacters = {}
    let sWindow = {}

    let result = [];

    for (let i = 0; i < p.length; i++) {
        pCharacters[p[i]] = (pCharacters[p[i]] || 0) + 1;
        sWindow[s[i]] = (sWindow[s[i]] || 0) + 1;
    }
    
    for (let j = 0; j < s.length - p.length + 1; j++) {
        if (isMatch(pCharacters, sWindow)) {
            result.push(j);
        }

        sWindow[s[j]]--;

        if (sWindow[s[j]] === 0) {
            delete sWindow[s[j]]
        }

        sWindow[s[j + p.length]] = (sWindow[s[j + p.length]] || 0) + 1;
    }

    return result;
};

//optimized one

var findAnagrams = function(s, p) {
    if (p.length > s.length) return [];

    const pCharacters = {};
    const sWindow = {};
    const result = [];
    let matchCount = 0;

    // Initialize frequency map for p
    for (let i = 0; i < p.length; i++) {
        pCharacters[p[i]] = (pCharacters[p[i]] || 0) + 1;
    }

    // Initialize the first window
    for (let i = 0; i < p.length; i++) {
        const char = s[i];
        sWindow[char] = (sWindow[char] || 0) + 1;
        if (sWindow[char] === pCharacters[char]) {
            matchCount++;
        }
    }

    if (matchCount === Object.keys(pCharacters).length) {
        result.push(0);
    }

    // Slide the window across s
    for (let i = p.length; i < s.length; i++) {
        const startChar = s[i - p.length];
        const endChar = s[i];

        // Remove the character that is sliding out of the window
        if (sWindow[startChar] === pCharacters[startChar]) {
            matchCount--;
        }
        sWindow[startChar]--;
        if (sWindow[startChar] === 0) {
            delete sWindow[startChar];
        }

        // Add the new character sliding into the window
        sWindow[endChar] = (sWindow[endChar] || 0) + 1;
        if (sWindow[endChar] === pCharacters[endChar]) {
            matchCount++;
        }

        // Check if all characters are matching
        if (matchCount === Object.keys(pCharacters).length) {
            result.push(i - p.length + 1);
        }
    }

    return result;
};
