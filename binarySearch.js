function middle (left, right) {

}

//my solution
function binarySearch (array, value) {

    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((right + left)/2);

    while (left !== right) {
        console.log(left, middle, right);
        if (array[middle] === value) {
            return middle;
        } else if (value > array[middle]) {
            left = middle;
            middle = Math.ceil((right + left)/2);
        } else {
            right = middle;
            middle = Math.floor((right + left)/2);
        }

        
    }

    return -1;
}

//optimal solution

function binarySearch (array, value) {
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((left + right)/2);

    while (left <= right) {
        if (array[middle] === value) {
            return middle;
        } else if (array[middle] > value) {            
            right = middle - 1;
        } else  {
            left = middle + 1;
        }

        middle = Math.floor((left + right)/2);
    }

    return -1;
}

console.log(binarySearch([7,8,13,15], -1));