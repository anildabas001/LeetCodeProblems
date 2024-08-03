/*
    Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse (string) {
    if (string.length === 0) {
        return '';
    }

    let updatedString = string.slice(1);
    let firstCharacter = string[0];

    return reverse(updatedString) +  firstCharacter ;
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'


/*
  isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
(reads the same forward and backward). Otherwise it returns false.         
                                                                   
*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome (string) {
    let reversedString = '';
    let initial_string = string;
    function reverse (initial_string) {
        if (initial_string.length === 0) {
            return '';
        }

        let firstCharacter = initial_string[0];
        let updatedString = initial_string.slice(1);
        
        return reverse(updatedString) + firstCharacter;
    }

    reversedString = reverse (initial_string);

    if (reversedString === string) {
        return true;
    }

    return false;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

/*
    Write a recursive function called someRecursive which accepts an array and a callback. 
    The function returns true if a single value in the array returns true when passed to the callback. 
    Otherwise it returns false.
*/

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = val => val % 2 !== 0;

function someRecursive (intArray, method) {    
    if (intArray.length === 0) {
        return false
    }

    let element = intArray.splice(0, 1);

    if (method(element)) {
        return true;
    }

    return someRecursive (intArray, method);    
}
console.log('........................');
console.log(someRecursive([1,2,3,4], isOdd)); //true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false

/*
    Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values 
    flattened.
*/


// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3