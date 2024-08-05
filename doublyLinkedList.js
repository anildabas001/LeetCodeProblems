class Node {
    constructor (value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}

class DoublyLinkedList {
    constructor () {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push (value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            const prevTailElement = this.tail
            newNode.prev = prevTailElement;
            prevTailElement.next = newNode;

            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop () {
        let elementToRemove = this.tail;
        if (this.length === 0) {
            return undefined;
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = elementToRemove.prev;
            elementToRemove.prev = null;
            newTail.next = null;
            this.tail = newTail;
        }

        this.length--;

        return elementToRemove;
    }

    shift () {
        let nodeToRemove = this.head;
        if (!this.head) {
            return undefined;
        } else if (this.tail === this.head) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = nodeToRemove.next;            
            this.head.prev = null;
            nodeToRemove.next = null;
        }

        this.length--;

        return nodeToRemove;
    }

    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get (index) {
        //unoptimized solution
        // let i = 0;

        // if (index < 0 && index >= this.length) {
        //     return null;
        // }

        // let current = this.head;

        // if (index === 0) {
        //     return current.value;
        // }

        // while (i < index) {
        //     current = current.next;
        //     i++;
        // }

        if (index < 0 || index >= this.length) {
            return null;
        }
        
        let current = this.head;
        
        if (index === 0) {
            return this.head.value;
        } else if (index === this.length - 1) {
            return this.tail.value
        } else if (index > 0 && index <= this.length / 2) {
            current = this.head;
            let i = 0;
            while (i < index) {
                current = current.next;
                i++;
            }
        } else {
            let i = this.length - 1;
            current = this.tail;
            while (i > index) {
                current = current.prev;
                i--;
            }
        }

        return current; 
    }

    set (value, index) {
        let currentElement = this.get (index);

        if (currentElement) {
            currentElement.value = value;
        }

        return this;
    }

    insert (value, index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        } else if (index === 0) {
            return this.unshift(value);
        } else if (index === this.length) {
            return this.push(value);
        } else {
            let newNode = new Node(value);
            let currentElement = this.get(index);

            newNode.next = currentElement;
            newNode.prev = currentElement.prev;

            currentElement.prev.next = newNode;
            currentElement.prev = newNode;

            this.length++;
        }

        return this;
    }

    remove (index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            let currentElement = this.get(index);
            let prevElement = currentElement.prev;
            let nextElement = currentElement.next;

            currentElement.prev = null;
            currentElement.next = null;

            prevElement.next = nextElement;
            nextElement.prev = prevElement;

            this.length--;

            return currentElement
        }
    }

    reverse () {
        let i = 0;
        let currentNode = this.head;

        while (i < this.length) {
            let nextNode = currentNode.next;
            let prevNode = currentNode.prev;
            currentNode.next = prevNode;
            currentNode.prev = nextNode;

            currentNode = nextNode;
            i++;
        }

        let prevHead = this.head;

        this.head = this.tail;
        this.tail = prevHead;
    }

    print () {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

}

let doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20)
doublyLinkedList.print()
doublyLinkedList.reverse();
console.log('....after reverse......')
doublyLinkedList.print()