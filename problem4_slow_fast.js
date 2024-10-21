// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false


var isPalindrome = function(head) {

    if (head === null || head.next === null) {
        return true;
    }

    let slowPointer = head;
    let fastPointer = head;
    let tracker = [];

    while (fastPointer && fastPointer.next) {
        tracker.push(slowPointer.val);

        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    
     if (fastPointer && fastPointer.next === null) {
        tracker.push(slowPointer.val);
     }  

    console.log(tracker)

    // if ((tracker.length%2) !== 0) {
    //     tracker.pop();
    // }

    while (slowPointer) {
        let poppedItem = tracker.pop();

        if (slowPointer.val != poppedItem) {
            return false;
        }

        slowPointer = slowPointer.next;
    }

    return true;
};