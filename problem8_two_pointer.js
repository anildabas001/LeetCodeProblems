// For this problem, your goal is to sort an array of 0, 1 and 2's but you must do this in place, 
// in linear time and without any extra space (such as creating an extra array). 
// This is called the Dutch national flag sorting problem. For example, if the input array is [2,0,0,1,2,1] 
// then your program should output [0,0,1,1,2,2] and the algorithm should run in O(n) time.

function swap (array, left, right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

function dutchNatFlag (array) {
    let low = 0;
    let high = 1;
    let mid = 0

    while (mid <= high) {
        if (array[mid] === 0) {
            swap(array, mid, low);
            low++;
            mid++;
        } else if (array[mid] === 1) {
            mid++;
        } else {
            swap(array, mid, high);
            high--;
        }
    }

    return array;
}    

console.log(dutchNatFlag([2,0,0,1,2,1]))