/*Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2) {
    let string1 = num1.toString();
    let string2 = num2.toString();

    if (string1.length != string2.length) {
        return false;
    }

    let checkerObj = {};

    for (let i = 0; i < string2.length; i++) {
        let character = string2[i];
        checkerObj[character] = (checkerObj[character] || 0) + 1;
    }

    for (let j = 0; j < string1.length; j++) {
        let character = string1[j];
        if (!checkerObj[character]) {
            return false;
        } else {
            checkerObj[character]--;
        }
    }

    return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false