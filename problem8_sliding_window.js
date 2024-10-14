// Given two strings s1 and s2, return true if s2 contains a 
// permutation
//  of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false


var checkInclusion = function(s1, s2) {
    let s1Characters = {};
    let s2Window = {};

    if (s1.length > s2.length) {
        return false;
    }

    function isMatch (obj1, obj2) {
        let keys = Object.keys(obj1);

        for (let key of keys) {
            if (!obj2[key] || obj2[key] !== obj1[key]) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < s1.length; i++) {
        if (s1Characters[s1[i]]) {
            s1Characters[s1[i]]++;
        } else {
            s1Characters[s1[i]] = 1;
        }

        if (s2Window[s2[i]]) {
            s2Window[s2[i]]++;
        } else {
            s2Window[s2[i]] = 1;
        }
    }

    if (isMatch(s1Characters, s2Window)) {return true;}

    for (let j = s1.length; j < s2.length; j++) {
        s2Window[s2[j - s1.length]]--;

        if (s2Window[s2[j - s1.length]] === 0) {
            delete s2Window[s2[j - s1.length]];
        }

        if (s2Window[s2[j]]) {
            s2Window[s2[j]]++;
        } else {
            s2Window[s2[j]] = 1;
        }

        if (isMatch(s1Characters, s2Window)) {return true;}
    }

    return false
};


//optimized

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    // Helper function to compare two frequency maps
    function matches(map1, map2) {
        for (let key in map1) {
            if (map1[key] !== map2[key]) return false;
        }
        return true;
    }

    // Create frequency map for s1
    const s1Count = {};
    const windowCount = {};

    for (let char of s1) {
        s1Count[char] = (s1Count[char] || 0) + 1;
    }

    // Initialize the first window in s2
    for (let i = 0; i < s1.length; i++) {
        const char = s2[i];
        windowCount[char] = (windowCount[char] || 0) + 1;
    }

    // Slide the window over s2
    for (let i = s1.length; i < s2.length; i++) {
        if (matches(s1Count, windowCount)) return true;

        // Add the next character in s2 to the window
        const charIn = s2[i];
        windowCount[charIn] = (windowCount[charIn] || 0) + 1;

        // Remove the character that is no longer in the window
        const charOut = s2[i - s1.length];
        if (windowCount[charOut] === 1) {
            delete windowCount[charOut];
        } else {
            windowCount[charOut]--;
        }
    }

    // Final check after the last window slide
    return matches(s1Count, windowCount);
}
