class DoubleLinkedList {
    #head;
    #tail;

    size;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.size = 0;
    }

    log() {
        let id = 0;
        let prevNode = this.#head;

        console.log(prevNode.data);

        while (id < this.size - 1) {
            prevNode = prevNode.next
            console.log(prevNode.data);
            id++;
        }
    }
    remove(index){

    }

    insert(index, data) {
        if (index < 0 || index > this.size) {
            throw new Error('Index is out of bounds!');
        }

        const node = new Node(data);
        this.size++;

        if (!this.#head) {
            this.#head = node;
            this.#tail = node;
            return;
        }

        if (index === 0) {
            this.#head.prev = node;
            node.next = this.#head;

            this.#head = node;
            return;
        }

        if (index === this.size) {
            this.#tail.next = node
            node.prev = this.#tail

            this.#tail = node;
            return;
        }

        let prevNode = this.#head;
        let id = 0;

        if (index <= size / 2) {
            let prevNode = this.#head;
            let id = 0;

            while (id < index) {
                prevNode = prevNode.next;
                id++;
            }

        } else {
            prevNode = this.#tail
            id = this.size

            while (id > index) {
                prevNode = prevNode.prev;
                id--;
            }
        }

        node.next = prevNode.next
        node.prev = prevNode;
        node.next.prev = node;
        prevNode.next = node;
    }
}

class Node {
    data;
    next;
    prev;

    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

const list = new DoubleLinkedList();
const array = [];
let start = Date.now();

for (let i = 0; i < 100000000; i++) {
    list.insert(0, i);
    // array.unshift(i);
}

let end = Date.now();

console.log(`List time: ${(end - start) / 1000}ms`);

