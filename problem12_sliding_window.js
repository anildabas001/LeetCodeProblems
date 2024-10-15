// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

var minWindow = function(s, t) {

    if (t.length > s.length) {
        return '';
    }

    let sChecker = {};
    let tChecker = {};    
    let matcher = 0;
    let minSubStringLength = Number.POSITIVE_INFINITY;

    let windowStart = 0;
    let windowEnd = 0;

    let minWidowStart = 0;

    for (let i = 0; i < t.length; i++) {
        tChecker[t[i]] = (tChecker[t[i]] || 0) + 1;
    }   

    let requiredLength = Object.keys(tChecker).length;

    for (windowEnd = 0; windowEnd <= s.length; windowEnd++) {
        sChecker[s[windowEnd]] = (sChecker[s[windowEnd]] || 0) + 1;
        
        if (tChecker[s[windowEnd]] && tChecker[s[windowEnd]] === sChecker[s[windowEnd]]) {
            matcher++;
        }

        while (windowStart <= windowEnd && (matcher === requiredLength)) {
            if (minSubStringLength > (windowEnd - windowStart + 1)) {
                minSubStringLength = (windowEnd - windowStart + 1);
                minWidowStart = windowStart;
            }

            sChecker[s[windowStart]]--;

            if (tChecker[s[windowStart]] && sChecker[s[windowStart]] < tChecker[s[windowStart]]) {
                matcher--;
            }

            windowStart++;
        }
    }


    return  minSubStringLength === Number.POSITIVE_INFINITY ? '' : s.slice(minWidowStart, minWidowStart + minSubStringLength );
}
