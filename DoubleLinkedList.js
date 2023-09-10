class DoubleLinkedList {
    #head;
    #tail;
<<<<<<<< HEAD:DoubleLinkedList.js
========

>>>>>>>> master:src/DoubleLinkedList.js
    #size;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
<<<<<<<< HEAD:DoubleLinkedList.js
    }

    get size() {
        return this.#size;
========
>>>>>>>> master:src/DoubleLinkedList.js
    }

    remove(index) {
        if (index < 0 || index >= this.#size) {
<<<<<<<< HEAD:DoubleLinkedList.js
            throw new Error('Index is out of bounds!');
        }

        this.#size--
========
            throw new Error("Index is out of bounds!");
        }

        this.#size--;
>>>>>>>> master:src/DoubleLinkedList.js
        let prevNode = this.#head;
        let id = 0;

        if (this.#size === 0) {
            this.#head = null;
            this.#tail = null;

            return prevNode.data;
        }

        if (index === 0) {
            this.#head.next.prev = null;
            this.#head = this.#head.next;

            return prevNode.data;
        }

        if (index === this.#size) {
            let output = this.#tail;
            this.#tail.prev.next = null;
            this.#tail = this.#tail.prev;

            return output.data;
        }

        if (index <= this.#size / 2) {
<<<<<<<< HEAD:DoubleLinkedList.js

========
>>>>>>>> master:src/DoubleLinkedList.js
            while (id < index) {
                prevNode = prevNode.next;
                id++;
            }
        } else {
            prevNode = this.#tail;
            id = this.#size;

            while (id > index) {
                prevNode = prevNode.prev;
                id--;
            }
        }

        prevNode.prev.next = prevNode.next;
        prevNode.next.prev = prevNode.prev;

        return prevNode.data;
    }

    insert(index, data) {
        if (index < 0 || index > this.#size) {
<<<<<<<< HEAD:DoubleLinkedList.js
            throw new Error('Index is out of bounds!');
        }

        const node = new Node(data);
========
            throw new Error("Index is out of bounds!");
        }

        const node = new Node(data);
        this.#size++;
>>>>>>>> master:src/DoubleLinkedList.js

        if (!this.#head) {
            this.#head = node;
            this.#tail = node;
            this.#size++;

            return;
        }

        if (index === 0) {
            this.#head.prev = node;
            node.next = this.#head;

            this.#head = node;
            this.#size++;

            return;
        }

<<<<<<<< HEAD:DoubleLinkedList.js
        if (index === this.#size) {
========
        if (index === this.#size - 1) {
>>>>>>>> master:src/DoubleLinkedList.js
            this.#tail.next = node;
            node.prev = this.#tail;

            this.#tail = node;
            this.#size++;

            return;
        }

        let prevNode = this.#head;
        let id = 0;

<<<<<<<< HEAD:DoubleLinkedList.js
        if (index <= this.#size / 2) {

========
        if (index <= this.#size - 1 / 2) {
>>>>>>>> master:src/DoubleLinkedList.js
            while (id < index) {
                prevNode = prevNode.next;
                id++;
            }
        } else {
            prevNode = this.#tail;
            id = this.#size;

            while (id > index) {
                prevNode = prevNode.prev;
                id--;
            }
        }

<<<<<<<< HEAD:DoubleLinkedList.js
        node.next = prevNode
========
        node.next = prevNode.next;
>>>>>>>> master:src/DoubleLinkedList.js
        node.prev = prevNode;
        node.next.prev = node;
        prevNode.next = node;
        this.#size++;
    }

    get size() {
        return this.#size;
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

module.exports.Node = Node;
<<<<<<<< HEAD:DoubleLinkedList.js
module.exports.DoubleLinkedList = DoubleLinkedList;
========
module.exports.DoubleLinkedList = DoubleLinkedList;
>>>>>>>> master:src/DoubleLinkedList.js
