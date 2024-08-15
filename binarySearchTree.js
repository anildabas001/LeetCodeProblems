class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    //my solution
    // insert (value) {
    //     let node = new Node(value);

    //     if (!this.root) {
    //         this.root = node;
    //         return this;
    //     }
    //     let current = this.root;
    //     let prevNode = null;

    //     while (true) {  
    //         if(value === current.value) return undefined;

    //         prevNode = current;

    //         if (value > current.value) {
    //             current = current.right;   
                
    //             if (!current) {
    //                 prevNode.right = node;
    //                 break;
    //             }

    //         } else {
    //             current = current.left;

    //             if (!current) {
    //                 prevNode.left = node;
    //                 break;
    //             }

    //         }
            
    //     }

    //     return this;
    // }

    //optimized solution
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    search (value) {
        let current = this.root;

        while (true) {
            if (!current) {
                return false;
            }
            if (current.value === value) {
                return true;
            } else if (current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }

    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

let binaryTree = new BinarySearchTree();

binaryTree.insert(6);

binaryTree.insert(4);

binaryTree.insert(2);

binaryTree.insert(10);

binaryTree.insert(9);

console.log(binaryTree.search(9));
console.log(binaryTree.search(4));
console.log(binaryTree.search(6));
console.log(binaryTree.search(12));
