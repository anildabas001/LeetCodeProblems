
function selectionSort (numsArray) {
    
    for (i = 0; i < numsArray.length; i++) {
        let minValue = Number.POSITIVE_INFINITY;
        let minIndex = -1;

        for (j = i; j < numsArray.length; j++) {
            if (numsArray[j] < minValue) {
                minValue = numsArray[j];
                minIndex = j;
            }
        }

        if (minIndex != -1 && minIndex != -1) {
            let temp = numsArray[i];
            numsArray[i] = minValue;
            numsArray[minIndex] = temp;
        }
    }

    return numsArray;
}

//optimized
function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([6,5,4,1,9]));