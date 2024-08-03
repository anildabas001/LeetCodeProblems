/*
    adding upto n numbers recursively.
*/


function addRecursive (number) {
    if (number === 1) {
        return 1;
    }

    return number + addRecursive(--number)
}

console.log(addRecursive(5));

/*
    Factorial with recursion
*/

function factorialRecursive(number) {
    if (number === 1) {
        return 1;
    }

    return number * factorialRecursive(number - 1)
}

console.log(factorialRecursive(5))


/*
    Write a function called power which accepts a base and an exponent. 
    The function should return the power of the base to the exponent. 
    This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/


function power (base, exponent) {
    if (exponent === 1) {
        return base;
    }

    return base * power (base, exponent - 1);
}

console.log(power(2,5));

/*
    Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/ 

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

[]

function productOfArray (numberList) {
    if (numberList.length === 0) {
        return 1;
    }

    let element = numberList.splice(0,1);

    return element * productOfArray(numberList)
}

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));


/*
    Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
*/

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange (number) {
    if (number === 0) {
        return 0;
    }

    return number + recursiveRange(number - 1);
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10));

/*
    Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
    Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
    which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465


function fib (number) {
    if (number === 0) {
        return 0;
    }else if (number === 1) {
        return 1;
    }

    return fib(number - 1) + fib(number - 2)
}

console.log(fib(4)); //3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465