// You are given a string s and an integer k. You can choose any character of the string and change it to any other 
//uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

var characterReplacement = function(s, k) {
    let windowStart = 0;
    let windowEnd = 0;
    let observer = {};
    let maxLength = Number.NEGATIVE_INFINITY;

    let maxOccurence = Number.NEGATIVE_INFINITY;

    for (windowEnd = 0; windowEnd < s.length; windowEnd++) {
        if (observer[s[windowEnd]]) {
            observer[s[windowEnd]]++;
        } else {
            observer[s[windowEnd]] = 1;
        }   
        
        maxOccurence = Math.max(maxOccurence, observer[s[windowEnd]]);

        let difference = (windowEnd - windowStart + 1) - maxOccurence;

        while (difference > k) {            
            observer[s[windowStart]]--;
            windowStart++;
            maxOccurence = Object.values(observer).sort((a,b) => b - a)[0];
            difference = (windowEnd - windowStart + 1) - maxOccurence;
        }

        maxLength = Math.max(maxLength, (windowEnd - windowStart + 1));
    }

    return maxLength;
};


//optimized one

function characterReplacement(s, k) {
    let freqMap = {};  // Object to store frequency of characters in the current window
    let maxLen = 0;    // The maximum length of the valid window
    let maxCount = 0;  // Maximum frequency of any character in the current window
    let left = 0;      // Left pointer for the sliding window

    // Iterate over the string using the right pointer
    for (let right = 0; right < s.length; right++) {
        // Update the frequency map with the current character
        const char = s[right];
        freqMap[char] = (freqMap[char] || 0) + 1;

        // Update the max frequency of any character in the window
        maxCount = Math.max(maxCount, freqMap[char]);

        // Calculate the current window size and the number of changes needed
        let windowSize = right - left + 1;

        // If the number of changes required exceeds k, shrink the window
        if (windowSize - maxCount > k) {
            const leftChar = s[left];
            freqMap[leftChar]--;
            left++;
        }

        // Update maxLen to the largest valid window size
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
