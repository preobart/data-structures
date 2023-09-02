class DoubleLinkedList {
    #head;
    #tail;

    size;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.size = 0;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index is out of bounds!');
        }

        this.size--
        let prevNode = this.#head;
        let id = 0;

        if (this.size === 0) {
            this.#head = null;
            this.#tail = null;

            return prevNode;
        }

        if (index === 0) {
            this.#head.next.prev = null;
            this.#head = this.#head.next;

            return prevNode;
        }

        if (index === this.size) {
            let output = this.#tail
            this.#tail.prev.next = null
            this.#tail = this.#tail.prev

            return output;
        }

        if (index <= size / 2) {

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

        prevNode.prev.next = prevNode.next
        prevNode.next.prev = prevNode.prev

        return prevNode

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