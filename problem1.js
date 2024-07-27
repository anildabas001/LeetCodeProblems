/*
Write a function, which accepts two arrays. The function should return true if every value in the array has it's corresponding value 
squared in the second array. The frequency of the values must be same, but values in array can be out of order
eg:

[1,2,3] [4,1,9] => true
[1,2,3] [1,9] => false
[1,2,1] [4,4,1] => false

*/

//Naive approcah

// function same (arrOne, arrTwo) {
//     if (arrOne.length !== arrTwo.length) {
//         return false;
//     }

//     let result = true;

//     arrOne.forEach(element => {
//         let index = arrTwo.findIndex(slementTwo => slementTwo === element*element);

//         if (index === -1) {
//             result = false;
//             return;
//         } else {
//             arrTwo.splice(index, 1);
//         }
//     })

//     return result;
// }

//my solution
// function same (arrOne, arrTwo) {
//     const obserArrTwo = {};
//     if (arrOne.length !== arrTwo.length) {
//         return false
//     }

//     arrTwo.forEach(element => {
//         if (obserArrTwo[element]) {
//             obserArrTwo[element]++;
//         } else {
//             obserArrTwo[element] = 1;
//         }
//     });

//     arrOne.forEach(element => {
//         let squaredValue = element*element;

//         if (obserArrTwo[squaredValue]) {
//             obserArrTwo[squaredValue]--;

//             if (obserArrTwo[squaredValue] === 0) {
//                 delete obserArrTwo[squaredValue]
//             }
//         } else {
//             return false;
//         }
//     });

//     let keys =  Object.keys(obserArrTwo);

//     if (keys.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

//Optimal Solution

function same(arrOne, arrTwo) {
    if (arrOne.length != arrTwo.length) {
        return false
    }
    let arrOneObserve = {};
    let arrTwoObserve = {};

    arrOne.forEach(element => {
        arrOneObserve[element] = (arrOneObserve[element] || 0)+1;
    });

    arrTwo.forEach(element => {
        arrTwoObserve[element] = (arrTwoObserve[element] || 0)+1;
    });

    for (element in arrOneObserve) {
        if (!arrTwoObserve[element**2]) {
            return false;
        }        
        if (arrOneObserve[element] !== arrTwoObserve[element**2]) {
            return false;
        }
    }

    return true;
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));
