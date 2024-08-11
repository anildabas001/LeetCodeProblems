/*
    searching substring inside longer string and give the count of sub strings in main string.

    'haha haha hello i am a do' => 'haha' => here haha occurs two times
*/
//my solution
function subStringSearch (mainString, subString) {
    let i = 0;
    let j = 0;
    let k = 0;

    let resultCounter = 0;

    if (subString.length > mainString) {
        return resultCounter;
    }

    while (i <= j && j < mainString.length) {
        if ((j - i) === subString.length) {
            resultCounter++;
            i++;
            j = i;      
            k = 0;      
        }else if (mainString[j] === subString[k]) {
            j++;
            k++
        } else {
            i++;
            j = i;
            k = 0;
        }

        
    }

    return resultCounter;
}

//optimized
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(subStringSearch('hello I am a dick','hello t'));
console.log(subStringSearch("lorie loled", "lol"));