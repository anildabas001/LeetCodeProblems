function test (a) {
    console.log('ran');
    return a + 8;
}


let memoizeFunct = (fn) => {
    let cache ={};
    return (...args) => {
        let argString = JSON.stringify(args);
        if (!cache[argString]){            
            cache[argString] = fn(...args);           
        } 

        return cache[argString];
    }
}

let memoizedFunc = memoizeFunct(test);

let value1 = memoizedFunc(2);
let value2 = memoizedFunc(2);
let value3 = memoizedFunc(3);

console.log(value1, value2, value3);