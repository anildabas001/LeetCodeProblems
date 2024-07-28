/*
    Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
    and checks whether there are any duplicates among the arguments passed in.  
    You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
*/


//using frequency counter
// function areThereDuplicates(...charList) {
//     let checkerObj = {}

//     charList.forEach (character => {
//         checkerObj[character] = (checkerObj[character] || 0) + 1;
//     }) 

//     for (let character in checkerObj) {
//         if (checkerObj[character] > 1) {
//             return true;
//         }
//     }

//     return false;
// }

function areThereDuplicates(...charList) {
    charList.sort();
    let i = 0;
    let j = 1;

    while (j< charList.length) {
        if (charList[i] === charList[j]) {
            return true;
        }   
    }
    
    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a'))