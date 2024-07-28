/*Given two strings, write a function to determine if the second string is an anagramof the first. An anagram is a 
word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman */

//Novice Approcah

// function validAnagram (string1, string2) {
//     let arr1 = string1.split('');
//     let arr2 = string2.split('');

//     if (arr1.length != arr2.length) {
//         return false;
//     }

//     for (let element1 of arr1) {
//         let index = arr2.findIndex(element2 => element2 === element1);

//         if (index === -1) {
//             return false;
//         } else {
//             arr2.splice(index, 1);
//         }
//     }

//     return true;
// }

//My Approach

// function validAnagram(string1, string2) {
//     if (string1.length != string2.length) {
//         return false;
//     }

//     let arr1 = string1.split('');
//     let arr2 = string2.split('');

//     let observeArr1 = {};
//     let observeArr2 = {};

//     arr1.forEach(element1 => {
//         observeArr1[element1] = (observeArr1[element1] || 0) + 1;
//     });

//     arr2.forEach(element2 => {
//         observeArr2[element2] = (observeArr2[element2] || 0) + 1;
//     });

//     for (let element1 in observeArr1) {
//         if (!observeArr2[element1]) {
//             return false;
//         }
//         if (observeArr2[element1] != observeArr1[element1] ) {
//             return false;
//         }
//     }

//     return true;
// }

//Optimized Approach

function validAnagram (string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }

    let checkerObj = {};

    for (let i = 0; i < string2.length; i++) {
        let character = string2[i]
        checkerObj[character] = (checkerObj[character] || 0) + 1;
    }
    
    for (let i = 0; i < string1.length; i++ ) {
        let character = string1[i]
        if (!checkerObj[character]) {
            return false;
        } else {
            checkerObj[character] = checkerObj[character] - 1;
        }
    }

    return true;
}

console.log(validAnagram('cinema', 'iceman'));
console.log(validAnagram('', ''));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('qwerty', 'ewrqty'));