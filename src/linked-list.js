class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insert(element) {
        let newNode = new LinkedListNode(element);
        if (this.head == null) {
            this.head = newNode;
            this.size++;
        }
        else {
            let done = false;
            let currentNode = this.head;
            while (!done) {
                let previousNode;
                if(newNode.data.name > currentNode.data.name) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                else if (newNode.data.name < currentNode.data.name) {
                    previousNode.next = newNode;
                    newNode.next = currentNode;
                    this.size++;
                    done = true;
                }
                else {
                    return;
                }
                if (currentNode.next == null) {
                    currentNode.next = newNode;
                    this.size++;
                    done = true;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
        }
    }

    contains(string) {
            let currentNode = this.head;

            while (currentNode != null) {
                if (currentNode.data.name == string) {
                    return currentNode.data;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
        }

    remove(string) {
        if(this.head != null) {
            if (this.head.data.name == string) {
                let tempNode = this.head;
                this.head = this.head.next;
                tempNode.next = null;
                this.length -= 1;
            }
            else {
                let previousNode = this.head;
                let currentNode = previousNode.next;
                while (currentNode != null) {
                    if (currentNode.data.name == string) {
                        previousNode.next = currentNode.next;
                        currentNode.next = null;
                        this.length -= 1;
                        return;
                    }
                    else {
                        previousNode = currentNode;
                        currentNode = currentNode.next;
                    }
                }
            }
        }
    }

    get size() {
        return this.length;
    }

    set size(size) {
        this.length = size;
    }

    toString() {
        let currentNode = this.head;
        let listString = '';

        while (currentNode != null) {
            listString += `[${currentNode.data.name}] -> `;
                currentNode = currentNode.next;
        }
            return listString + 'null';
    }

}

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    setNext(node) {
        this.next = node;
    }
}

module.exports = LinkedList;

let myLinkedList = new LinkedList;


//Trent's linked list

function Node(element){
    this.element = element;
    this.next = null;
}

function Llist() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function insert (newElement, item){
    let newNode = new Node(newElement);
    let current = this.find(item);
    let currentNode = this.head;
    while (currentNode.element < newNode.element) {
        currentNode = currentNode.next;
    }
    if (currentNode.element > newNode.element) {
        newNode.next = current.next;
        current.next = newNode;
    }
}

function find(item){
    let currentNode = this.head;
    while (currentNode.element !== item) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function remove(item) {
    let previousNode = this.findPrevious(item);
    if(!(previousNode.next === null)){
        previousNode.next = previousNode.next.next;
    }
}

function findPrevious(item){
    let currentNode = this.head;
    while (!(currentNode.next == null) && (currentNode.next.element !== item)){
        currentNode = currentNode.next;
    }
    return currentNode;
}