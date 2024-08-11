
//unoptimized bubble sort
function bubbleSort (numArray) {

    for (i = numArray.length - 1; i >= 0; i--) {
        for (j = 0; j <= i - 1; j++) {       
            if (numArray[j] > numArray[j + 1]) {
                let temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }

    return numArray;
}

//optimized bubble sort

function bubbleSort (numArray) {
    let times = 0;
    for (i = numArray.length - 1; i >= 0; i--) {
        let swap = false;
        times++;
        for (j = 0; j <= i - 1; j++) {       
            if (numArray[j] > numArray[j + 1]) {
                let temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
                swap = true;
            }
        }

        if (!swap) {
            break;
        }
    }

    console.log(times);

    return numArray;
}

console.log(bubbleSort([6,5,4,1,9]));