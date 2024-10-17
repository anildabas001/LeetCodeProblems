// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

 

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example 2:


// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example 3:


// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

//my solution

var detectCycle = function(head) {
    if (head === null) {
        return null;
    }

    let slowPointer = head;
    let fastPointer = head;
    let cyclicNode = null;
    let isCyclic = false;

    while (slowPointer && fastPointer) {
        slowPointer = slowPointer.next;        
        fastPointer = fastPointer.next?.next;

        if (slowPointer === fastPointer) {
            slowPointer = head;
            isCyclic = true;  
            break;          
        }
    }

    while (isCyclic && cyclicNode === null) {
        if (slowPointer === fastPointer) {
            cyclicNode = slowPointer;
        }
        slowPointer = slowPointer.next;        
        fastPointer = fastPointer.next;
    }

    return cyclicNode;
};

//optimized solution
var detectCycle = function(head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;

    // Step 1: Detect if there is a cycle
    while (fast && fast.next) {
        slow = slow.next;       // Move slow pointer by 1 step
        fast = fast.next.next;  // Move fast pointer by 2 steps

        if (slow === fast) {
            // Cycle detected
            break;
        }
    }

    // If there's no cycle
    if (!fast || !fast.next) {
        return null;
    }

    // Step 2: Find the start of the cycle
    slow = head;  // Move one pointer to the start (head)
    
    while (slow !== fast) {
        slow = slow.next;  // Move both pointers one step at a time
        fast = fast.next;
    }

    // Both pointers meet at the start of the cycle
    return slow;
};
