/*
    Write a function called findLongestSubstring, which accepts a string and returns the length of the longest 
    substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
*/

function findLongestSubstring (string) {
    let start = 0;
    let end = 0;
    let characterSeen = {};
    let longestStringLength = Number.NEGATIVE_INFINITY;

    while (start < string.length && end < string.length) {
        if (characterSeen[string[end]] !== null && characterSeen[string[end]] !== undefined) {
            longestStringLength = Math.max(longestStringLength, (end - start));           
            start = characterSeen[string[end]] + 1;
            characterSeen = {};
            characterSeen[string[start]] = start;
            end = start;
        } else {
            characterSeen[string[end]] = end;

            if (end === string.length - 1) {
                longestStringLength = Math.max(longestStringLength, (end - start + 1));
            }
        }

        end++;
    }

    return longestStringLength === Number.NEGATIVE_INFINITY ? 0 : longestStringLength;    
}

//Optimal solution

function findLongestSubstring (string) {
    
}



console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6