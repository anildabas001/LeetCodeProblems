/*
    Write a function called isSubsequence which takes in two strings and checks whether the characters in the first 
    string form a subsequence of the characters in the second string. In other words, the function should check whether 
    the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

*/


//multiple pointers  => here its searching subsequent matches not like the question above, can use sliding window pattern as well in this case
//isSubsequence('abc', 'abracadabra'); => false here ( abc, dfsdabcyyj )=> true here

function isSubsequence(string1, string2) {
    if (string2.length < string1.length) {
        return false;
    }

    let i = 0;
    let j = 0;

    while (i < string2.length) {
        if (j >= string1.length) {
            return true;
        }
        if (string2[i] === string1[j]) {
            j++;
        } else {
            j = 0;
        }

        i++;
    }

    return false;
}

function isSubsequence(string1, string2) {
    if (string2.length < string1.length) {
        return false;
    }

    let i = 0;
    let j = 0;

    while (i < string2.length) {
        if (string2[i] === string1[j]) {
            j++;
        } 

        if (j >= string1.length) {
            return true;
        }
        
        i++;
    }

    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'bgtghabcadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)