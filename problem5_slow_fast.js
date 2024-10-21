// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 

function reverseLinkedList (head) {
    let current = head;
    let prev = null;
    
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
} 

var reorderList = function(head) {
    let slowPointer = head;
    let fastPointer =  head;

    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    
    let reverseHead = reverseLinkedList(slowPointer);

    let current = head;
    let revCurrent = reverseHead;

    while (revCurrent && revCurrent.next) {
        let currentNext = current.next;
        let revCurrentNext = revCurrent.next;

        current.next = revCurrent;
        revCurrent.next = currentNext;

        current = currentNext;
        revCurrent = revCurrentNext;
    }
};