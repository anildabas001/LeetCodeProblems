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
}