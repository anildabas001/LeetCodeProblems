// Given a string, find the length of the longest substring that contains at most K distinct characters.


function longestSubString(string, k) {
    let windowStart = 0;
    let distinctCharacters = new Map();
    let size = Number.NEGATIVE_INFINITY;

    for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {

        if (distinctCharacters.get(string[windowEnd])) {
            let count = distinctCharacters.get(string[windowEnd])
            distinctCharacters.set(string[windowEnd], count++);
        } else {
            distinctCharacters.set(string[windowEnd], 1);
        }

        if (distinctCharacters.size > k) {
            //set the max size till now
            size = Math.max(size, (windowEnd - windowStart));

            //shrink the window size
            while (distinctCharacters.size > k) {
                let count = distinctCharacters.get(string[windowStart]) - 1;
                distinctCharacters.set(string[windowStart], count);

                if (count === 0) {
                    distinctCharacters.delete(string[windowStart]);
                }

                windowStart++;
            }
        } 

    }

    return size === Number.NEGATIVE_INFINITY ? string.length : size;

}

//optimized one

function longestSubstringWithKDistinct(str, k) {
    let windowStart = 0;
    let maxLength = 0;
    let charFrequency = {};

    // Extend the window by sliding `windowEnd`
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str[windowEnd];

        // Add the current character to the frequency map
        if (!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar] += 1;

        // Shrink the sliding window if we have more than `k` distinct characters
        while (Object.keys(charFrequency).length > k) {
            let leftChar = str[windowStart];
            charFrequency[leftChar] -= 1;
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            windowStart += 1; // shrink the window
        }

        // Update the maximum length found so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}


let str = "araaci";
let k = 1;

console.log(longestSubString(str, k));

str = "araaci";
k = 2;

console.log(longestSubString(str, k));

str = "araaci";
k = 3;

console.log(longestSubString(str, k));

str = "cbbebi";
k = 3;

console.log(longestSubString(str, k));

str = "abcabc";
k = 4;

console.log(longestSubString(str, k));

 str = "abcabcbb";
 k = 3;
console.log(longestSubString(str, k));
// console.log(smallestSubArray(arr, k));

// arr = [1, 1, 1, 1, 1, 1, 1, 1], k = 11

// console.log(smallestSubArray(arr, k));