//my solution
function merge (arrayOne, arrayTwo) {
    let i = 0;
    let j = 0;

    let result = [];
    while(i < arrayOne.length || j < arrayTwo.length) {
        if (!arrayOne[i]) {
            result.push(arrayTwo[j]);
            j++;
            continue;
        }

        if (!arrayTwo[j]) {
            result.push(arrayOne[i]);
            i++;
            continue;
        }

        if (arrayOne[i] < arrayTwo[j]) {
            result.push(arrayOne[i]);
            i++;
        } else if (arrayOne[i] > arrayTwo[j]) {
            result.push(arrayTwo[j]);
            j++;
        } else {
            result.push(arrayOne[i]);
            result.push(arrayTwo[j]);
            i++;
            j++;
        }
    }

    return result;
}

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

//my solution
function mergeArray (arrayOne, arrayTwo) {

    let sortedArrayOne = [];
    let sortedArrayTwo = [];

    if (arrayOne.length === 1 && arrayTwo.length === 1) {
        return merge (arrayOne, arrayTwo);
    } else {
        if (arrayOne.length !== 1) {
            let middle = Math.floor((0 + (arrayOne.length - 1)) / 2);

            let one = arrayOne.slice(0, middle + 1);
            let two = arrayOne.slice(middle + 1);

            sortedArrayOne = mergeArray (one, two);
        }

        if (arrayTwo.length !== 1) {
            let middle = Math.floor((0 + (arrayTwo.length - 1)) / 2);

            let one = arrayTwo.slice(0, middle + 1);
            let two = arrayTwo.slice(middle + 1);

            sortedArrayTwo = mergeArray (one, two);
            
        }
    }

    return merge(sortedArrayOne, sortedArrayTwo);
    
}

function sort (array) {

    let middle = Math.floor((0 + (array.length - 1)) / 2);

    let arrayOne = array.slice(0, middle + 1);
    let arrayTwo = array.slice(middle + 1);

    return mergeArray (arrayOne, arrayTwo)

}

//optimized solution

function sort (array) {
    if (array.length === 1) {
        return array;
    }

    let middle = Math.floor((0 + (array.length - 1)) / 2);

    let left = sort(array.slice(0, middle + 1));
    let right = sort(array.slice(middle + 1));

    return merge(left, right);

}

console.log(sort([1,10,50,2,7,9,90]));