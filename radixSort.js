
function getDigit(number, place) {
    let divider = 10**(place+1);

    let remainder = number%divider;

    return parseInt(Math.floor(remainder/(10**place)));
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
  
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
  
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
  
mostDigits([23,567,89,12234324,90])

//my solution
function radixSort (arr) {
    let maxDigits = mostDigits(arr);
    let result = [];    

    for (let i = 0; i <=  maxDigits; i++) {
        let bucket = [[],[],[],[],[],[],[],[],[],[]]

        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j] , i);
            bucket[digit].push(arr[j]);
        }

        arr = [].concat(bucket[0], bucket[1], bucket[2], bucket[3], bucket[4], bucket[5], bucket[6], bucket[7], bucket[8], bucket[9]);
    }

    return arr;
}

//radix sort
function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([5,2,1,8,4,7,6,3]))
console.log(radixSort([6,5,4,1,9]));
