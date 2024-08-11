/*
 isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
(reads the same forward and backward). Otherwise it returns false.         
                                                                   


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


*/
//optimal solution
function isPalindrome (string) {
    if (string.length === 0 || string.length === 1 ) {
        return true;
    }  
    
    let firstChar = string[0];
    let lastChar = string[string.length - 1];

    if (firstChar != lastChar) {
        return false;
    }
    
    let updatedString = string.substring(1, string.length-1);

    return isPalindrome(updatedString);
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false