class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (value) {
        let node = new Node(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            let prevTail = this.tail;
            this.tail = node;

            prevTail.next = node;            
        }        

        this.length++;
        return this;
    }

    pop () {
        if (!this.head) return undefined;
        let startingNode = this.head;
        let futureLastNode = startingNode;        

        if (this.tail === this.head) {
            this.tail = null;
            this.head = null;

            this.length --;
            return startingNode;
        }

        while (startingNode.next) {
            futureLastNode = startingNode;
            startingNode = startingNode.next;            
        }

        futureLastNode.next = null;
        this.tail = futureLastNode;

        
        
        this.length --;
        return startingNode;

    }

    shift () {
        if (!this.head) {
            return undefined;
        }  
        
        let head = this.head;

        let nextHead = this.head.next;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        this.head = nextHead;

        this.length --;
        return head;
    }

    unshift(value) {
        let node = new Node(value);
        let head = this.head;

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = head;
            this.head = node;
        }       

        this.length++;
        return this;
    }

    get (index) {
        let i = 0;
        if ( index < 0 || index > this.length - 1 ) {
            return null;
        }

        let currentNode = this.head;   

        while (i < index) {
            currentNode = currentNode?.next;
            i++;
        }

        return currentNode;
    }

    set (value, index) {
        if ( index < 0 || index > this.length - 1 ) {
            return false;
        }

        let currentNode = this.head;

        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }

        currentNode.value = value;

        return true;
    }

    insert (value, index) {
        if (index > this.length) {
            return undefined;
        }
        
    }
}

var list = new SinglyLinkedList()
list.push("HELLO") 
list.push("GOODBYE")
list.push("!")

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());