//my solution
function pivot (array) {
    let pivotPoint = array[0];
    let lastIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] <= pivotPoint) {
            let temp = array[lastIndex];
            array[lastIndex] = array[i];
            array[i] = temp;
            lastIndex++;
        }
    }

    // array[lastIndex] = pivotPoint;
    console.log(array)
    return lastIndex
}

// optimized
function pivot(arr, start=0, end=arr.length-1){
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    var pivot = arr[start];
    var swapIdx = start;
  
    for(var i = start + 1; i <= end; i++){
      if(pivot > arr[i]){
        swapIdx++;
        swap(arr,swapIdx,i);
      }
    }
    swap(arr,start,swapIdx);
    // console.log(swapIdx, start, end, arr)
    return swapIdx;
}

function quickSort (arr, start = 0, end = arr.length - 1) {
    console.log(start, end);

    if (start >= end) {        
        return;
    }
    
    
    let pivotPoint = pivot(arr, start, end);

    quickSort(arr, start, pivotPoint - 1);
    quickSort(arr, pivotPoint + 1, end);

    return arr;
}

//optimized

// function quickSort(arr, left = 0, right = arr.length -1){
//     if(left < right){
//         let pivotIndex = pivot(arr, left, right) //3
//         //left
//         quickSort(arr,left,pivotIndex-1);
//         //right
//         quickSort(arr,pivotIndex+1,right);
//       }
//      return arr;
// } 



console.log(quickSort([5,2,1,8,4,7,6,3]))
console.log(quickSort([6,5,4,1,9]));