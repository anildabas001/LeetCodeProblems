

//my version
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

            this.length--;
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
        if (index > this.length || index < 0) {
            return undefined;           
        }

        let newNode = new Node(value)

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else if (index === this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            let i = 0;
            let current = this.head; 
            let prevNode = this.head;
            while (i < index) {
                prevNode = current;
                current = current.next;
                i++;
            }

            prevNode.next = newNode;
            newNode.next = current;
        }
        
        this.length++;
        return this;
    }

    remove (index) {
        if (index < 0 && index > this.length - 1) {
            return undefined;
        }  
        let removedNode = this.head;
        if (index === 0) {
            removedNode = this.shift();
            return removedNode;
        } else if (index === this.length - 1) {
            let current = this.head;
            let i = 0;
            while (i < index - 1) {
                current = current.next;
                i++;
            }

            removedNode = current.next;
            this.tail = current;
            current.next = null;

        } else {
            let prevNode = this.head;
            let i = 0;
            while (i < index - 1) {
                prevNode = prevNode.next;
                i++;
            }

            let nodeToRemove = prevNode.next;
            removedNode = nodeToRemove;
            nodeToRemove.next = null;
            prevNode.next = nodeToRemove.next;

        }

        this.length--;
        return removedNode;
    }

    reverse () {
        let i = 0;

        let prevNode = null;
        let currentNode = this.head;

        if (this.length === 0) {
            return this;
        }

        while (i <= this.length - 1) {
            let tempNode = currentNode.next;

            currentNode.next = prevNode;

            prevNode = currentNode;
            currentNode = tempNode;

            i++;
        }

        let tempTail = this.tail;
        this.tail = this.head;
        this.head = tempTail;

        return this;

    }

    print () {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    
}

var list = new SinglyLinkedList()
list.push("HELLO") 
list.push("GOODBYE")
list.push("!")

list.print();
list.reverse();
console.log('after reverse');
list.print();
// console.log(list.remove(2));
// console.log(list.remove(1));
// console.log(list.remove(0));
// console.log(list);

//Optimized version


// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         var newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     pop(){
//         if(!this.head) return undefined;
//         var current = this.head;
//         var newTail = current;
//         while(current.next){
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if(this.length === 0){
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }
//     shift(){
//         if(!this.head) return undefined;
//         var currentHead = this.head;
//         this.head = currentHead.next;
//         this.length--;
//         if(this.length === 0){
//             this.tail = null;
//         }
//         return currentHead;
//     }
//     unshift(val){
//         var newNode = new Node(val);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }
//     get(index){
//         if(index < 0 || index >= this.length) return null;
//         var counter = 0;
//         var current = this.head;
//         while(counter !== index){
//             current = current.next;
//             counter++;
//         }
//         return current;
//     }
//     set(index, val){
//         var foundNode = this.get(index);
//         if(foundNode){
//             foundNode.val = val;
//             return true;
//         }
//         return false;
//     }
//     insert(index, val){
//         if(index < 0 || index > this.length) return false;
//         if(index === this.length) return !!this.push(val);
//         if(index === 0) return !!this.unshift(val);
        
//         var newNode = new Node(val);
//         var prev = this.get(index - 1);
//         var temp = prev.next;
//         prev.next = newNode;
//         newNode.next = temp;
//         this.length++;
//         return true;
//     }
// }

// var list = new SinglyLinkedList()

// list.push(100)
// list.push(201)
// list.push(250)
// list.push(350)


